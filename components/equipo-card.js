import { pilotos, equipos, circuitos, vehiculos } from '../data/data.js'

class EquiposF1 extends HTMLElement {
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

        .lista-equipos {
            background: #fff;
            justify-content: center;
            padding: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
            gap: 5rem;
            margin-top: 5rem;
        }

        .equipos {
            width: 100%;
            list-style: none;
        }
        
        .equipos:hover {
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
        }

        .equipos p {
            margin-bottom: 0.5rem;
        }

        .equipos img {
            width: 100%;
            display: relative;
            cursor: pointer;
        }

        @media screen and (min-width: 1200px) {
            .container {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 2rem 0;
                gap: 1rem;
            }
            .lista-equipos {
                background: #fff;
                justify-content: center;
                padding: 2rem;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
                gap: 3rem;
                margin-top: 5rem;
            }
        }   
    `;
        container.classList.add("container");

        shadow.appendChild(style);
        shadow.appendChild(container);
        this.container = container;
        this.renderPilotos();
    }

    renderPilotos = async () => {
        this.container.innerHTML = "";
        const listaEquipos = document.createElement("ul");
        listaEquipos.classList.add("lista-equipos");

        equipos.forEach(equipo => {
            const equipos = document.createElement("li");
            equipos.classList.add("equipos");
            equipos.innerHTML = `
            <img src="${equipo.imagen}" alt="${equipo.equipo}">
            <p><strong>Nombre:</strong> ${equipo.nombre}</p>
            <p><strong>Pais:</strong> ${equipo.pais}</p>

            `;
            listaEquipos.appendChild(equipos);
        });

        this.container.appendChild(listaEquipos);
    };

}

customElements.define("equipos-f1", EquiposF1);
export { EquiposF1 };