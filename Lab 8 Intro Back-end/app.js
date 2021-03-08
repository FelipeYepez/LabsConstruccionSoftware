// Ejecutar en node como: node app.js
console.log("Hola desde Node");

// Función Promedio arreglo
function promedio(arreglo){
    let prom = 0, i;
    for(i = 0; i<arreglo.length; i++){
        prom += arreglo[i];
    }
    return (prom / arreglo.length);
}
const arr = [1,2,3,4,5,6,7,8,9];
console.log("Promedio", arr, " = ", promedio(arr));

// Función escribir en archivo de Texto
function escribeArchivo(string){
    const filesystem = require('fs');
    filesystem.writeFileSync('output.txt', string);
}
escribeArchivo("Esto se escribe en un archivo utilizando filesystem con Node");

// Funcion revisar palabra palindroma
function palindrome(palabra){
    palabra = palabra.toLowerCase();
    for(let i = 0; i < parseInt(palabra.length/2); i++){
        if(palabra[i] !== palabra[palabra.length -1 -i]){
            return false;
        }
    }
    return true;
}
console.log("Ana = ", palindrome('Ana'));
console.log("Reconocer = ", palindrome('Reconocer'));
console.log("Palabra = ", palindrome('Palabra'));

const http = require('http');
const server = http.createServer( (request, response) => {
        console.log("Mensaje desde el servidor");
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Node</title></head><body><h1>Escrito desde el Servidor</h1></body></html>');
        response.end();
    }
);
server.listen(3000);