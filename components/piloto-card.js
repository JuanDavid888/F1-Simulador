import { pilotos } from '../data/data.js';

class PilotoCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        // Estilos de card
        const style = document.createElement("style");
        style.innerHTML = `
        .card-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
            padding: 2rem;
            justify-content: center;
        }

        .piloto-card {
            background: linear-gradient(to right, black, #ff3737);
            border-radius: 12px;
            padding: 1rem;
            text-align: center;
            box-shadow: 0px 6px 12px rgba(255, 55, 55, 0.7);
            transition: transform 0.3s ease-in-out;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .piloto-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.1);
            transform: skewX(-45deg);
            transition: 0.5s;
        }

        .piloto-card:hover::before {
            left: 100%;
        }

        .piloto-card img {
            width: 100%;
            max-width: 180px;
            border-radius: 50%;
            margin-bottom: 1rem;
            transition: transform 0.3s ease-in-out;
            border: 3px solid red;
        }

        .piloto-card:hover img {
            transform: scale(1.2);
        }

        .piloto-card h3 {
            font-size: 1.5rem;
            color: white;
            font-weight: bold;
        }

        .piloto-card p {
            color: #ddd;
        }
        `;

        const container = document.createElement("div");
        container.classList.add("card-container");

        pilotos.forEach(piloto => {
            const pilotoItem = document.createElement("div");
            pilotoItem.classList.add("piloto-card");
            pilotoItem.setAttribute("data-id", piloto.id);
            pilotoItem.innerHTML = `
                <img src="${piloto.imagen}" alt="${piloto.nombre}">
                <h3>${piloto.nombre}</h3>
                <p>Equipo: ${piloto.equipo}</p>
            `;
            container.appendChild(pilotoItem);
        });

        shadow.appendChild(style);
        shadow.appendChild(container);

        // Evento para abrir el modal
        container.addEventListener("click", (event) => {
            const item = event.target.closest(".piloto-card");
            if (item) {
                const id = item.getAttribute("data-id");
                const pilotoSeleccionado = pilotos.find(p => p.id.toString() === id);
                document.dispatchEvent(new CustomEvent("openModal", { detail: pilotoSeleccionado }));
            }
        });
    }
}

customElements.define("piloto-card", PilotoCard);
export { PilotoCard };
