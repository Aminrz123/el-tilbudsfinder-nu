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
