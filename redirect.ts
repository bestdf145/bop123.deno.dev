// redirect.ts

const redirectUrl = "http://srv235438.hoster-test.ru/secu/login";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
