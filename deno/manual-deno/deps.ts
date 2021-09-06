/*export {
    assert,
    assertEquals,
    assertStrContains,
  } from "https://deno.land/std@0.105.0/testing/asserts.ts";

  export { xyz } from "https://unpkg.com/xyz-lib@v0.9.0/lib.ts";*/

//deno cache --lock=lock.json --lock-write src/deps.ts

/*
git add -u lock.json
git commit -m "feat: Add support for xyz using xyz-lib"
git push*/

export {
    add,
    multiply,
  } from "https://x.nest.land/ramda@0.27.0/source/index.js";