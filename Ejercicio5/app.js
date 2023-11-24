// let time;
// let light = 'rojo';
// let repetir = 0;

// console.log(light);

// function semaforo() {
//   while (repetir < 5) {
//     for (time = 0; time < 5; time++) {
//       if (time === 4) {
//         light = 'verde';
//         console.log(light);
//       }
//     }
//     for (time = 0; time < 5; time++) {
//       if (time === 4) {
//         light = 'amarillo';
//         console.log(light);
//       }
//     }
//     for (time = 0; time < 5; time++) {
//       if (time === 4) {
//         light = 'rojo';
//         console.log(light);
//       }
//     }
//     repetir++;
//   }
// }

// semaforo();

// for (repetir = 0; repetir <= 6; repetir++);


// OTRA FORMA DE HACERLO más profesional
// function cambiarColor(color) {
//     console.log(`El semáforo está ahora en color ${color}`);
//   }
  
//   function semaforo() {
//     cambiarColor("Verde");
  
//     for (let i = 0; i < 3; i++) {
//       // Cambiar de Verde a Amarillo
//       cambiarColor("Amarillo");
  
//       // Esperar un momento (simulando el tiempo de cambio)
//       // Puedes ajustar el tiempo según tus necesidades
//       setTimeout(() => {
//         // Cambiar de Amarillo a Rojo
//         cambiarColor("Rojo");
//       }, 2000); // Esperar 2 segundos
  
//       // Esperar otro momento (simulando el tiempo de cambio)
//       setTimeout(() => {
//         // Cambiar de Rojo a Verde
//         cambiarColor("Verde");
//       }, 4000); // Esperar 4 segundos
//     }
//   }
  
//   semaforo();