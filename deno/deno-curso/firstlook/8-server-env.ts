import { serve } from "https://deno.land/std@0.62.0/http/server.ts";
const env = Deno.env.toObject();


const HOST:string = env.HOST || "127.0.0.1";
const PORT: number = Number(env.PORT )|| 5000;

console.log(HOST, PORT);

const s = serve({ port: PORT, hostname: HOST});

console.log("Deno esta ejecutando en el puerto:${PORT}, host:${HOST}");

for await ( const req of s){
    req.respond({ body: "Hola Deno Land\n"});
}