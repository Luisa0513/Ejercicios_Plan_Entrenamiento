import "https://deno.land/x/dotenv/load.ts";

console.log(Deno.env.get("GREETING"));

//deno --allow-env --allow-read env.ts