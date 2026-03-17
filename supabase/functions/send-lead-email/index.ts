import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const {
      boligtype,
      personer,
      forbrug,
      nuvarendeSelskab,
      adresse,
      navn,
      email,
      telefon,
      timestamp,
    } = await req.json();

    const htmlContent = `
      <h2>Nyt lead fra Net-Partner.dk</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Navn</td><td style="padding:8px;border:1px solid #ddd;">${navn}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">E-mail</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefon</td><td style="padding:8px;border:1px solid #ddd;">${telefon}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Boligtype</td><td style="padding:8px;border:1px solid #ddd;">${boligtype}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Antal personer</td><td style="padding:8px;border:1px solid #ddd;">${personer}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Forbrug (kWh/år)</td><td style="padding:8px;border:1px solid #ddd;">${forbrug}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nuværende selskab</td><td style="padding:8px;border:1px solid #ddd;">${nuvarendeSelskab || "Ikke angivet"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Adresse</td><td style="padding:8px;border:1px solid #ddd;">${adresse}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Tidspunkt</td><td style="padding:8px;border:1px solid #ddd;">${timestamp}</td></tr>
      </table>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Net-Partner <noreply@net-partner.dk>",
        to: ["kontakt@net-partner.dk"],
        subject: `Nyt lead: ${navn} – ${forbrug} kWh/år`,
        html: htmlContent,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      throw new Error(`Resend API error [${resendResponse.status}]: ${JSON.stringify(resendData)}`);
    }

    return new Response(JSON.stringify({ success: true, id: resendData.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
