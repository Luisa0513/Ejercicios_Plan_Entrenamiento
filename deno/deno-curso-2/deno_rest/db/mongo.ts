import {MongoClient } from "https://deno.land/x/mongo@v0.24.0/mod.ts";

const client = new MongoClient();

//Connecting to a Local Database
await client.connect("mongodb+srv://luisadeno:Lumacabe13@cluster0.jik7k.mongodb.net/DENO_REST?retryWrites=true&w=majority");

const db = client.database("screens");
console.log("db connected");

export default db;