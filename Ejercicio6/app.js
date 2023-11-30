let Aqua=200;
let Emocion=180;
let Alegria=160;
let Frescura=150;
let perfumesVendidosJuana = ["Aqua", "Emocion", "Alegria", "Frescura"];
let perfumesVendidosPedro = ["Aqua", "Emocion", "Alegria", "Frescura"];
let sumaFinalResultadosJuana=0;
let sumaFinalResultadosPedro=0;


// JUANA
function cantidadJuana(){
    let AquaVendidoJuana= document.getElementById("1");
    let cantidadAquaJuana= parseInt(AquaVendidoJuana.value)||0;
    perfumesVendidosJuana["Aqua"]=cantidadAquaJuana;

    let EmocionVendidoJuana= document.getElementById("2");
    let cantidadEmocionJuana= parseInt(EmocionVendidoJuana.value)||0;
    perfumesVendidosJuana["Emocion"]=cantidadEmocionJuana;

    let AlegriaVendidoJuana= document.getElementById("3");
    let cantidadAlegriaJuana= parseInt(AlegriaVendidoJuana.value)||0;
    perfumesVendidosJuana["Alegria"]=cantidadAlegriaJuana;

    let FrescuraVendidoJuana= document.getElementById("4");
    let cantidadFrescuraJuana= parseInt(FrescuraVendidoJuana.value)||0;
    perfumesVendidosJuana["Frescura"]=cantidadFrescuraJuana;
    
    console.log(`Cantidad de perfumes Aqua vendidos por Juana:`, perfumesVendidosJuana["Aqua"] );
    console.log(`Cantidad de perfumes Emoción vendidos por Juana:`, perfumesVendidosJuana["Emocion"]);
    console.log(`Cantidad de perfumes Alegrìa vendidos por Juana:`, perfumesVendidosJuana["Alegria"]);
    console.log(`Cantidad de perfumes Frescura vendidos por Juana:`, perfumesVendidosJuana["Frescura"]);
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
        let sumaFinalResultadosJuana=resultadoAquaJuana+resultadoEmocionJuana+resultadoAlegriaJuana+resultadoFrescuraJuana;
        console.log(`Suma total de dinero recolectada por Juana:`, sumaFinalResultadosJuana);
        return sumaFinalResultadosJuana;
    }else{
        console.log(`Ingrese un digito válido.`);
    }
}
// PEDRO
function cantidadPedro(){
    let AquaVendidoPedro= document.getElementById("5");
    let cantidadAquaPedro= parseInt(AquaVendidoPedro.value)||0;
    perfumesVendidosPedro["Aqua"]=cantidadAquaPedro;

    let EmocionVendidoPedro= document.getElementById("6");
    let cantidadEmocionPedro= parseInt(EmocionVendidoPedro.value)||0;
    perfumesVendidosPedro["Emocion"]=cantidadEmocionPedro;

    let AlegriaVendidoPedro= document.getElementById("7");
    let cantidadAlegriaPedro= parseInt(AlegriaVendidoPedro.value)||0;
    perfumesVendidosPedro["Alegria"]=cantidadAlegriaPedro;

    let FrescuraVendidoPedro= document.getElementById("8");
    let cantidadFrescuraPedro= parseInt(FrescuraVendidoPedro.value)||0;
    perfumesVendidosPedro["Frescura"]=cantidadFrescuraPedro;
    
    console.log(`Cantidad de perfumes Aqua vendidos por Pedro:`, perfumesVendidosPedro["Aqua"] );
    console.log(`Cantidad de perfumes Emoción vendidos por Pedro:`, perfumesVendidosPedro["Emocion"]);
    console.log(`Cantidad de perfumes Alegrìa vendidos por Pedro:`, perfumesVendidosPedro["Alegria"]);
    console.log(`Cantidad de perfumes Frescura vendidos por Pedro:`, perfumesVendidosPedro["Frescura"]);
}

function totalDineroPedro(){
    let AquaPedro = document.getElementById("5");
    let valorAquaPedro = parseInt(AquaPedro.value);
    let resultadoAquaPedro= valorAquaPedro * Aqua;

    let EmocionPedro = document.getElementById("6");
    let valorEmocionPedro = parseInt(EmocionPedro.value);
    let resultadoEmocionPedro= valorEmocionPedro * Emocion;

    let AlegriaPedro = document.getElementById("7");
    let valorAlegriaPedro = parseInt(AlegriaPedro.value);
    let resultadoAlegriaPedro= valorAlegriaPedro * Alegria;

    let FrescuraPedro = document.getElementById("8");
    let valorFrescuraPedro = parseInt(FrescuraPedro.value);
    let resultadoFrescuraPedro= valorFrescuraPedro * Frescura;

    if(!isNaN(valorAquaPedro, valorEmocionPedro, valorAlegriaPedro, valorFrescuraPedro)){
        let sumaFinalResultadosPedro=resultadoAquaPedro+resultadoEmocionPedro+resultadoAlegriaPedro+resultadoFrescuraPedro;
        console.log(`Suma total de dinero recolectada por Pedro:`, sumaFinalResultadosPedro);
        return sumaFinalResultadosPedro;
    }else{
        console.log(`Ingrese un digito válido.`);
    }
}

function mejorEmpleado() {
    let resultadoJuana = totalDineroJuana();
    let resultadoPedro = totalDineroPedro();

    if (resultadoJuana > resultadoPedro) {
        console.log(`Juana es la empleada del mes`);
    } else if (resultadoPedro > resultadoJuana) {
        console.log(`Pedro es el empleado del mes`);
    } else {
        console.log(`El empleado del mes fue empate`);
    }
}



function todoJuana(){
    console.log(cantidadJuana());
    console.log(totalDineroJuana());
}

function todoPedro(){
    console.log(cantidadPedro());
    console.log(totalDineroPedro());
}