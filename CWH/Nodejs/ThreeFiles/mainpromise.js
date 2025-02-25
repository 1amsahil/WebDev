import path from "path";
import fs from "fs/promises";

// let write = await fs.writeFile("eternity.txt","Team Eternity");

let append = await fs.appendFile("eternity.txt","\nEternity(IGL)");

let read  = await fs.readFile("eternity.txt");
console.log(r.toString());

console.log(path);
