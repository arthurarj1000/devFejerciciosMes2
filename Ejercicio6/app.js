let Aqua=200;
let Emocion=180;
let Alegria=160;
let Frescura=150;
let perfumesVendidos = ["Aqua", "Emocion", "Alegria", "Frescura"];

function cantidadJuana(){
    let AquaVendidoJuana= document.getElementById("1");
    let cantidadAquaJuana= parseInt(AquaVendidoJuana.value)||0;
    perfumesVendidos["Aqua"]=cantidadAquaJuana;

    let EmocionVendidoJuana= document.getElementById("2");
    let cantidadEmocionJuana= parseInt(EmocionVendidoJuana.value)||0;
    perfumesVendidos["Emocion"]=cantidadEmocionJuana;

    let AlegriaVendidoJuana= document.getElementById("3");
    let cantidadAlegriaJuana= parseInt(AlegriaVendidoJuana.value)||0;
    perfumesVendidos["Alegria"]=cantidadAlegriaJuana;

    let FrescuraVendidoJuana= document.getElementById("4");
    let cantidadFrescuraJuana= parseInt(FrescuraVendidoJuana.value)||0;
    perfumesVendidos["Frescura"]=cantidadFrescuraJuana;
    
    console.log(`Cantidad de perfumes Aqua vendidos por Juana:`, perfumesVendidos["Aqua"] );
    console.log(`Cantidad de perfumes Emoción vendidos por Juana:`, perfumesVendidos["Emocion"]);
    console.log(`Cantidad de perfumes Alegrìa vendidos por Juana:`, perfumesVendidos["Alegria"]);
    console.log(`Cantidad de perfumes Frescura vendidos por Juana:`, perfumesVendidos["Frescura"]);
}

function totalDineroJuana(){
    let AquaJuana = document.getElementById("1");
    let valorAquaJuana = parseInt(AquaJuana.value);
    let resultadoAquaJuana= valorAquaJuana * Aqua;

    let EmocionJuana = document.getElementById("2");
    let valorEmocionJuana = parseInt(EmocionJuana.value);
    let resultadoEmocionJuana= valorEmocionJuana * Emocion;

    let AlegriaJuana = document.getElementById("3");
    let valorAlegriaJuana = parseInt(AlegriaJuana.value);
    let resultadoAlegriaJuana= valorAlegriaJuana * Alegria;

    let FrescuraJuana = document.getElementById("4");
    let valorFrescuraJuana = parseInt(FrescuraJuana.value);
    let resultadoFrescuraJuana= valorFrescuraJuana * Frescura;

    if(!isNaN(valorAquaJuana, valorEmocionJuana, valorAlegriaJuana, valorFrescuraJuana)){
        let sumaFinalResultados=resultadoAquaJuana+resultadoEmocionJuana+resultadoAlegriaJuana+resultadoFrescuraJuana;
        console.log(`Suma total de dinero recolectada por Juana:`, sumaFinalResultados);
    }else{
        console.log(`Ingrese un digito válido.`);
    }
}

function todoJuana(){
    console.log(cantidadJuana());
    console.log(totalDineroJuana());
}