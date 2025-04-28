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
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem 0;
            gap: 1rem;
        }

        .lista-pilotos {
            background: #fff;
            justify-content: center;
            padding: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
            gap: 5rem;
            margin-top: 5rem;
        }

        .pilotos {
            width: 100%;
            list-style: none;
            cursor: pointer;
        }
        
        .pilotos:hover {
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
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