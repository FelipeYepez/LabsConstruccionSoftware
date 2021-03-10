// Ejecutar en node como: node app.js
console.log("Servidor corriendo");

let nombreCliente = "";
const filesystem = require('fs');
const http = require('http');
const server = http.createServer((request, response) => {
    
    if (request.url === "/login" && request.method === "GET" ) {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor node</title></head>');
        response.write("<body><h1>Ingresa tu nombre</h1>");
        response.write('<form action= "login" method= "POST"><input type="text" name= "nombre"><input type="submit" value= "Guardar Nombre"></form>');
        response.write("</body>");
        response.write("</html>");
        response.end();
    }
    else if (request.url === "/login" && request.method === "POST" ) {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        request.on('end', () => {
           const datos_completos = Buffer.concat(datos).toString();
           console.log(datos_completos);
           const nombre = datos_completos.split('=')[1];
           console.log(nombre);
           nombreCliente = nombre;
           filesystem.writeFileSync('nombre.txt', nombre);
        });
        response.writeHead(301, {Location: '/productos'});
        response.end();
    }
    else if(request.url === "/productos"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor node</title></head>');
        response.write("<body><h1>Bienvenido <strong>");
        response.write(nombreCliente);
        response.write("</strong></h1>");
        response.write("<hr>");
        response.write("<h2>Adidas Yeezy Boost</h2>");
        response.write("<br>");
        response.write('<img src="https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Adidas-Yeezy-Boost-350-V2-Zebra-1_600x.png?v=1541153763" alt="Adidas Yeezy Boost 350">');
        response.write("<br>");
        response.write('<span>$150</span>');
        response.write("<hr>");
        response.write("<h2>Cangurera Adidas</h2>");
        response.write("<br>");
        response.write('<img src="https://cdn.shopify.com/s/files/1/0150/2598/products/Screen_Shot_2018-11-15_at_1.08.12_AM_560x.png?v=1572314586" alt="Skagen Watch">');
        response.write("<br>");
        response.write('<span>$25</span>');
        response.write("<hr>");
        response.write("</body>");
        response.write("</html>");
        response.end();
    }
    else if(request.url === "/carrito"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor node</title></head>');
        response.write("<body><h1>Carrito Compras</h1>");
        response.write("<hr>");
        response.write("<h2>Subtotal: $0</h2>");
        response.write("<br>");
        response.write("<h3>Iva: $0</h3>");
        response.write("<br>");
        response.write("<h1>Total: $0</h1>");
        response.write("<hr>");
        response.write("</body>");
        response.write("</html>");
        response.end();
    }
    else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Page not found</title></head>');
        response.write("<body><h1>Page not found</h1></body>");
        response.write("</html>");
        return response.end();
    }
});
server.listen(3000);
