// EJERCICIO 1
// const preguntaBella = prompt("¿Eres bellisimo/a?");
// if(preguntaBella === "Sí" || preguntaBella === "Si" || preguntaBella === "sí" || preguntaBella === "si")
// {
//     alert("Ciertamente.");
// }else{
//     alert("No te creo.");
// }

// EJERCICIO 2
// const giveNumber = prompt("Dame un número");

// if (giveNumber % 2 === 0)
// {
//     alert(giveNumber + " es divisible entre 2.");
// } else {
//   alert(giveNumber + " no es divisible entre 2.");
// }

// EJERCICIO 3
// const giveNumber = prompt("Dame un número");

// if (giveNumber % 2 === 0)
// {
//     alert(`${giveNumber} es número par.`);
// } else {
//   alert(`${giveNumber} no es número par.`);
// }

// EJERCICIO 4
// const giveNumber = prompt("¿Cuál es tu número de cliente?");

// if (giveNumber === "1000")
// {
//     alert("Ganaste un premio!");
// }else{
//     alert(`Cliente número ${giveNumber}. Lo sentimos, sigue participando.`);
// }

// EJERCICIO 5
// const giveNumber = prompt("Dame un número");
// const dameNumero = prompt("Dame otro número");
// const numero1 = parseInt(giveNumber);
// const numero2 = parseInt(dameNumero);

// if (numero1 < numero2) {
//     alert(`${giveNumber} es menor a ${dameNumero}. Por lo tanto ${dameNumero} es mayor a ${giveNumber}.`);
// } else if (numero1 > numero2) {
//     alert(`${dameNumero} es menor a ${giveNumber}. Por lo tanto ${giveNumber} es mayor a ${dameNumero}.`);
// }

// EJERCICIO 6
// const numero1 = parseFloat(prompt("Ingresa el primer número:"));
// const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
// const numero3 = parseFloat(prompt("Ingresa el tercer número:"));

// if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
//     alert("Por favor, ingresa números válidos.");
// } else {
//     if (numero1 > numero2 && numero1 > numero3) {
//         alert(`El número mayor es ${numero1}.`);
//     } else if (numero2 > numero1 && numero2 > numero3) {
//         alert(`El número mayor es ${numero2}.`);
//     } else if (numero3 > numero1 && numero3 > numero2) {
//         alert(`El número mayor es ${numero3}.`);
//     } else {
//         alert("Hay dos o más números iguales entre sí.");
//     }
// }

// EJERCICIO 7
const day= parseInt(prompt("Dame en número un día de la semana"));

if (day === 1){
    alert("Es Lunes!");
}else if (day === 2){
    alert("Es Martes!");
}else if (day === 3){
    alert("Es Miércoles!");
}else if (day === 4){
    alert("Es Jueves!");
}else if (day === 5){
    alert("Es Vienres!");
}else if (day === 6){
    alert("Es Sábado!");
}else if (day === 7){
    alert("Es Domingo!");
}else{
    alert("Ese número del día de la semana, no existe.");
}