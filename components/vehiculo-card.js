import { vehiculos } from '../data/data.js';

class VehiculoCard extends HTMLElement {
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

        .vehiculo-card {
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

        .vehiculo-card::before {
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

        .vehiculo-card:hover::before {
            left: 100%;
        }

        .vehiculo-card img {
            width: 100%;
            max-width: 200px;
            border-radius: 50%;
            margin-bottom: 1rem;
            transition: transform 0.3s ease-in-out;
            border: 3px solid black;
        }

        .vehiculo-card:hover img {
            transform: scale(1.2);
        }

        .vehiculo-card h3 {
            font-size: 1.5rem;
            color: white;
            font-weight: bold;
        }

        .vehiculo-card p {
            color: #ddd;
        }
        `;

        const container = document.createElement("div");
        container.classList.add("card-container");

        vehiculos.forEach(vehiculo => {
            const vehiculoItem = document.createElement("div");
            vehiculoItem.classList.add("vehiculo-card");
            vehiculoItem.setAttribute("data-id", vehiculo.id);
            vehiculoItem.innerHTML = `
                <img src="${vehiculo.imagen}" alt="${vehiculo.nombre}">
                <h3>${vehiculo.nombre}</h3>
                <p>Equipo: ${vehiculo.equipo}</p>
            `;
            container.appendChild(vehiculoItem);
        });

        shadow.appendChild(style);
        shadow.appendChild(container);

        // Evento para abrir el modal
        container.addEventListener("click", (event) => {
            const item = event.target.closest(".vehiculo-card");
            if (item) {
                const id = item.getAttribute("data-id");
                const vehiculoSeleccionado = vehiculos.find(p => p.id.toString() === id);
                document.dispatchEvent(new CustomEvent("openModal", { detail: vehiculoSeleccionado }));
            }
        });
    }
}

customElements.define("vehiculo-card", VehiculoCard);
export { VehiculoCard };
