# Supabase setup

This project writes website signups to Supabase through the App Router server action in `src/app/actions.ts`. If a visitor chooses a discovery-call time from the calendar before submitting the form, the action also creates a related calendar booking request.

## Environment variables

Create `.env.local` in the project root and set:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tytmiqapwpolsrsrgxrs.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_erGv6xsZSTae3FCdHP77XA_IdlzjBez
```

`.env.local` is intentionally ignored by git. Configure the same variables in your hosting provider before deploying.

## Database migration

Apply the migration in `supabase/migrations/20260716170000_create_calendar_and_signup_tables.sql` with the Supabase CLI or paste it into the Supabase SQL editor.

The migration creates:

- `web_signups` for the registration form submission.
- `calendar_appointment_types` for bookable call types, seeded with `discovery_call`.
- `calendar_availability_slots` for future bookable time slots.
- `calendar_bookings` for the requested date/time connected to a signup.

The form currently stores selected calendar times as booking requests. You can later attach bookings to exact `calendar_availability_slots` rows when the calendar UI is backed by database-driven availability.

## Row Level Security

The migration enables RLS and adds public insert policies for `web_signups` and `calendar_bookings`, plus public read policies for active appointment types and future active availability slots.

Do not add public `select` policies for `web_signups` or `calendar_bookings` unless you want visitors to read submitted registration and booking data.
