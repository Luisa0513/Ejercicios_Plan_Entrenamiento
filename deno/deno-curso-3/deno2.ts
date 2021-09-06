/*const a = 'Andrei'
console.log(a)*/

//import 'https://deno.land/std@0.106.0/examples/chat/server.ts';

export function denode(input){
    if(input.toLowerCase() === 'node'){
        return input.split("").sort().join("");
    }
    return input;
}