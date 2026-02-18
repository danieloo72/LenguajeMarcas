const btnCerrar =  document.getElementById("cerrar");
const btnLimpiar = document.getElementById("limpiar");
const contador = document.getElementById("contador");
const contenedorAnimales = document.getElementById("ganador");

let votosTotal = 0;
let votosAnimal = 0;

fetch("galeria.xml").then((response) => response.text())
    .then((data) => {

        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml")
        const animales = xml.getElementsByTagName("animal");

        for (let animal of animales) {

            const nombre = animal.getElementsByTagName("nombre")[0].textContent;

            contenedorAnimales.innerHTML += `
            
            <div data-anim>
                <p>${nombre}</p>
                <button class="votar">Votar</button>
                <p id="contadorINDV">Votos: 0</p>
            </div>
            `;
        }

        funcionalidadBotones();

    });

const VotosINDV = document.getElementById("contadorINDV");

function funcionalidadBotones() {

    const botones = document.querySelectorAll(".votar");

    botones.forEach((boton) => {
        boton.addEventListener("click", añadirVoto);
    });
}

function añadirVoto(evento) {
    const animal = evento.target.parentElement;
        votosAnimal++;
        votosTotal++;
    actualizarContador();
}

function actualizarContador() {
    contador.innerText = `Votos: ${votosAnimal}`
    contador.innerText = `Votos totales: ${votosTotal}`;
}

function cerrarVotos() {
    animal.style.display = "block";
}

btnCerrar.addEventListener("click", cerrarVotos);