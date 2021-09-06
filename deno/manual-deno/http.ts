/*async function handle(conn: Deno.Conn) {
    const httpConn = Deno.serveHttp(conn);
    for await (const requestEvent of httpConn) {
      await requestEvent.respondWith(
        new Response("hello world", {
          status: 200,
        }),
      );
    }
}*/

/*async function handle(conn: Deno.Conn) {
    const httpConn = Deno.serveHttp(conn);
    for await (const requestEvent of httpConn) {
      await requestEvent.respondWith(handleReq(requestEvent.request));
    }
}
  
function handleReq(req: Request): Response {
    if (req.headers.get("upgrade") != "websocket") {
        return new Response("request isn't trying to upgrade to websocket.");
    }
    const { socket, response } = Deno.upgradeWebSocket(req);
    socket.onopen = () => console.log("socket opened");
    socket.onmessage = (e) => {
      console.log("socket message:", e.data);
      socket.send(new Date().toString());
    };
    socket.onerror = (e) => console.log("socket errored:", e.message);
    socket.onclose = () => console.log("socket closed");
    return response;
}

//--unstable*/

const server = Deno.listen({ port: 8080 });

while (true) {
  try {
    const conn = await server.accept();
    (async () => {
      const httpConn = Deno.serveHttp(conn);
      while (true) {
        try {
          const requestEvent = await httpConn.nextRequest();
          // ... handle requestEvent ...
        } catch (err) {
          // the connection has finished
          break;
        }
      }
    })();
  } catch (err) {
    // The listener has closed
    break;
  }
}
