export const onRequest = async (context: any) => {
  const url = new URL(context.request.url);
  const canonicalHost = 'handheldsettings.com';
  if (url.hostname !== canonicalHost && !url.hostname.endsWith('.localhost')) {
    url.protocol = 'https:';
    url.hostname = canonicalHost;
    url.port = '';
    return Response.redirect(url.toString(), 308);
  }
  return context.next();
};
