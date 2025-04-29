import { pilotos, equipos, circuitos, vehiculos } from '../data/data.js'

class VehiculosF1 extends HTMLElement {
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

        .lista-vehiculos {
            background: #fff;
            justify-content: center;
            padding: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
            gap: 5rem;
            margin-top: 5rem;
        }

        .vehiculos {
            width: 100%;
            list-style: none;
        }
        
        .vehiculos:hover {
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
        }

        .vehiculos p {
            margin-bottom: 0.5rem;
        }

        .vehiculos img {
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
            .lista-vehiculos {
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
        const listaVehiculos = document.createElement("ul");
        listaVehiculos.classList.add("lista-vehiculos");

        vehiculos.forEach(vehiculo => {
            const vehiculos = document.createElement("li");
            vehiculos.classList.add("vehiculos");
            vehiculos.innerHTML = `
            <img src="${vehiculo.imagen}" alt="${vehiculo.equipo}">
            <p><strong>Equipo:</strong> ${vehiculo.equipo}</p>
            <p><strong>Modelo:</strong> ${vehiculo.modelo}</p>

            `;
            listaVehiculos.appendChild(vehiculos);
        });

        this.container.appendChild(listaVehiculos);
    };

}

customElements.define("vehiculos-f1", VehiculosF1);
export { VehiculosF1 };
