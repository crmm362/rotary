import { type FreshContext } from "$fresh/server.ts";

const CANONICAL_HOST = "rotaryperinthalmanna.org";

export async function handler(req: Request, ctx: FreshContext) {
  const url = new URL(req.url);

  // Redirect the default Deno subdomain (e.g. rotary.crmm.deno.net) and any
  // preview URLs to the canonical custom domain. The custom domain and www
  // pass through untouched.
  if (url.hostname.endsWith(".deno.net")) {
    return Response.redirect(
      `https://${CANONICAL_HOST}${url.pathname}${url.search}`,
      301,
    );
  }

  return await ctx.next();
}
