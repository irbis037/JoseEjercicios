//ejercicio hacer una funcion que aceptara por argumento una array de cosas y que guarde en una nueva los mismos string pero desordenados sin repetirse



let frutas = ["manzanas", "melon", "platanos", "naranjas"]

function sacarFruta(frutas) {

    let nuevaCaja = [];
    
    for (let i = 0; i < frutas.length; i++) {
        let mezclaFruta = frutas[Math.floor(Math.random() * (frutas.length))];
        if (nuevaCaja.indexOf(mezclaFruta) === -1) {

            nuevaCaja.push(mezclaFruta);
        } else {
            i = i - 1;
        }
    };

    return nuevaCaja;

}