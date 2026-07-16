'use server';

import { redirect } from 'next/navigation';
import { insertSupabaseRow } from '@/lib/supabase/server';

function normalizeOptionalText(value: FormDataEntryValue | null) {
  const normalized = String(value ?? '').trim();
  return normalized.length > 0 ? normalized : null;
}

export async function registerForWebinar(formData: FormData) {
  const firstName = normalizeOptionalText(formData.get('firstName'));
  const lastName = normalizeOptionalText(formData.get('lastName'));
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const marketingConsent = formData.get('marketingConsent') === 'on';
  const requestedDate = normalizeOptionalText(formData.get('requestedDate'));
  const requestedTime = normalizeOptionalText(formData.get('requestedTime'));

  if (!email) {
    throw new Error('Email is required.');
  }

  const signupId = crypto.randomUUID();

  await insertSupabaseRow({
    table: 'web_signups',
    payload: {
      id: signupId,
      first_name: firstName,
      last_name: lastName,
      email,
      marketing_consent: marketingConsent,
      source: 'website_webinar_form',
    },
  });

  if (requestedDate && requestedTime) {
    await insertSupabaseRow({
      table: 'calendar_bookings',
      payload: {
        web_signup_id: signupId,
        requested_date: requestedDate,
        requested_time: requestedTime,
        timezone: 'America/Los_Angeles',
        meeting_type: 'discovery_call',
        status: 'requested',
      },
    });
  }

  redirect('/course-outline');
}
