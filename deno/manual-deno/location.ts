//console.log(location.href);
// deno run --location https://example.com/path main.ts

//const response = await fetch("./orgs/denoland");
// deno run --location https://api.github.com/ --allow-net main.ts

const worker = new Worker("./workers/hello.ts", { type: "module" });
// deno run --location https://example.com/index.html --allow-net main.ts