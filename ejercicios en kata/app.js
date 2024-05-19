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
const dia = 'miercoles';

switch (expression){
    case 'lunes':
        console.log('Sumergime en la miseria');
        break;
        case 'martes':
            console.log('Contemplar el abismo');
            break;
            case 'miercoles':
                case 'jueves':
                console.log('Solucionar el hambruna mundial!');
                break;
                default:
                    console.log('Danza y ejercicio');
}

