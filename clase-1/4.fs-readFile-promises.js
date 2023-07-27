const fs = require("node:fs/promises");

console.log("Leyendo el 1er archivo");
// const primerText = fs.readFileSync("./archivo.txt", "utf-8");  //metodo sincrono

// fs.readFile("./archivo.txt", "utf-8", (err, texto) => {
//   //metodo asincrono con callbacks
//   console.log("Primer Texto: --> ", texto);
// });

//forma con promesas
fs.readFile("./archivo.txt", "utf-8").then((texto) => {
  console.log("Primer Texto: --> ", texto);
});

console.log("----------------------------->  Haciendo cositas XDDD");

console.log("Leyendo el 2do archivo");
// const segundoText = fs.readFileSync("./archivo2.txt", "utf-8");
// fs.readFile("./archivo2.txt", "utf-8", (err, texto) => {
//   console.log("Segundo Texto: --> ", texto);
// });
fs.readFile("./archivo2.txt", "utf-8").then((texto) => {
  console.log("Segundo Texto: --> ", texto);
});
