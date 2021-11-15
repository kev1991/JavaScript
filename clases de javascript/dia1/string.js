function Magnitud() {
    var mag = document.getElementById("word").value;
    var lon = mag.length 
    alert("la macnitud de tu palbra es de (" + lon + " )")
}

function Mayusculas() {
    var may = document.getElementById("word").value;
    may = may.toUpperCase()
    alert("este es tu texto en mayusculas ( " + may + " )")
}

function Minisculas() {
    var min = document.getElementById("word").value;
    min = min.toLowerCase()
    alert("este es tu texto en minusculas ( " + min + " )")
}

function Pri_caracter() {
    var pri = document.getElementById("word").value;
    pri = pri.slice(0, 1)
    alert("este es tu texto en minusculas ( " + pri + " )")
}