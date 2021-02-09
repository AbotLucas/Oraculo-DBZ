/* Clases */

class Carta {
    constructor(id, nombre, descripcion, imagen) {
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.imagen = imagen
    }
}

class Partida {
    constructor(id, player1, player2, cartas, match) {
        this.id = id
        this.player1 = player1
        this.player2 = player2
        this.cartas = cartas
        this.match = match
    }
}

/* Mazo */
const deck = [
    new Carta(1, "Goten", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/goten-ssj.png"),
    new Carta(2, "Androide 18", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/18.png"),
    new Carta(3, "Broly", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/broly.png"),
    new Carta(4, "Bulma", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/bulma.png"),
    new Carta(5, "Buu Fase 3", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/buu-chico.png"),
    new Carta(6, "Freezer", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/freezer.png"),
    new Carta(7, "Goku", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/goku_v3.png"),
    new Carta(8, "Gotenks", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/gotenks-ssj3.png"),
    new Carta(9, "Abuelo Gohan", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/grandpa_gohan.png"),
    new Carta(10, "Krillin", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/krillin-chico.png"),
    new Carta(11, "Maestro Roshi", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/maestro-roshi.png"),
    new Carta(12, "Majin Buu", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/majin_buu.png"),
    new Carta(13, "Mr Satan", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/mr_satan.png"),
    new Carta(14, "Pan", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/pan_gt.png"),
    new Carta(15, "Piccoro", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/piccorro.png"),
    new Carta(16, "Reecome", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/reecome.png"),
    new Carta(17, "Gohan", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/teen_gohan_ssj.png"),
    new Carta(18, "Tenshinhan", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/tenshinhan.png"),
    new Carta(19, "Trunks", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/trunks-chico-ssj.png"),
    new Carta(20, "Trunks del futuro", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/trunks_ssj.png"),
    new Carta(21, "Uub", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/uub.png"),
    new Carta(22, "Vegeta", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/vegeta_bs.png"),
    new Carta(23, "Videl", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/videl.png"),
    new Carta(24, "Yayirobe", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur repellat eos rerum repudia atque iusto asperiores cumque, optio aliquid est sunt perspiciatis quod illum qui, omnis accusamus totam odio?", "images/cards/yayirobe.png")
]

/* Partidas */
const partidas = []

let fondo = document.querySelector('body')
fondo.classList.add('fondoNamek')
/* Levanto Pantallas para manipularlas en todo el documento */
/* INICIO */
let pantallaInicio = document.querySelector('.pantallaInicio')
let header = document.querySelector('header')
let footer = document.querySelector('footer')
let tablaInicio = document.querySelector('.tablaInicio tbody').addEventListener('click', function (e) { cargarPartida(e) })
let pantallaInicio__botonJugar = document.querySelector('#pantallaInicio__btn-play').addEventListener('click', jugar)
/* CARGA */
let pantallaCarga = document.querySelector('.pantallaCarga')
/* CARTAS */
let pantallaCartas = document.querySelector('.pantallaCartas')
let pantallaCartasCerrar = document.querySelector('.pantallaCartasCerrar').addEventListener('click', verResultados)
let cartaBotones = document.getElementById('cartaBotones')
let botonVerResultados = document.querySelector('.pantallaCartas #btn-verResult').addEventListener('click', verResultados)
let botonTirarDeNuevo = document.querySelector('.pantallaCartas #btn-volverATirar').addEventListener('click', volverATirar)
/* RESULTADOS (MATCH) */
let pantallaResultado = document.querySelector('.pantallaResultado')
let pantallaResultadoCerrar = document.querySelector('#pantallaResultado__botonCerrarResultado').addEventListener('click', verInicio)
let pantallaResultadoGuardar = document.querySelector('#pantallaResultado__botonGuardar').addEventListener('click', guardarPartida)
let pantallaResultadoSalir = document.getElementById('pantallaResultado__botonSalir').addEventListener('click', verInicio)
let pantallaResultadoMinicard = document.querySelector('.pantallaResultado__containerMiniCards')
/* Player */
let player = document.getElementById('player')
let playerControl = document.querySelector('footer .playerControl')
let mute = document.querySelector('footer .playerControl').addEventListener('click', mutearODesmutear)

function jugar() {
    /* Obtengo los valores de player 1 y player 2 */
    let player1 = document.querySelector('#pantallaInicio__form-player1').value
    let player2 = document.querySelector('#pantallaInicio__form-player2').value
    /* Si estan vacios los seteo como guerrere1 y 2 */
    if (player1 == '') {
        player1 = 'Guerrere 1'
    }
    if (player2 == '') {
        player2 = 'Guerrere 2'
    }
    /* Oculto el inicio y muesto la carga */
    ocultar(pantallaInicio)
    ocultar(header)
    ocultar(footer)
    botonesClaveOn()
    fondo.classList.remove('fondoNamek')
    player.src = './media/extreme_tension.mp3'
    player.currentTime = 35
    mostrar(pantallaCarga)
    /* reparto las cartas */
    let partida = repartir()
    /* Luego de 3 segundos vuelvo a ocultar la carga */
    setTimeout(function () {
        ocultar(pantallaCarga)
        mostrarCartas(partida, player1, player2)
    }, 3000)
}


function ocultar(pantalla) {
    if (!pantalla.className.includes('oculto')) { pantalla.classList.add('oculto') }
}

function mostrar(pantalla) {
    if (pantalla.className.includes('oculto')) { pantalla.classList.remove('oculto') }
}
//repartir - elije aleatoriamente 6 cartas del deck
function repartir() {

    let repartija = []
    /* Agarro 6 cartas random del deck declarado como constante */
    for (let i = 0; i < 6; i++) {
        repartija.push(deck[Math.floor(Math.random() * deck.length)])
    }
    return repartija

}
//mostrarCartas - recibe la partida y los nombres de los players y renderiza la partida
function mostrarCartas(partida, player1, player2) {

    let guerrero = player1
    let player = '1'
    let i = 0
    let numeroDeCarta = 1
    let contenidoElementoCarousel

    for (i; i < 6; i++) {
        /* Si es mayor a, no debe llevar la class active */
        if (i == 0) {
            let elementoCarousel1 = document.createElement('div')
            elementoCarousel1.classList.add('carousel-item')
            elementoCarousel1.classList.add('active')
            contenidoElementoCarousel = `<div class="carta">
              <h2>Carta ${numeroDeCarta}/3 de <span id="player${player}">${guerrero}</span></h2>
              <div class="contenedor-img-carousel">
                <img src="${partida[i].imagen}" alt="${partida[i].nombre}" class="img-carousel">
              </div>
              <h3>${partida[i].nombre}</h3>
              <p>${partida[i].descripcion}</p>
            </div>`
            elementoCarousel1.innerHTML = contenidoElementoCarousel
            cartaBotones.insertAdjacentElement('beforeBegin', elementoCarousel1)
        } else {
            let elementoCarousel = document.createElement('div')
            elementoCarousel.classList.add('carousel-item')

            /* Si es igual a 2 debems pasar a el guerrero 2, y  el numero de carta se reinicia */
            if (i == 3) {
                guerrero = player2
                numeroDeCarta = 1
                player = '2'
            }

            contenidoElementoCarousel = `
            <div class="carta">
              <h2>Carta ${numeroDeCarta}/3 de <span id="player${player}">${guerrero}</span></h2>
              <div class="contenedor-img-carousel">
                <img src="${partida[i].imagen}" alt="${partida[i].nombre}" class="img-carousel">
              </div>
              <h3>${partida[i].nombre}</h3>
              <p>${partida[i].descripcion}</p>
            </div>`
            elementoCarousel.innerHTML = contenidoElementoCarousel
            cartaBotones.insertAdjacentElement('beforeBegin', elementoCarousel)
        }
        numeroDeCarta++
    }

    ocultar(pantallaCarga)
    mostrar(pantallaCartas)

}
//verResultados - muestre ls resultados de la partida y si fue match o no
function verResultados() {

    
    player.src = './media/prologo.mp3'

    let puntajeUser1 = 0
    let puntajeUser2 = 0
    let nombre
    let flag = false
    for (let i = 1; i <= 6; i++) {

        if (i <= 2) {
            nombre = document.querySelector(`.carousel-item:nth-child(${i}) h3`).innerHTML
            for (personaje of deck) {
                if (personaje.nombre == nombre) {
                    puntajeUser1 += personaje.id
                }
                if (flag == true) {
                    break
                }
            }
            flag = false
        } else {
            nombre = document.querySelector(`.carousel-item:nth-child(${i}) h3`).innerHTML
            for (personaje of deck) {
                if (personaje.nombre == nombre) {
                    puntajeUser2 += personaje.id
                }
                if (flag == true) {
                    break
                }
            }
        }

    }

    if (((puntajeUser1 % 2) == 0) && ((puntajeUser2 % 2) == 0) || ((puntajeUser1 % 2) == 1) && ((puntajeUser2 % 2) == 1)) {
        mostrarMatch(true)
    } else {
        mostrarMatch(false)
    }

}
//mostrarMatch - recibe si fue match o no y setea las variables a mostrar en la pantallaREsultados final
function mostrarMatch(fueMatch) {

    /* Cargamos las minicard de los resultados */
    for (let i = 1; i <= 6; i++) {
        if (i < 4) {
            let pantallaResultadoMinicard = document.querySelector(`#pantallaResultado__containerMiniCards1 .pantallaResultado__miniCard:nth-child(${i}) img`)
            let imagen = getCartaByName(document.querySelector(`.carousel-item:nth-child(${i}) h3`).innerHTML).imagen
            pantallaResultadoMinicard.src = `${imagen}`
        } else {
            let pantallaResultadoMinicard2 = document.querySelector(`#pantallaResultado__containerMiniCards2 .pantallaResultado__miniCard:nth-child(${i - 3}) img`)
            let imagen = getCartaByName(document.querySelector(`.carousel-item:nth-child(${i}) h3`).innerHTML).imagen
            pantallaResultadoMinicard2.src = `${imagen}`
        }

    }

    let pantallaResultadoNombrePlayer1 = document.querySelector('.pantallaResultado #pantallaResultado__p1')
    let pantallaResultadoNombrePlayer2 = document.querySelector('.pantallaResultado #pantallaResultado__p2')


    /* Obtengo los valores de player 1 y player 2 */
    let player1 = document.querySelector('.carta #player1').innerHTML
    let player2 = document.querySelector('.carta #player2').innerHTML

    pantallaResultadoNombrePlayer1.innerHTML = player1
    pantallaResultadoNombrePlayer2.innerHTML = player2

    if (fueMatch == true) {

        let krillin = document.querySelector('.pantallaResultado__containerMatchKrillin').src = 'images/siMatchKrillin.png'
        let goku = document.querySelector('.pantallaResultado__containerMatchGoku').src = 'images/siMatchGoku.png'

        let match = document.querySelector('.pantallaResultado__containerMatchResult h3').innerHTML = 'MATCH <br>❤️'


    }

    ocultar(pantallaCartas)
    mostrar(pantallaResultado)
}
//volverATirar - vuelve a tirar las 6 cartas 
function volverATirar() {
    cartaBotones.classList.remove('active')
    let player1 = document.querySelector('.carta #player1').innerHTML
    let player2 = document.querySelector('.carta #player2').innerHTML

    ocultar(pantallaCartas)
    mostrar(pantallaCarga)
    let partida = repartir()
    /* Luego de 3 segundos vuelvo a ocultar la carga */
    setTimeout(function () {
        ocultar(pantallaCarga)
    }, 3000)
    resetPantallaCartas()
    mostrarCartas(partida, player1, player2)
}
//resetPantallaCartas - limpia el contenedor carousel-inner
function resetPantallaCartas() {
    /* Selecciono mi carousel */
    let carousel = document.querySelector('.pantallaCartas .carousel-inner')
    /* Itero el carousel para borrar uno a uno el primer elemento en cada vuelta */
    for (let i = 0; i < 6; i++) {
        let carouselElement = document.querySelector(`.carousel-item:first-child`)
        carousel.removeChild(carouselElement)
    }
    let cartaBotones = document.getElementById('cartaBotones')
    if (cartaBotones.className.includes('active')) { cartaBotones.classList.remove('active') }
}

function guardarPartida() {

    /* Obtengo los valores de player 1 y player 2 */
    let player1 = document.querySelector('.carta #player1').innerHTML
    let player2 = document.querySelector('.carta #player2').innerHTML

    /* Cargamos en un array los id de cada carta de la partida */
    let arrayCartas = []
    for (let i = 1; i <= 6; i++) {
        let carta = getCartaByName(document.querySelector(`.carousel-item:nth-child(${i}) h3`).innerHTML)
        arrayCartas.push(carta.id)
    }
    /* Volvemos a revisar si hubo match entre los players o no */
    let fueMatch
    let puntajeUser1 = 0
    let puntajeUser2 = 0
    let nombre
    let flag = false
    for (let i = 1; i <= 6; i++) {

        if (i <= 2) {
            nombre = document.querySelector(`.carousel-item:nth-child(${i}) h3`).innerHTML
            for (personaje of deck) {
                if (personaje.nombre == nombre) {
                    puntajeUser1 += personaje.id
                }
                if (flag == true) {
                    break
                }
            }
            flag = false
        } else {
            nombre = document.querySelector(`.carousel-item:nth-child(${i}) h3`).innerHTML
            for (personaje of deck) {
                if (personaje.nombre == nombre) {
                    puntajeUser2 += personaje.id
                }
                if (flag == true) {
                    break
                }
            }
        }

    }

    if (((puntajeUser1 % 2) == 0) && ((puntajeUser2 % 2) == 0) || ((puntajeUser1 % 2) == 1) && ((puntajeUser2 % 2) == 1)) {
        fueMatch = true
    } else {
        fueMatch = false
    }
    /* Cargo todo en un objeto partida */
    let nuevaPartida = new Partida(partidas.length + 1, player1, player2, arrayCartas, fueMatch)
    /* Y cargo la nueva partida en el array de partidas */
    partidas.push(nuevaPartida)
    verInicio()
}

function verInicio() {

    player.src = 'media/el_poder_nuestro_es.mp3'

    let tablaInicio = document.querySelector('.tablaInicio')

    let tablaInicioParaInsertar = document.querySelector('.tablaInicio .table-striped tbody')

    let emoji

    if (partidas.length != 0) {

        limpiarTablaInicio()

        for (partida of partidas) {


            mostrar(tablaInicio)

            if (partida.match == true) {
                emoji = '❤️'
            } else {
                emoji = '💔'
            }
            let modelo = `<tr scope='row'><td scope='col'>${partida.id}</td><td scope='col'>${partida.player1}</td><td scope='col'>${partida.player2}</td><td scope='col'>${emoji}</td></tr>`

            tablaInicioParaInsertar.innerHTML += modelo
        }

    }

    /* Limpio los input de nombres de player */
    document.querySelector('#pantallaInicio__form-player1').value = ''
    document.querySelector('#pantallaInicio__form-player2').value = ''

    resetPantallaCartas()
    ocultar(pantallaResultado)
    fondo.classList.add('fondoNamek')
    mostrar(header)
    mostrar(footer)
    mostrar(pantallaInicio)
    //let tablaInicioParaInsertar = document.querySelector('.tablaInicio .table-striped .tbody').innerHTML += modelo


}

function limpiarTablaInicio() {
    let tablaInicioParaInsertar = document.querySelector('.tablaInicio .table-striped tbody')
    tablaInicioParaInsertar.innerHTML = ''
}

function cargarPartida(e) {
    /* Obtengo el id de la partida que el usuario clickeo */
    let columnaClickeada = e.target.parentNode
    let id = columnaClickeada.firstChild.innerHTML

    /* Busco la partida en mi array de partidas */
    let partida = getPartidaById(id)

    /* Recupero las 6 cartas de esta partida */
    let arrayCartas = []
    for (idCarta of partida.cartas) {
        arrayCartas.push(getCartaByID(idCarta))
    }

    /* Oculto los botones que no se van a usar (GUARDAR Y VOLVER A TIRAR) */
    botonesClaveOff()

    /* Oculto el inicio y muesto la carga */
    ocultar(pantallaInicio)
    ocultar(header)
    fondo.classList.remove('fondoNamek')
    mostrar(pantallaCarga)
    /* Luego de 3 segundos vuelvo a ocultar la carga */
    setTimeout(function () {
        ocultar(pantallaCarga)
        mostrarCartas(arrayCartas, partida.player1, partida.player2)
    }, 3000)

}

function botonesClaveOff() {

    let botonGuardar = document.getElementById('pantallaResultado__botonGuardar')
    if (botonGuardar.style.display != 'none') {
        botonGuardar.style.display = 'none'
    }
    let botonVolverATirar = document.getElementById('btn-volverATirar')
    if (botonVolverATirar.style.display != 'none') {
        botonVolverATirar.style.display = 'none'
    }
}

function botonesClaveOn() {

    let botonGuardar = document.getElementById('pantallaResultado__botonGuardar')
    if (botonGuardar.style.display == 'none') {
        botonGuardar.style.display = 'inline-block'
    }
    let botonVolverATirar = document.getElementById('btn-volverATirar')
    if (botonVolverATirar.style.display == 'none') {
        botonVolverATirar.style.display = 'inline-block'
    }
}

function mutearODesmutear() {

    if (player.muted == true) {
        playerControl.innerHTML = '🔊'
        player.muted = false
    } else if (player.muted == false) {
        playerControl.innerHTML = '🔇'
        player.muted = true
    }
}

//getPartidaById
function getPartidaById(id) {
    let retorno
    for (partida of partidas) {
        if (partida.id == id) {
            retorno = partida
            break
        }
    }
    return retorno
}
//getCartaByID - retorna la carta asociada al id recibido
function getCartaByID(id) {
    return deck[id - 1]
}
//getCartaByName - retorna la carta asociada al nombre recibido
function getCartaByName(name) {
    let retorno = new Carta()
    for (carta of deck) {
        if (carta.nombre == name) {
            retorno = carta
            break
        }
    }
    return retorno
}



