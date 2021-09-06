/*await Deno.writeTextFile("./hello.txt", "Hello World!");
console.log("File written to ./hello.txt");*/

function writeJson(path: string, data: object): string {
    try {
      Deno.writeTextFileSync(path, JSON.stringify(data));
  
      return "Written to " + path;
    } catch (e) {
      return e.message;
    }
  }
  
  console.log(writeJson("./data.json", { hello: "World" }));
