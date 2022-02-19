let numA = 0;
let numB = 0;
let resultado = "";
let operacion = prompt("Ingrese la operación: \n 1) Suma \n 2) Resta \n 3) Multiplicación \n 4) División \n 5) Tabla \n 6) Salir");
while ((operacion != 6) && (operacion != null)) {
    switch (Number.parseInt(operacion)) {

        case 1:
            numA = Number.parseInt(prompt("Ingrese el primer numero"));
            numB = Number.parseInt(prompt("Ingrese el segundo numero"));
            resultado = numA + numB;
            if (isNaN(resultado)) {
                alert("Ingrese solo números");
            } else {
                alert(`El resultado es: ${resultado}`);
            }
            break;

        case 2:
            numA = Number.parseInt(prompt("Ingrese el primer numero"));
            numB = Number.parseInt(prompt("Ingrese el segundo numero"));
            resultado = numA - numB;
            if (isNaN(resultado)) {
                alert("Ingrese solo números");
            } else {
                alert(`El resultado es: ${resultado}`);
            }
            break;

        case 3:
            numA = Number.parseInt(prompt("Ingrese el primer numero"));
            numB = Number.parseInt(prompt("Ingrese el segundo numero"));
            resultado = numA * numB;
            if (isNaN(resultado)) {
                alert("Ingrese solo números");
            } else {
                alert(`El resultado es: ${resultado}`);
            }
            break;

        case 4:
            numA = Number.parseInt(prompt("Ingrese el primer numero"));
            numB = Number.parseInt(prompt("Ingrese el segundo numero"));
            if ((isNaN(numA)) || (isNaN(numB))) {
                alert("Ingrese solo números");
            } else if (numB == 0) {
                alert("No se puede dividir por 0");
            } else {
                resultado = numA / numB;
                alert(`El resultado es: ${resultado}`);
            }
            break;

        case 5:
            alert("Se multiplicara el valor hasta por 10");
            numA = Number.parseInt(prompt("Ingrese un numero"));
            if (isNaN(numA)) {
                alert("Ingrese solo números");
            } else {
                for (let i = 0; i <= 10; i++) {
                    resul = numA * i;
                    if ((i == 0) || (i % 2 == 0) && (resul < 10)) {
                        resultado += `\n${numA} x ${i} = ${resul}  `;
                    } else if ((i == 0) || (i % 2 == 0)) {
                        resultado += `\n${numA} x ${i} = ${resul}`;
                    } else {
                        resultado += `          ${numA} x ${i} = ${resul}`;
                    }
                }
                alert(`La table del ${numA} es: ${resultado}`);
                resultado = "";
            }
            break;

        default:
            alert(` La operación (${operacion}) no existe`);
            break;
    }
    operacion = prompt("Ingrese la operación: \n 1) Suma \n 2) Resta \n 3) Multiplicación \n 4) División \n 5) Tabla \n 6) Salir");
}