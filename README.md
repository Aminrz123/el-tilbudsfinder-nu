# Net-Partner.dk

En dansk lead-genereringsside, der hjælper husstande med at sammenligne elpriser og finde en billigere elaftale. Brugeren udfylder en simpel formular, og dataen gemmes i en sikker database, synkroniseres til HubSpot og sendes som e-mail notifikation.

- **Live site:** https://net-partner.dk
- **Lovable project:** https://lovable.dev/projects/582c60b2-161a-46f8-b963-eaaa942a456a

## Teknologier

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **State & routing:** TanStack Query, React Router, React Hook Form + Zod
- **Backend:** Lovable Cloud (Supabase) — PostgreSQL, Auth, Edge Functions
- **E-mail:** Resend (`supabase/functions/send-lead-email`)
- **CRM-integration:** HubSpot (`supabase/functions/sync-hubspot`)

## Struktur

```text
src/
  components/      # UI-komponenter, sektionskomponenter og shadcn/ui
  pages/           # Sider: forsiden, tekstsider, admin, success, 404
  integrations/    # Supabase klient og genererede typer
  hooks/           # Fælles hooks
  lib/             # Hjælpefunktioner
  assets/          # Billeder
supabase/
  functions/       # Edge Functions: send-lead-email, sync-hubspot
  migrations/      # Database-skema
```

## Sider og funktioner

| Side | Sti | Formål |
|------|-----|--------|
| Forside | `/` | Hero, lead-formular, fordele, FAQ |
| Tak-side | `/tak` | Bekræftelse efter indsendelse |
| Admin login | `/admin` | Login til admin-dashboard |
| Admin dashboard | `/admin/dashboard` | Se, opdater status og slet leads |
| Brugerbetingelser | `/brugerbetingelser` | Juridisk tekst |
| Cookiepolitik | `/cookiepolitik` | Cookie-information |
| Privatlivspolitik | `/privatlivspolitik` | Privatlivsbetingelser |
| Forretningsmodel | `/forretningsmodel` | Beskrivelse af forretningsmodellen |
| Afbestilling | `/afmeld` | Formular til at afmelde/abonnement |

### Lead-formularen

- Trin 1: boligtype, antal personer, årligt forbrug, nuværende selskab, adresse
- Trin 2: navn, e-mail, telefon
- Samtykke til brugerbetingelser og datadeling via to checkboxes
- Validering med Zod
- Adresse- og elselskabs-autofuldførelse

### Backend / automatisering

- Nye leads gemmes i `public.leads` tabellen
- `sync-hubspot` opretter eller opdaterer kontakten i HubSpot med properties:
  - `firstname`, `lastname`, `email`, `phone`, `address`
  - `boligtype`, `antal_personer`, `forbrug`, `adresse`
- `send-lead-email` sender en HTML-e-mail med lead-detaljer fra `noreply@net-partner.dk`

### Admin-system

- Adgang styres via Supabase Auth + `public.user_roles`
- Kun brugere med `admin`-rollen kan se og redigere leads
- Opret en admin-bruger i Supabase Auth, og tilføj derefter rollen i `public.user_roles`

## Kom i gang

1. Klon repoet og installer afhængigheder:

```bash
npm install
```

2. Kopier miljøvariablerne (værdierne findes i Lovable Cloud / din `.env`):

```bash
# Frontend
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
VITE_SUPABASE_PROJECT_ID=...

# Backend (Edge Functions)
RESEND_API_KEY=...
HUBSPOT_API_KEY=...
```

3. Start udviklingsserveren:

```bash
npm run dev
```

4. Byg til produktion:

```bash
npm run build
```

## Database-skema

```sql
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  boligtype TEXT NOT NULL,
  personer TEXT NOT NULL,
  forbrug TEXT NOT NULL,
  nuvaerende_selskab TEXT,
  adresse TEXT NOT NULL,
  navn TEXT NOT NULL,
  email TEXT NOT NULL,
  telefon TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'ny',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

## Deployment

Projektet deployes automatisk via Lovable. Når du publicerer, bygges og hostes frontend, mens backend-funktioner deployes til Lovable Cloud.

Efter ændringer i Edge Functions skal du huske at deploye dem igen fra Lovable.

## Integrationer

- **HubSpot:** Kræver en Private App med `crm.objects.contacts.read` og `crm.objects.contacts.write` scopes.
- **Resend:** Kræver et verificeret afsender-domæne (`net-partner.dk`).

## Udviklet med

Bygget i [Lovable](https://lovable.dev) med React, TypeScript og Tailwind CSS.
