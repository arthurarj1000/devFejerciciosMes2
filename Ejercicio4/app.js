// EJERCICIO 1
// Declaramos una variable (está también puede ser declarada dentro del ciclo for y así ya no sería necesario declararla afuera)
// let i;

// // Creamos el ciclo for (inicialización, condición, adición) (la variable puede ser declarada dentro del for)
// for(i=1; i<=50; i++){
//     // Creamos una condición en donde si el residuo es arriba o igual a 1, esté es un número par
//     if(i%2 >=1){ 
//         console.log(`Es un número impar: ${i}`);
//     }else{
//         // Para lo demás resultados pues son número impar
//         console.log(`No es un número impar, estes es un número par: ${i}`);
//     }
// }
// // OTRA POSIBLE SOLUCIÓN
// for (let i = 1; i <= 50; i += 2) {
//     console.log(`Son números impares: ${i}`);
// }

// EJERCICIO 2
// const qUser= parseInt(prompt("Dame un número"));
// var pokemons = 
// [ 'bulbasaur',
//   'ivysaur',
//   'venusaur',
//   'charmander',
//   'charmeleon',
//   'charizard',
//   'squirtle',
//   'wartortle',
//   'blastoise',
//   'caterpie',
//   'metapod',
//   'butterfree',
//   'weedle',
//   'kakuna',
//   'beedrill',
//   'pidgey',
//   'pidgeotto',
//   'pidgeot',
//   'rattata',
//   'raticate',
//   'spearow',
//   'fearow',
//   'ekans',
//   'arbok',
//   'pikachu',
//   'raichu',
//   'sandshrew',
//   'sandslash',
//   'nidoran-f',
//   'nidorina',
//   'nidoqueen',
//   'nidoran-m',
//   'nidorino',
//   'nidoking',
//   'clefairy',
//   'clefable',
//   'vulpix',
//   'ninetales',
//   'jigglypuff',
//   'wigglytuff',
//   'zubat',
//   'golbat',
//   'oddish',
//   'gloom',
//   'vileplume',
//   'paras',
//   'parasect',
//   'venonat',
//   'venomoth',
//   'diglett',
//   'dugtrio',
//   'meowth',
//   'persian',
//   'psyduck',
//   'golduck',
//   'mankey',
//   'primeape',
//   'growlithe',
//   'arcanine',
//   'poliwag',
//   'poliwhirl',
//   'poliwrath',
//   'abra',
//   'kadabra',
//   'alakazam',
//   'machop',
//   'machoke',
//   'machamp',
//   'bellsprout',
//   'weepinbell',
//   'victreebel',
//   'tentacool',
//   'tentacruel',
//   'geodude',
//   'graveler',
//   'golem',
//   'ponyta',
//   'rapidash',
//   'slowpoke',
//   'slowbro',
//   'magnemite',
//   'magneton',
//   'farfetchd',
//   'doduo',
//   'dodrio',
//   'seel',
//   'dewgong',
//   'grimer',
//   'muk',
//   'shellder',
//   'cloyster',
//   'gastly',
//   'haunter',
//   'gengar',
//   'onix',
//   'drowzee',
//   'hypno',
//   'krabby',
//   'kingler',
//   'voltorb' ]
// for(i=1; i<=qUser; i++){
//     if ((i + 1) % 5 === 0) {
//         console.log(`Pokemon ${i + 1}: ${pokemons[i]}`);
//     }
// }

// EJERCICIO 3
// const array=[4,"dos",8,"tres",5,9,1,"cero"];

// for(i=0; i<=array.length; i++){
//     if (typeof array[i] === "number"){
//         console.log(array[i]);
//     }
// }