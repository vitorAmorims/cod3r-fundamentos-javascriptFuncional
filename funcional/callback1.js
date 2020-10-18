// exec(somarNoTerminal, 56, 38)
// exec(subtrairNoTerminal, 182, 27)

const somarNoTerminal = (a,b) => console.log(a + b);
const subtrairNoTerminal = (a,b) => console.log(a - b);
const exec = (fn) => fn;
exec(somarNoTerminal(56,38));
exec(subtrairNoTerminal(182,27))


function fn() {
    console.log("Deus eu te amo!");
}
setInterval(fn, 1000);