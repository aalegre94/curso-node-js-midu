const fs = require("node:fs");

console.log("Leyendo el 1er archivo");
// const primerText = fs.readFileSync("./archivo.txt", "utf-8");
fs.readFile("./archivo.txt", "utf-8", (err, primerText) => {
  console.log(primerText);
});

console.log("----------------------------->  Haciendo cositas XDDD");

console.log("Leyendo el 2do archivo");
// const segundoText = fs.readFileSync("./archivo2.txt", "utf-8");
fs.readFile("./archivo2.txt", "utf-8", (err, segundoText) => {
  console.log(segundoText);
});
