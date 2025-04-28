import { pilotos, equipos, circuitos, vehiculos } from '../data/data.js'

class PilotosF1 extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const container = document.createElement("div");
        const style = document.createElement("style");
        style.innerHTML = `
        .container {
            width: 100%;
            background-color:rgb(47, 238, 222);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
        }

        .lista-pilotos {
        background-color: rgb(231, 53, 9);
            justify-content: center;
            padding: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
            gap: 5rem;
            margin-top: 5rem;
        }

        .lista-piloto h2 {
            margin-bottom: 0.5rem;
        }

        .pilotos {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 1rem;
            background: blue;
            border-radius: 0.5rem;
            border: 1px solid #000;
            cursor: pointer;
            transition: box-shadow 0.3s ease-in-out;
        }

        .pilotos p {
            margin-bottom: 0.5rem;
        }

        .pilotos img {
            width: 100%;
            display: relative;
        }

    `;
        container.classList.add("container");

        // Lista de pilotos
        const listaPilotos = document.createElement("ul");
        listaPilotos.classList.add("lista-pilotos");

        pilotos.forEach(piloto => {
            const infoPiloto = document.createElement("li");
            infoPiloto.classList.add("pilotos");
            infoPiloto.innerHTML = `
            <img src="${piloto.imagen}" alt="${piloto.nombre}">
            <h2>${piloto.nombre}</h2>
            <p>Equipo: ${piloto.equipo}</p>
            <p>Rol: ${piloto.rol}</p>`;
            listaPilotos.appendChild(infoPiloto);
        });

        container.appendChild(listaPilotos);
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}

customElements.define("pilotos-f1", PilotosF1);

export { PilotosF1 };