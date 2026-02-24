const btnCerrar =  document.getElementById("cerrar");
const btnLimpiar = document.getElementById("limpiar");
const contador = document.getElementById("contador");
const contenedorAnimales = document.getElementById("ganador");
const contenedorGanador = document.getElementById("texto-ganador");

let votosTotal = 0;

fetch("galeria.xml").then((response) => response.text())
    .then((data) => {

        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");
        const animales = xml.getElementsByTagName("animal");

        for (let animal of animales) {

            const nombre = animal.getElementsByTagName("nombre")[0].textContent;

            contenedorAnimales.innerHTML += `
            <div class="animal" data-anim>
                <p class="nombre">${nombre}</p>
                <button class="votar">Votar</button>
                <p class="contadorINDV">Votos: 0</p>
            </div>
            `;
        }

        funcionalidadBotones();

    });

function funcionalidadBotones() {

    const botones = document.querySelectorAll(".votar");

    botones.forEach((boton) => {
        boton.addEventListener("click", añadirVoto);
    });
}

function añadirVoto(evento) {
    const animalDiv = evento.target.parentElement;
    const contadorINDV = animalDiv.querySelector(".contadorINDV");

    let votosActuales = parseInt(contadorINDV.textContent.split(": ")[1]);

    votosActuales++;
    votosTotal++;

    contadorINDV.textContent = `Votos: ${votosActuales}`;
    actualizarContador();
    actualizarGanador();
}

function actualizarContador() {
    contador.innerText = `Votos totales: ${votosTotal}`;
}

function actualizarGanador() {
    const animales = document.querySelectorAll(".animal");

    let maxVotos = 0;
    let nombreGanador = "Nadie";

    animales.forEach((animal) => {
        
        const nombre = animal.querySelector(".nombre").textContent;
        const votos = parseInt(animal.querySelector(".contadorINDV").textContent.split(": ")[1]);

        if(votos > maxVotos) {
            maxVotos = votos;
            nombreGanador = nombre;
        }
    });

    if(maxVotos > 0) {
        contenedorGanador.innerText = `Ganador actual: ${nombreGanador} con ${maxVotos} votos`;
    } else {
        contenedorGanador.innerText = "Aún no hay votos";
    }
}

function cerrarVotos() {
    const botones = document.querySelectorAll(".votar");
    botones.forEach((boton) => {
        boton.disabled = true;
    });
}

btnLimpiar.addEventListener("click", () => {
    location.reload(); 
});

btnCerrar.addEventListener("click", cerrarVotos);