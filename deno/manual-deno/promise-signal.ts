console.log("Press Ctrl-C to trigger a SIGINT signal");
await Deno.signal(Deno.Signal.SIGINT);
console.log("interrupted!");
Deno.exit();

// deno run --unstable promise-signal.ts