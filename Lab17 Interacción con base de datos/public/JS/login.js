//DOM: Document Object Model
var user = document.getElementById('usuario');
var password1 = document.getElementById("1pass");
var password2 = document.getElementById("2pass");
var regla1 = document.getElementById("regla1");
var regla2 = document.getElementById("regla2");

function verifyPassword(){    
    if(password1.value !== password2.value
        || password1.value.length <= 4
        || user.value.length === 0){
        alert("Validación incompleta");
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

user.onclick = function(){
    warningColors(user, "#333");
}

user.onchange = function(){
    if(user.value.length === 0){
        warningColors(user, "red");
    }
    else{
        warningColors(user, "green")
    }
}