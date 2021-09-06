import { copy } from "https://deno.land/std@0.105.0/io/util.ts";
for (const filename of Deno.args) {
  const file = await Deno.open(filename);
  await copy(file, Deno.stdout);
  file.close();
}
// deno run --allow-read https://deno.land/std@0.105.0/examples/cat.ts /etc/passwd
// error: no encuentra la ruta especificada