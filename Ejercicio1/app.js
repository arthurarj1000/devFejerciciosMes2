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
// const day= parseInt(prompt("Dame en número un día de la semana"));

// if (day === 1){
//     alert("Es Lunes!");
// }else if (day === 2){
//     alert("Es Martes!");
// }else if (day === 3){
//     alert("Es Miércoles!");
// }else if (day === 4){
//     alert("Es Jueves!");
// }else if (day === 5){
//     alert("Es Vienres!");
// }else if (day === 6){
//     alert("Es Sábado!");
// }else if (day === 7){
//     alert("Es Domingo!");
// }else{
//     alert("Ese número del día de la semana, no existe.");
// }

// EJERCICIO 8
// const cali= parseInt(prompt("Dame una calificación entre 1 y 10"));

// if(cali > 10){
//     alert("Error");
// }else if(cali < 6){
//     alert("Reprobado");
// }else if (cali >= 6 && cali <= 8){
//     alert("Regular");
// }else if (cali === 9){
//     alert("Bien");
// }else if (cali=== 10){
//     alert("Excelente");
// }else{
//     alert("Error");
// }

// EJERCICIO 9
// const bienvenida1= alert("Hola, bienvenido a McArthur. Contamos con los helados más ricos del mundo!");
// const bienvenida2= alert("Este es nuestro menú: El helado sin topping cuesta 50 MXN. El topping de oreo cuesta 10 MXN. El topping de KitKat cuesta 15 MXN. El topping de brownie cuesta 20 MXN.");
// const bienvenida3= prompt("¿Qué va a desear del menú?")
// const costoBaseHelado = 50;
// let costoTopping = 0;

// if(bienvenida3 === "topping de oreo" || bienvenida3 === "Topping de oreo" || bienvenida3 === "Topping de Oreo" || bienvenida3 === "oreo" || bienvenida3 === "Oreo" || bienvenida3 === "OREO" || bienvenida3 === "TOPPING DE OREO"){
//     costoTopping = 10;
// }else if(bienvenida3 === "topping de kitkat" || bienvenida3 === "Topping de kitkat" || bienvenida3 === "Topping de KitKat" || bienvenida3 === "Topping de Kitkat" || bienvenida3 === "kitkat" || bienvenida3 === "Kitkat" || bienvenida3 === "KitKat" || bienvenida3 === "KITKAT" || bienvenida3 === "TOPPING DE KITKAT"){
//     costoTopping = 15;
// }else if(bienvenida3 === "topping de brownie" || bienvenida3 === "Topping de brownie" || bienvenida3 === "Topping de Brownie" || bienvenida3 === "brownie" || bienvenida3 === "Brownie" || bienvenida3 === "BROWNIE" || bienvenida3 === "TOPPING DE BROWNIE"){
//     costoTopping = 20;
// }else {
//     alert("No tenemos este topping, lo sentimos.");
// }

// const costoTotal = costoBaseHelado + costoTopping;

// if (costoTopping > 0) {
//     alert(`El costo de tu helado con topping de ${bienvenida3} es de ${costoTotal} MXN.`);
// } else {
//     alert(`El costo de tu helado sin topping es de ${costoBaseHelado} MXN.`);
// }

// EJERCICIO 10
// Solicitar al usuario que seleccione el nivel del programa educativo
// const nivel = prompt("Selecciona el nivel del programa educativo: Course, Carrera o Master").toLowerCase();

// // Solicitar al usuario si cuenta con una beca
// const beca = prompt("¿Cuentas con alguna beca? (Facebook, Google, Jesua o ninguna)").toLowerCase();

// // Definir los costos mensuales de cada nivel
// let costoMensual = 0;
// let duracion = 0;

// switch (nivel) {
//     case "course":
//         costoMensual = 4999;
//         duracion = 2;
//         break;
//     case "carrera":
//         costoMensual = 3999;
//         duracion = 6;
//         break;
//     case "master":
//         costoMensual = 2999;
//         duracion = 12;
//         break;
//     default:
//         alert("El nivel seleccionado no es válido.");
// }

// // Aplicar descuento según la beca seleccionada
// switch (beca) {
//     case "facebook":
//         costoMensual *= 0.8; // 20% de descuento
//         break;
//     case "google":
//         costoMensual *= 0.85; // 15% de descuento
//         break;
//     case "jesua":
//         costoMensual *= 0.5; // 50% de descuento
//         break;
//     case "ninguna":
//         break;
//     default:
//         alert("La beca seleccionada no es válida.");
// }

// if (costoMensual > 0) {
//     const costoTotal = costoMensual * duracion;
//     alert(`El costo mensual del programa es de $${costoMensual} MXN. Con una duración de ${duracion} meses, el costo total sería de $${costoTotal} MXN.`);
// } else {
//     alert("No es posible calcular el costo del programa debido a la selección inválida.");
// }

// EJERCICIO 11
// Solicitar al usuario que ingrese el tipo de vehículo, la distancia y los litros consumidos
// const tipoVehiculo = prompt("Ingresa el tipo de vehículo (coche, moto o autobús):").toLowerCase();
// const distanciaRecorrida = parseFloat(prompt("Ingresa la distancia recorrida en kilómetros:"));
// const litrosConsumidos = parseFloat(prompt("Ingresa la cantidad de litros consumidos:"));

// // Definir los precios por kilómetro según el tipo de vehículo
// let precioKilometro = 0;

// switch (tipoVehiculo) {
//     case "coche":
//         precioKilometro = 0.20;
//         break;
//     case "moto":
//         precioKilometro = 0.10;
//         break;
//     case "autobús":
//         precioKilometro = 0.5;
//         break;
//     default:
//         alert("El tipo de vehículo ingresado no es válido.");
// }

// // Calcular el costo del viaje sin considerar el extra por litros
// const costoSinExtra = precioKilometro * distanciaRecorrida;

// // Calcular el extra por litros consumidos
// let extraPorLitros = 0;

// if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
//     extraPorLitros = 5;
// } else if (litrosConsumidos > 100) {
//     extraPorLitros = 10;
// }

// // Calcular el costo total
// const costoTotal = costoSinExtra + extraPorLitros;

// if (precioKilometro > 0) {
//     alert(`El costo total del viaje en ${tipoVehiculo} es de $${costoTotal}.`);
// } else {
//     alert("No es posible calcular el costo debido al tipo de vehículo ingresado.");
// }