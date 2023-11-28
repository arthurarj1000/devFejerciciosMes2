function sumatoriaJuana(){
    let AquaJuana= document.getElementById(`AquaJuana`);
    let contenidoAquaJuana= AquaJuana.textContent.trim();

    let operaciónAquaJuana= contenidoAquaJuana*200;
    return operaciónAquaJuana;
}

let resultadoAquaJuana= sumatoriaJuana();
console.log(resultadoAquaJuana);