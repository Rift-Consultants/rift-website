type SupabaseInsertOptions = {
  table: string;
  payload: Record<string, unknown>;
  returning?: 'minimal' | 'representation';
};

function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    throw new Error('Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.');
  }

  return { url: url.replace(/\/$/, ''), publishableKey };
}

export async function insertSupabaseRow<T = Record<string, unknown>>({ table, payload, returning = 'minimal' }: SupabaseInsertOptions) {
  const { url, publishableKey } = getSupabaseConfig();
  const response = await fetch(`${url}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      apikey: publishableKey,
      Authorization: `Bearer ${publishableKey}`,
      'Content-Type': 'application/json',
      Prefer: `return=${returning}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Supabase insert failed: ${response.status} ${message}`);
  }

  if (returning === 'representation') {
    const rows = (await response.json()) as T[];
    return rows[0] ?? null;
  }

  return null;
}
