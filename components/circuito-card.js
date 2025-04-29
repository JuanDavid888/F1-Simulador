import { pilotos, equipos, circuitos, vehiculos } from '../data/data.js'

class CircuitosF1 extends HTMLElement {
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

        .lista-circuitos {
            background: #fff;
            justify-content: center;
            padding: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
            gap: 5rem;
            margin-top: 5rem;
        }

        .circuitos {
            width: 100%;
            list-style: none;
        }
        
        .circuitos:hover {
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
        }

        .circuitos p {
            margin-bottom: 0.5rem;
        }

        .circuitos img {
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
            .lista-circuitos {
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
        const listaCircuitos = document.createElement("ul");
        listaCircuitos.classList.add("lista-circuitos");

        circuitos.forEach(pista => {
            const circuitos = document.createElement("li");
            circuitos.classList.add("circuitos");
            circuitos.innerHTML = `
            <img src="${pista.imagen}" alt="${pista.nombre}">
            <p><strong>Nombre:</strong> ${pista.nombre}</p>
            <p><strong>Pais:</strong> ${pista.pais}</p>

            `;
            listaCircuitos.appendChild(circuitos);
        });

        this.container.appendChild(listaCircuitos);
    };

}

customElements.define("circuitos-f1", CircuitosF1);
export { CircuitosF1 };