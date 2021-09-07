import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("hello world #1", () => {
  const x = 1 + 2; // paraa que de ok usar el 2 en vez del 4
  assertEquals(x, 3);
});
