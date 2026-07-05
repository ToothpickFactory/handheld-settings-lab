export async function onRequestGet({ env }: any) {
  let kv = 'unbound';
  try {
    if (env.NEWSLETTER_LEADS) {
      await env.NEWSLETTER_LEADS.put('health:last', new Date().toISOString(), { expirationTtl: 120 });
      kv = 'ready';
    }
  } catch (e) { kv = 'error'; }
  return Response.json({ ok:true, app:'handheld-settings-lab', kv, time:new Date().toISOString() });
}
