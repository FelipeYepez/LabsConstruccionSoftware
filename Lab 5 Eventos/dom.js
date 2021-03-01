//DOM: Document Object Model
var password1 = document.getElementById("1pass");
var password2 = document.getElementById("2pass");
var regla1 = document.getElementById("regla1");
var regla2 = document.getElementById("regla2");

function verifyPassword(){    
    if(password1.value === password2.value
        && password1.value.length > 4){
        alert("Contraseña validada correctamente");
        window.location.href = "./compra.html";
    }
    else{
        alert("Contraseña no validada");
    }
}

function warningColors(elem, color){
    elem.style.color = color;
    elem.style.borderBottomColor = color;
}

password1.onclick = function(){
    regla1.style.color = "#333";
    warningColors(password1, "#333");
}

password1.onblur = function(){
    if(password1.value.length === 0){
        regla1.style.color = "#333";
        warningColors(password1, "#333");
    }
    else if(password1.value.length < 5){
        regla1.style.color = "red";
        warningColors(password1, "red");
    }
    else{
        regla1.style.color = "green";
        warningColors(password1, "green");
    }
}

password1.onchange = function(){
    regla2.style.color = "#333";
    if(password1.value === password2.value 
        && password1.value != ""){
        regla2.style.color = "green";
        warningColors(password2, "green");
    }
    else if(password2.value.length != 0
        && password1.value != password2.value){
        regla2.style.color = "red";
        warningColors(password2, "red");
    }
}

password2.onclick = function(){
    regla2.style.color = "#333";
    warningColors(password2, "#333");
}

password2.onblur = function(){
    if(password2.value.length === 0){
        regla2.style.color = "#333";
        warningColors(password2, "#333");
    }
    else if(password1.value === password2.value){
        regla2.style.color = "green";
        warningColors(password2, "green");
    }
    else{
        regla2.style.color = "red";
        warningColors(password2, "red")
    }
}

const subt = document.getElementById("subt");
const iva = document.getElementById("iva");
const total = document.getElementById("total");
let cantsubt = 0;
let cantiva = 0;
let canttotal = 0;

function addQuantity(quantId,cant){
    const casilla = document.getElementById(("cant" + quantId));
    let value = parseInt(casilla.innerHTML);
    const casillastock = document.getElementById(("stock" + quantId));
    let stock = parseInt(casillastock.innerHTML);
    if(cant === 1 && value < stock || cant === -1 && value > 0){
        const casillaprecio = document.getElementById(("price" + quantId));
        let precioproducto = parseInt(casillaprecio.innerHTML);
        if(cant === -1){
            precioproducto *= -1;
        }
        value += cant;
        cantsubt += precioproducto;
        subt.innerHTML = cantsubt;
        cantiva = cantsubt * 0.16;
        iva.innerHTML = cantiva.toFixed(2);
        canttotal = cantsubt + cantiva;
        total.innerHTML = canttotal.toFixed(2);
        casilla.innerHTML = value;
    }
}