import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const HUBSPOT_API_KEY = Deno.env.get('HUBSPOT_API_KEY');
    if (!HUBSPOT_API_KEY) {
      throw new Error('HUBSPOT_API_KEY is not configured');
    }

    const { navn, email, telefon, adresse, boligtype, personer, forbrug, nuvarendeSelskab } = await req.json();

    if (!email || !navn) {
      return new Response(JSON.stringify({ error: 'Missing required fields: navn, email' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Split navn into first/last name
    const nameParts = navn.trim().split(' ');
    const firstname = nameParts[0] || '';
    const lastname = nameParts.slice(1).join(' ') || '';

    const contactData = {
      properties: {
        email,
        firstname,
        lastname,
        phone: telefon || '',
        address: adresse || '',
        hs_lead_status: 'NEW',
        // Custom HubSpot properties
        boligtype: boligtype || '',
        antal_personer: personer || '',
        forbrug: forbrug || '',
        adresse: adresse || '',
      },
    };

    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    const data = await response.json();

    if (!response.ok) {
      // If contact exists, try to update instead
      if (response.status === 409 && data?.message?.includes('already exists')) {
        const existingId = data?.message?.match(/Existing ID: (\d+)/)?.[1];
        if (existingId) {
          const updateResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${existingId}`, {
            method: 'PATCH',
            headers: {
              'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
          });
          const updateData = await updateResponse.json();
          if (!updateResponse.ok) {
            throw new Error(`HubSpot update failed [${updateResponse.status}]: ${JSON.stringify(updateData)}`);
          }
          return new Response(JSON.stringify({ success: true, action: 'updated', id: existingId }), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
      }
      throw new Error(`HubSpot API failed [${response.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true, action: 'created', id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('HubSpot sync error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
