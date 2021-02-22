// Prompt Generar Tabla
const num = prompt("Dime un número cualquiera", "9");
document.write("<h2>Tabla exponentes</h2>");

document.write("<table>");
document.write("<tr>");
document.write("<th>Número</th>", "<th>Cuadrado</th>", "<th> Cubo</th>");
document.write("</tr>")

for(let i = 0; i <= num; i++){
    document.write("<tr>");
    document.write("<td>", i, "</td>");
    document.write("<td>", Math.pow(i, 2), "</td>");
    document.write("<td>", Math.pow(i, 3), "</td>");
    document.write("</tr>");
}
document.write("</table>");


// Prompt Suma Random
const n1 = Math.floor(Math.random() * 100);
const n2 = Math.floor(Math.random() * 100);
const t0 = performance.now();
const res = prompt("¿Cuánto es " + n1 + "+" + n2 + "?", 0);
const tf = performance.now();
document.write("<br>");
document.write("<h2>Suma: " + n1 + " + " + n2 + "</h2>");
if(res == n1+n2){
    document.write("<p> Tu respuesta: <strong>" + res + "</strong> es correcta</p>");
}
else{
    alert("Incorrecto");
    document.write("<p> Tu respuesta: <strong>" + res + "</strong> es incorrecta</p>");
    document.write("<p><strong>" + n1 + " + " + n2 + " = " + (n1+n2) + "</strong></p>")
}
const tiempo = Math.floor(tf-t0) / 1000;
document.write("<p> Respondiste en: <strong>" + tiempo + "</strong> segundos</p>");


// Función Contador
function contador(arreglo){
    let ceros = 0;
    let posit = 0;
    let negat = 0;
    document.write("<p> [");
    for(let i = 0; i < arreglo.length; i++){
        document.write(arreglo[i]);
        if(arreglo[i] > 0){
            posit++;
        } else if(arreglo[i] < 0){
            negat++;
        } else{
            ceros++;
        }
        if(i < arreglo.length - 1){
            document.write(", ");
        }
    }
    document.write("] = " + negat + " negativos, " + ceros + " ceros, " + posit + " positivos.</p>")
    return(negat,ceros,posit);
}


// Función Promedios
function promedio(matriz){
    let prom;
    const resp = [];
    document.write("<p> [");
    for(let i = 0; i<matriz.length; i++){
        document.write(" [");
        document.write(matriz[i]);
        prom = 0;
        for(let j = 0; j<matriz[i].length; j++){
            prom += matriz[i][j];
        }
        document.write("] ")
        if(prom > 0){
            resp.push(prom / matriz[i].length);
        }
    }
    document.write("] = [" + resp + "]");
    return resp;
}