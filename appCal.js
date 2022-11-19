var txtvalor1      = document.getElementById("valor1");
var txtvalor2      = document.getElementById("valor2");
var operador   = document.getElementById("operador");
var btnCalcular = document.getElementById("calcular");
var pResultado   = document.getElementById("resultado");
// Tome los objetos del DOM

btnCalcular.addEventListener("click", calcular);
// Escuchamos al boton para cuando le hagan un click ejecute la funcion calcular

function calcular() {
    var resultado; // creo una variable que me va a dar el resultado de la operacion
    if(operador.value === "+" ||operador.value === "-"||operador.value === "/"||operador.value === "*"){
        // Uso un if para validar el dato de la operacion
        switch (operador.value) {
            case "+":
                resultado = parseFloat(valor1.value) + parseFloat(valor2.value) 
                break;
                case "-":
                    resultado = valor1.value - valor2.value
                    break;
                    case "*":
                        resultado = valor1.value * valor2.value
                        break;
                        case "/":
                            resultado = valor1.value / valor2.value
                            break;        
                            default: "No ingresaste los datos correctamente"
                            break;
                        } 
                        console.log(resultado);
                        pResultado.innerHTML = resultado;
                    } else pResultado.innerHTML = "No ingresaste un operador correcto";
                    }
                    
                    
                    
