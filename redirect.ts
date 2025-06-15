// redirect.ts

const redirectUrl = "https://smson.online/3qzkg";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
