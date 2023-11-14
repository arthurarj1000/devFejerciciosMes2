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
// let numero1 = parseInt(prompt("Ingresa el primer número (entre 1 y 50):"));
// let numero2 = parseInt(prompt("Ingresa el segundo número (entre 1 y 50):"));

// // Verificar la validez de los números ingresados
// if (!isNaN(numero1) && !isNaN(numero2) && numero1 >= 1 && numero1 <= 50 && numero2 >= 1 && numero2 <= 50) {
//     // Mostrar los números del 1 al 50 con el mensaje "¡Lotería!" para los números indicados por el usuario
//     let i = 1;
//     while (i <= 50) {
//         if (i === numero1 || i === numero2) {
//             console.log(`¡Lotería! -> ${i}`);
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// } else {
//     alert("Por favor, ingresa dos números válidos entre 1 y 50.");
// }

// EJERCICIO 3
// Creamos el array
// const arrayUsuario= [];
// Pedir al usuario que meta números
// let numeroUsuario = parseInt(prompt("Dame un número. Si ya no quieres agregar más número, pon el número 0."));

// while(numeroUsuario !== 0 && !isNaN(numeroUsuario)){
//     Verificar si lo ingresado es un número y diferente de 0
//     Si es un número y diferente de 0, se agrega al arreglo
//     arrayUsuario.push(numeroUsuario);

//     Solicitar otro número al usuario
//     numeroUsuario = parseInt(prompt("Ingresa otro número (ingresa 0 para terminar):"));
// }

// Mostrar la lista de números capturados en la consola
// console.log("Lista de números capturados:", arrayUsuario);
// alert(`Lista de números capturados: ${arrayUsuario}`);

// EJERCICIO 4
// Inicializar una cadena vacía para almacenar las palabras capturadas
// let palabrasCapturadas = '';

// Solicitar al usuario letras o palabras hasta que no ingrese nada
// let palabraUsuario = prompt("Ingresa una letra o palabra (presiona Enter para terminar):");

// while (palabraUsuario !== null && palabraUsuario !== '') {
//     Concatenar la palabra capturada a la cadena existente
//     palabrasCapturadas += palabraUsuario + ' ';

//     Solicitar otra letra o palabra al usuario
//     palabraUsuario = prompt("Ingresa otra letra o palabra (presiona Enter para terminar):");
// }

// // Mostrar la concatenación de todas las palabras capturadas en pantalla
// console.log("Palabras capturadas:", palabrasCapturadas.trim());
// alert(`Lista de números capturados: ${palabrasCapturadas}`);

// EJERCICIO 5
// Solicitar día al usuario
// while (true) {
//     // Solicitar al usuario un día de la semana
//     const diaSemana = prompt("Ingresa un día de la semana (ej: lunes, jueves, domingo, etc):");

//     if (diaSemana) {
//         // Convertir el día ingresado a minúsculas para hacer la comparación sin importar mayúsculas o minúsculas
//         const diaLowerCase = diaSemana.toLowerCase();

//         // Mensajes personalizados para cada día
//         switch (diaLowerCase) {
//             case 'lunes':
//                 alert("Es el primer día laboral de la semana.");
//                 break;
//             case 'martes':
//                 alert("¡Ánimo, ya es martes!");
//                 break;
//             case 'miercoles':
//                 alert("Estamos a mitad de semana.");
//                 break;
//             case 'jueves':
//                 alert("Casi llegamos al viernes.");
//                 break;
//             case 'viernes':
//                 alert("¡Viernes, al fin!");
//                 break;
//             case 'sabado':
//                 alert("¡Es fin de semana!");
//                 break;
//             case 'domingo':
//                 alert("Ve a descansar");
//                 // Terminar la captura de información cuando es domingo
//                 // Se puede utilizar 'return;' para salir del bucle
//                 alert("Fin del programa.");
//                 break;
//             default:
//                 alert("Día no reconocido. Por favor, ingresa un día válido.");
//         }
//     } else {
//         // Si el usuario presiona "Cancelar" o ingresa una cadena vacía, terminar la captura de información
//         alert("Fin del programa.");
//         break;
//     }
// }