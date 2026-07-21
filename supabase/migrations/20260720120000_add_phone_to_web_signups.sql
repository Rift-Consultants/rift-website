-- Preserve the phone number submitted with course-outline registrations.
alter table public.web_signups
  add column if not exists phone text;
