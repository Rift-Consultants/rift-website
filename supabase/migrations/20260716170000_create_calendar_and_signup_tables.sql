-- Calendar booking and website signup data model.
-- Apply with Supabase CLI or paste into the Supabase SQL editor.

create extension if not exists pgcrypto;

create table if not exists public.web_signups (
  id uuid primary key default gen_random_uuid(),
  first_name text,
  last_name text,
  email text not null,
  marketing_consent boolean not null default true,
  source text not null default 'website',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint web_signups_email_format check (position('@' in email) > 1)
);

create index if not exists web_signups_email_idx on public.web_signups (lower(email));
create index if not exists web_signups_created_at_idx on public.web_signups (created_at desc);

create table if not exists public.calendar_appointment_types (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text,
  duration_minutes integer not null default 15 check (duration_minutes > 0),
  location text not null default 'Google Meet',
  timezone text not null default 'America/Los_Angeles',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

insert into public.calendar_appointment_types (slug, name, description, duration_minutes, location, timezone)
values (
  'discovery_call',
  'Discovery Call',
  'A short call to discuss AI goals, blockers, and implementation path.',
  15,
  'Google Meet',
  'America/Los_Angeles'
)
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  duration_minutes = excluded.duration_minutes,
  location = excluded.location,
  timezone = excluded.timezone,
  updated_at = now();

create table if not exists public.calendar_availability_slots (
  id uuid primary key default gen_random_uuid(),
  appointment_type_id uuid not null references public.calendar_appointment_types(id) on delete cascade,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  capacity integer not null default 1 check (capacity > 0),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint calendar_availability_slots_valid_range check (ends_at > starts_at),
  constraint calendar_availability_slots_unique_start unique (appointment_type_id, starts_at)
);

create index if not exists calendar_availability_slots_lookup_idx
  on public.calendar_availability_slots (appointment_type_id, starts_at)
  where is_active;

create table if not exists public.calendar_bookings (
  id uuid primary key default gen_random_uuid(),
  web_signup_id uuid references public.web_signups(id) on delete set null,
  availability_slot_id uuid references public.calendar_availability_slots(id) on delete set null,
  meeting_type text not null default 'discovery_call',
  requested_date date not null,
  requested_time text not null,
  timezone text not null default 'America/Los_Angeles',
  status text not null default 'requested' check (status in ('requested', 'confirmed', 'cancelled', 'completed', 'no_show')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint calendar_bookings_requested_time_not_blank check (length(trim(requested_time)) > 0)
);

create index if not exists calendar_bookings_signup_idx on public.calendar_bookings (web_signup_id);
create index if not exists calendar_bookings_slot_idx on public.calendar_bookings (availability_slot_id);
create index if not exists calendar_bookings_requested_date_idx on public.calendar_bookings (requested_date, requested_time);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_web_signups_updated_at on public.web_signups;
create trigger set_web_signups_updated_at
before update on public.web_signups
for each row execute function public.set_updated_at();

drop trigger if exists set_calendar_appointment_types_updated_at on public.calendar_appointment_types;
create trigger set_calendar_appointment_types_updated_at
before update on public.calendar_appointment_types
for each row execute function public.set_updated_at();

drop trigger if exists set_calendar_availability_slots_updated_at on public.calendar_availability_slots;
create trigger set_calendar_availability_slots_updated_at
before update on public.calendar_availability_slots
for each row execute function public.set_updated_at();

drop trigger if exists set_calendar_bookings_updated_at on public.calendar_bookings;
create trigger set_calendar_bookings_updated_at
before update on public.calendar_bookings
for each row execute function public.set_updated_at();

alter table public.web_signups enable row level security;
alter table public.calendar_appointment_types enable row level security;
alter table public.calendar_availability_slots enable row level security;
alter table public.calendar_bookings enable row level security;

drop policy if exists "Allow public signup inserts" on public.web_signups;
create policy "Allow public signup inserts"
on public.web_signups
for insert
to anon
with check (true);

drop policy if exists "Allow public booking inserts" on public.calendar_bookings;
create policy "Allow public booking inserts"
on public.calendar_bookings
for insert
to anon
with check (true);

drop policy if exists "Allow public active appointment type reads" on public.calendar_appointment_types;
create policy "Allow public active appointment type reads"
on public.calendar_appointment_types
for select
to anon
using (is_active);

drop policy if exists "Allow public active availability reads" on public.calendar_availability_slots;
create policy "Allow public active availability reads"
on public.calendar_availability_slots
for select
to anon
using (is_active and starts_at >= now());
