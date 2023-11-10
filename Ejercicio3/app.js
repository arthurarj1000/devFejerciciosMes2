// // EJERCICIO 1
// const pregunta=parseInt(prompt("Dame un número"));

// // Verificar si el número ingresado es válido
// if (!isNaN(pregunta)) {
//     // Mostrar los múltiplos de 5 hasta el número ingresado con un bucle while
//     alert(`Los múltiplos de 5 hasta ${pregunta} son: `);
//     let i= 1;
//     while (i<=pregunta){
//         if(i%5 === 0){
//             alert(i);
//         }
//         i++;
//     }
// }else{
//     alert("Por favor, ingresa un número válido.");
// }

// EJERCICIO 2
// Solicitar al usuario que ingrese dos números entre 1 y 50
let numero1 = parseInt(prompt("Ingresa el primer número (entre 1 y 50):"));
let numero2 = parseInt(prompt("Ingresa el segundo número (entre 1 y 50):"));

// Verificar la validez de los números ingresados
if (!isNaN(numero1) && !isNaN(numero2) && numero1 >= 1 && numero1 <= 50 && numero2 >= 1 && numero2 <= 50) {
    // Mostrar los números del 1 al 50 con el mensaje "¡Lotería!" para los números indicados por el usuario
    let i = 1;
    while (i <= 50) {
        if (i === numero1 || i === numero2) {
            console.log(`¡Lotería! -> ${i}`);
        } else {
            console.log(i);
        }
        i++;
    }
} else {
    alert("Por favor, ingresa dos números válidos entre 1 y 50.");
}