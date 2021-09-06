//new Worker(new URL("./workersp2.ts", import.meta.url).href, { type: "module" });
//--allow-read

new Worker("https://example.com/workersp2.ts", { type: "module" });
//--allow-net