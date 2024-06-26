//Kata 1 Aprender los tipos de variables, operadores, etc..
//const persona1= prompt ("Dime un número guapo");
//const multiDeLosDos = persona1 * 2;
//console.log(multiDeLosDos);

//const request1= prompt("Dame un nùmero papi");
//const request2= prompt("Dame un número babé");
//const resta= request1 - request2;
//console.log(resta);

//const r= 5.3;
//const pi= 3.14159265359
//const square = r**2;
//const operation= pi*square;
//const radio= operation;  
//console.log(radio);

//const p= 5;
//const D= 8;
//const d=6;
//const operation= D*d/2;
//const area= operation;
//console.log(area);

//Kata 2 CONDICIONALES
//let age= 10;
//if(age >= 18) console.log("Eres mayor de edad");
//console.log("Fin!");

//let age=20;
//if(age>=18){
//    console.log(`Tienes `+age+ ` años`);
//    console.log(`Eres mayor de edad`);
//}
//console.log(`fin!`);

//let age=20;
//if(age >=18){
//    console.log('Eres mayo de edad');
//}else{
//    console.log('Eres menor de edad');
//}

//let light = 'rojo';
//if(light === 'rojo'){
//    console.log('No avances');
//}else if(light === 'amarillo'){
//    console.log('Baja la velocidad');
//}else if(light==='verde'){
//    console.log("Avanza!");
//}else{
//    console.log('Ese no es un color válido');
//}

//let number= 522;
//let operation= number%2;
//if(operation === 0){
//    console.log('El número es par');
//}else {
//    console.log('El número es impar');
//}

//const numberInput = prompt('Dame un número');
//const number = parseInt(numberInput);
//if (number % 3 === 0){
//    console.log(`El número ${number} es divisible entre 3 y el resultado es ${number/3}.`)
//}else{
//    console.log(`El número ${number} no es divisible entre 3`)
//}

//Demostración en clase: Tarjetas de Crédito - hecho por el SENSEI Diego Lechuga
//const salario = prompt("Dime el salario:");
//const strikes = prompt("¿Cuántos strikes tiene?");

//let numeroSalario = parseInt(salario);
//let numeroStrikes = parseInt(strikes);

//let tarjeta= null;
//numeroSalario = numeroSalario - (numeroStrikes*5000);
//console.log(numeroSalario);

//if(numeroSalario <= 5000 && numeroSalario > 0){
//    tarjeta="Silver";
//}else if (numeroSalario > 5000 && numeroSalario <= 10000){
//    tarjeta="Gold";
//}else if (numeroSalario > 10000){
//    tarjeta="Platinum";
//}

//if(tarjeta !== null){
//    console.log(`Tu tarjeta es ${tarjeta}`);
//}else{
//    console.log(`Este usuario no puede tener una tarjeta`);
//}

//Demostración en clase: Tarjetas de Crédito - hecho por el SENSEI Yaxche Manrique
//const salario = prompt('Dime el salario:');
//const strikes = prompt('¿Cuántos strikes tiene?');

//let numeroSalario = parseInt(salario);
//let numeroStrikes = parseInt(strikes);

//if(!numeroSalario){
//    alert('Ingres un valor!');
//}

//let tarjeta= null;
//numeroSalario = numeroSalario - (numeroStrikes*5000);
//console.log(numeroSalario);

//if(numeroSalario <= 5000 && numeroSalario > 0){
//    tarjeta='Silver';
//}else if (numeroSalario > 5000 && numeroSalario <= 10000){
//    tarjeta='Gold';
//}else if (numeroSalario > 10000){
//    tarjeta='Platinum';
//}

//if(!tarjeta){
//    console.log(tarjeta);
//    console.log(!tarjeta);
//    console.log(`Este usuario no puede tener una tarjeta`);
//}else{
//    console.log(`Tu tarjeta es ${tarjeta}`);
//    console.log(!tarjeta);
//}

//SWITCH - CASE demostración en case SENSEI Yaxche Manrique
//const dia = 'miercoles';

//switch (expression){
//    case 'lunes':
//        console.log('Sumergime en la miseria');
//        break;
//        case 'martes':
//            console.log('Contemplar el abismo');
//            break;
//            case 'miercoles':
//                case 'jueves':
//                console.log('Solucionar el hambruna mundial!');
//                break;
//                default:
//                    console.log('Danza y ejercicio');
//}

//Operador Ternario | Operador Condicional ejemplos SENSEI Diego Lechuga

//EJEMPLO en clase 1:
//let ine=false;
//let ineTernary=ine ? 'Si tengo Ine' : 'No tengo Ine :(';
//console.log(ineTernary);

//EJEMPLO en clase 2:
//let mexicoPopulation = 23;
//let message = mexicoPopulation>= 33? 'encima' : 'debajo';
//console.log(`México tiene una población por ${message} del promedio`);

//ARRAYS

//Ejemplo ARRAY sensei Diego Lechuga
//let verduras = ['jitomate', 'cebolla', 'zanahoria', 'limón'];
//console.log(verduras[0]);

//Métodos de los ARRAYS 

//Ejemplo length sensei Diego Lechuga
//let frutas = ['Pera', 'Manzana', 'Plátano', 'Naranja']; 
//frutas.length;

//Ejemplo indexOf sensei Diego Lechuga
//const friends = ['Rachel', 'Monica', 'Joey', 'Chandler', 'Phoebe', 'Ross'];
//indexOfJoey = friends.indexOf('Joey');
//console.log(indexOfJoey); da 2 porque en esa posición se encuentra Joey

//indexOfRichard = friends.indexOf('Richard');
//console.log(indexOfRichard); da -1 porque no se encuentra a ningún Richard existente

//Ejemplo toLowerCase sensei Diego Lechuga
//let verduras = ['jitomate', 'cebolla', 'zanahoria', 'LIMÓN'];
//verduras [3] = verduras[3].toLowerCase(); Aquí estamos poniendo en minúsculas el dato en la posición 3 y volviendo a almacenarla en posición 3 del ARRAY
//console.log(verduras); da como output 'limón'

//Ejemplo toUpperCase sensei Diego Lechuga
//let verduras = ['jitomate', 'cebolla', 'zanahoria', 'limón'];
//verduras [3] = verduras[3].toUpperCase(); Aquí estamos poniendo en mayúsculas el dato en la posición 3 y volviendo a almacenarla en posición 3 del ARRAY
//console.log(verduras); da como output 'LIMÓN'

//Ejemplo includes sensei Diego Lechuga
//const friends = ['Rachel', 'Monica', 'Joey', 'Chandler', 'Phoebe', 'Ross'];
//let includesJoey = friends.includes('Joey');
//console.log(includesJoey); da true porque sí existe Joey dentro del ARRAY

//let includesRichard = friends.includes('Richard');
//console.log(includesRichard); da false porque no existe ningún Richard dentro del ARRAY

//Ejemplo push sensei Diego Lechuga
//const friends = ['Rachel', 'Monica', 'Joey', 'Chandler', 'Phoebe', 'Ross'];
//friends.push('Gunther');
//console.log(friends); aqui se agregaría a Gunther al final del array

//Ejemplo unshift sensei Diego Lechuga
//const friends = ['Rachel', 'Monica', 'Joey', 'Chandler', 'Phoebe', 'Ross'];
//friends.unshift('Gunther');
//console.log(friends); aqui se agregaría a Gunther al inicio del array

//Ejemplo pop sensei Diego Lechuga
//const friends = ['Rachel', 'Monica', 'Joey', 'Chandler', 'Phoebe', 'Ross'];
//friends.pop();  aquí se elimina a Ross ya que se está al final del array
//console.log(friends);

//Ejemplo unshift sensei Diego Lechuga
//const friends = ['Rachel', 'Monica', 'Joey', 'Chandler', 'Phoebe', 'Ross'];
//friends.shift();  aquí se elimina a Rachel ya que se está al inicio del array
//console.log(friends);

//Ejemplo split sensei Diego Lechuga
//let verduras = 'Cebolla, Perejil, Tomate, Calabaza';
//let arregloVerduras = verduras.split(','); aquí se divide la cadena de texto “string” en un arreglo, esto cada vez que encuentre el carácter indicado que en este caso sería la coma “,”. El arreglo formado se tiene que guardar dentro de una variable.
//console.log(arregloVerduras);

//Ejemplo slice sensei Diego Lechuga
//let nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanessa'];
//let masculinos = nombres.slice(1,3); aquí se elige que parte se quiere guardar que en este caso Pedro y Miguel, y lo demás se elimina y el nuevo ARRAY se guarda en una variable.
//console.log(masculinos);

//Ejemplo splice para agregar y no quitar nada de elementos sensei Diego Lechuga
//let frutas = ['pera', 'manzana', 'plátano', 'uvas', 'mandarina'];
//let newFrutas = frutas.splice(2, 0, 'limón', 'sandía'); aquí estamos agregando los nuevos strings apartir de index 2 del ARRAY. El nuevo ARRAY se guarda en una variable.
//console.log(newFrutas);

//Ejemplo splice para agregar y quitar elementos sensei Diego Lechuga
//let frutas = ['pera', 'manzana', 'plátano', 'uvas', 'mandarina'];
//let newFrutas = frutas.splice(2, 1, 'limón', 'sandía'); aquí estamos diciendo que apartir del índice 2 del ARRAY vamos a quitar uno, y vamos a poner limón y sandía. El nuevo ARRAY se guarda en una variable.
//console.log(newFrutas);

//Ejemplo reverse sensei Diego Lechuga
//const letters = ['b', 'P', 'd', 'a'];
//let newLetters = letters.reverse(); aquí ponemos el arreglo al reves y el nuevo arreglo se guarda en una variable
//console.log(newLetters);

//Ejemplo concat sensei Diego Lechuga
//const letters1 = ['a', 'e', 'i'];
//const letters2 = ['o', 'u'];
//const letters3 = [1, 2];

//const lettersConcat = letters1.concat(letters2, letters3); (aquí se juntan los arreglos seleccionados a letters1 haciéndolos uno mismo. El nuevo ARRAY se guarda en una variable.)

//console.log(lettersConcat);

//Ejemplo sort sensei Diego Lechuga
//let letters=['b', 'p', 'd', 'a', 'ñ', 'y', 'z'];
//let sortedLetters = letters.sort(); aquí lo ordena como lo indica el reglamento UTF-16. Este array nuevo se guarda en una variable.
//console.log(sortedLetters);

//let letters=['b', 'P', 'd', 'A', 'ñ', 'z', 'w'];
//let sortedLetters = letters.sort(); aquí lo ordena como lo indica el reglamento UTF-16. Este array nuevo se guarda en una variable.
//console.log(sortedLetters);

//OBJETOS LITERALES

//Ejemplo Objetos Literales sensei Diego Lechuga
//const arturo = {
//    firstName: 'Arturo',
//    lastname: 'Pollo',
//    age: 2024-2004,
//    job: 'chiwos',
//    hasIne: true,
//    friends: ['Pepe', 'Popo', 'Pipi', 'Pupu']
//}

//Ejemplo Operador punto sensei Diego Lechuga
//const arturo = {
//    firstName: 'Arturo',
//    lastname: 'Pollo',
//    age: 2024-2004,
//    job: 'chiwos',
//    hasIne: true,
//    friends: ['Pepe', 'Popo', 'Pipi', 'Pupu']
//}
//console.log(arturo.firstName);


//Ejemplo Operador corchetes sensei Diego Lechuga
//const arturo = {
//    firstName: 'Arturo',
//    lastname: 'Pollo',
//    age: 2024-2004,
//    job: 'chiwos',
//    hasIne: true,
//    friends: ['Pepe', 'Popo', 'Pipi', 'Pupu']
//}
//let nombrePersona= "firstName";
//console.log(arturo[nombrePersona]);

//Ejemplo de como crear una nueva propiedad sensei Diego Lechuga
//const arturo = {
//    firstName: 'Arturo',
//    lastname: 'Pollo',
//    age: 2024-2004,
//    job: 'chiwos',
//    hasIne: true,
//   friends: ['Pepe', 'Popo', 'Pipi', 'Pupu']
//}
//arturo.gay=false;
//console.log(arturo);

//FUNCIONES

//Ejemplo de como crear una funcion sensei Yaxche Manrique
//  function nombreDeLaFunción(parametros) {
//	Acciones a realizar
//}

//Ejemplo de Function Declaration sensei Yaxche Manrique
//function square(number){
//	return number * number;
//}

//Ejemplo de Funciones anónimas sensei Yaxche Manrique
//const square = function (number){
//	return number * number;
//}

//Ejemplo de como invocar/ejecutar la función sensei Yaxche Manrique
//function square (number) {  cuando yo defino mi función son “parámetros”.
//	return number * number;
//}	
//square(8);  cuando le estoy pasando elementos a la función son “argumentos”.

//Demonstración en KATA: ¿Cuántos años te faltan para el retiro? sensei Yaxche Manrique
//const RETIREMENT_AGE = 65;

//function calcYearsRetirement(age){
//    return RETIREMENT_AGE - age;
//}

//const user={
//    name: 'Arturo',
//    age: 19,
//    hasAfore: false,
//}

//user.yearsForRetirement= calcYearsRetirement(user.age);

//console.log(user);

//Demonstración en KATA: ¿Cuántos años te faltan para el retiro? ahora utilizando FUNCEPTION sensei Yaxche Manrique
//const RETIREMENT_AGE = 65;
//const CURRENT_YEAR= 2024;

//function calcAge(birthYear){
//    return CURRENT_YEAR - birthYear;
//}

//function calcYearsRetirement(birthYear){
//    const age= calcAge(birthYear);
//    return RETIREMENT_AGE - age;
//}

//const user={
//    name: 'Arturo',
//    birthYear: 2004,
//    hasAfore: false,
//}

//user.yearsForRetirement= calcYearsRetirement(user.birthYear);

//console.log(user);

//SCOPE (Alcance)

//SCOPE GLOBAL sensei Yaxche Manrique

//const firstName = 'Arturo';
//const job= 'Gamer';
//const year= '2004';

//SCOPE DE FUNCIÓN sensei Yaxche Manrique
//function ageCalculator(birthYear){
//    const now= 2023;
//    const age= now - birthYear;
//    return age;
//}

//SCOPE DE BLOQUE (ES06) sensei Yaxche Manrique
//if (year>= 1981 && year <= 1986){
//    const millenial = true;
//    const food = 'Aguacate';
//}

//MÉTODOS

//Sintaxis de método sensei Diego Lechuga
//const objetoA={
//    key1: 'valor 1',
//    key2: 'valor 2',
//    key3: 'valor 3',

//   metodo: function (parametro){
//        //Body de la función
//        return;
//    }
//}

//Ejemplo de hacer MÉTODO sensei Diego Lechuga
//let arturo={
//    nombre:'Arturo',
//    apellido:'Arj',
//    edad:2024-2004,
//    metodo: function tomarAgua(){
//        console.log(`${arturo.nombre} y ${mariana.nombre} estan tomando agua`);
//    }
//}

//let mariana={
//    nombre:'Mariana',
//}
//console.log(arturo);

//Ejemplo de como llamar al MÉTODO sensei Diego Lechuga
//objetoA.metodo(parametro);

//CICLO FOR

