// create subprocess
const p = Deno.run({
    cmd: ["echo", "hello"],
  });
  
  // await its completion
  await p.status();

// deno run --allow-run ./subprocess_simple.ts