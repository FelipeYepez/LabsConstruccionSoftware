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

// Funcion invertir número
function invertir(num){
    let inv = 0;
    let aux;
    document.write("<p>" + num + " => ");
    while(num >= 1){
        aux = num % 10;
        inv *= 10;
        inv += aux;
        num = Math.floor(num/10);
    }
    document.write(inv + "</p>");
    return inv;
}

class twoSum{
    constructor(array, sum, dif){
        this.numbers = array;
        this.suma = sum;
        this.diferencia = dif;
    }
    
    twosum() {
        const array = this.numbers;
        const sum = this.suma;
        document.write("<p> Para sumar <strong>" + sum + "</strong> se debe utilizar los índices ");
        const n = array.length;
        for(let i = 0; i<n; i++){
            for(let j=i+1; j<n; j++){
                if(array[i] + array[j] === sum){
                    document.write("<strong>" + i + " y " + j + "</strong> del arreglo [" + array + "]</p>");
                    return (i,j);
                }
            }
        }
        return -1;
    }
    twodif() {
        const array = this.numbers;
        const dif = this.diferencia;
        document.write("<p> Para obtener <strong>" + dif + "</strong> se debe hacer la resta utilizando los índices ");
        const n = array.length;
        for(let i = 0; i<n; i++){
            for(let j=0; j<n; j++){
                if(i!= j && array[i] - array[j] === dif){
                    document.write("<strong>" + i + " y " + j + "</strong> del arreglo [" + array + "]</p>");
                    return (i,j);
                }
            }
        }
        return -1;
    }
}