export async function onRequestGet({ env }: any) {
  let kv = 'unbound';
  try {
    if (env.NEWSLETTER_LEADS) {
      const stamp = new Date().toISOString();
      await env.NEWSLETTER_LEADS.put('health:last', stamp, { expirationTtl: 120 });
      const readback = await env.NEWSLETTER_LEADS.get('health:last');
      kv = readback === stamp ? 'ready' : 'readback-mismatch';
    }
  } catch (e) { kv = 'error'; }
  return Response.json({ ok:true, app:'handheld-settings-lab', kv, time:new Date().toISOString() });
}
