function Calcular() { 
    var num1 = document.getElementById("num_1").value;
        num1 = parseInt(num1)
    var num2 = document.getElementById("num_2").value;
        num2 = parseInt(num2)
    var calcular = document.getElementById("operacion").value;

    switch(calcular){
        case "1":
            var suma = (num1 + num2);
            alert("El resultado de la suma es de: " + num1 + " + " + num2 +" = " + suma);
            break

        case "2":
            var resta = (num1 - num2);
            alert("El resultado de la resta es de: " + num1 + " - " + num2 +" = " + resta);
            break

        case "3":
            var multi = (num1 * num2);
            alert("El resultado de la multiplicación es de: " + num1 + " x " + num2 +" = " + multi);
            break

        case "4":
            var div = (num1 / num2);
            alert("El resultado de la división es de: " + num1 + " ÷ " + num2 +" = " + div);
            break
    
    }

}