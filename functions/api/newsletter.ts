async function sha256(text: string){const data=new TextEncoder().encode(text);const hash=await crypto.subtle.digest('SHA-256',data);return [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,'0')).join('')}
function clean(s: unknown,max=256){return String(s||'').replace(/[\u0000-\u001f\u007f]/g,'').slice(0,max)}
export async function onRequestPost({ request, env }: any) {
  const len = Number(request.headers.get('content-length') || '0');
  if (len > 4096) return Response.json({ ok:false, error:'Payload too large' }, { status:413 });
  let body; try { body = await request.json(); } catch { return Response.json({ ok:false, error:'Invalid JSON' }, { status:400 }); }
  if (body.website) return Response.json({ ok:true, skipped:true });
  const started = Number(body.signup_started_at || 0);
  if (started && Date.now() - started < 1200) return Response.json({ ok:true, skipped:true });
  const email = clean(body.email_address,254).trim().toLowerCase();
  if (!/^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,24}$/.test(email)) return Response.json({ ok:false, error:'Enter a valid email.' }, { status:400 });
  if (!env.NEWSLETTER_LEADS) return Response.json({ ok:false, error:'Newsletter storage is not configured.' }, { status:503 });
  const ip = request.headers.get('cf-connecting-ip') || '0.0.0.0';
  const ipHash=(await sha256(ip)).slice(0,32), emailHash=await sha256(email);
  const rateKey=`rate:v1:${ipHash}`; if (await env.NEWSLETTER_LEADS.get(rateKey)) return Response.json({ ok:false, error:'Please wait before trying again.' }, { status:429 });
  await env.NEWSLETTER_LEADS.put(rateKey,'1',{expirationTtl:60});
  const key=`lead:v1:${emailHash}`; const existing=await env.NEWSLETTER_LEADS.get(key,'json'); const now=new Date().toISOString();
  const record={email,emailHash,firstSeenAt:existing?.firstSeenAt||now,lastSeenAt:now,signupCount:(existing?.signupCount||0)+1,source:'site',campaign:'newsletter_signup',referer:clean(request.headers.get('referer'),512),ipHash,userAgent:clean(request.headers.get('user-agent'),512),status:'captured'};
  await env.NEWSLETTER_LEADS.put(key,JSON.stringify(record));
  return Response.json({ ok:true });
}
