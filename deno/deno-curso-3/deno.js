//const food = 'love'
const food = Deno.args[0]; //pasa un argumento deno run deno.js 'love

if (food === "love") {
  console.log("🦕.. deno is born!");
} else {
  console.log("🥚.. this egg need some love");
}

/*setTimeout(()=>{
    console.log('check')
    console.table(Deno.metrics());
}, 1000)*/

//console.log(window);
