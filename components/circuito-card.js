import { circuitos } from '../data/data.js';

class CircuitoCard extends HTMLElement {
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

        .pista-card {
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

        .pista-card::before {
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

        .pista-card:hover::before {
            left: 100%;
        }

        .pista-card img {
            width: 100%;
            max-width: 180px;
            margin-bottom: 1rem;
            transition: transform 0.3s ease-in-out;
            border: 3px solid red;
        }

        .pista-card:hover img {
            transform: scale(1.2);
        }

        .pista-card h3 {
            font-size: 1.5rem;
            color: white;
            font-weight: bold;
        }

        .pista-card p {
            color: #ddd;
        }

        /* Modal */
        .modal-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }

        .modal {
            width: 50%;
            background: white;
            padding: 2rem;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0px 4px 12px rgba(255, 55, 55, 0.6);
        }

        .modal img {
            width: 100%;
            max-width: 300px;
            margin-bottom: 1rem;
        }

        .modal-container p{
            width: 60%;
            color: #000;
            margin-left: 20%;
        }

        .modal-container.active {
            visibility: visible;
            opacity: 1;
        }

        .close-modal {
            background: red;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            font-size: 1.2rem;
            cursor: pointer;
            border-radius: 4px;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }

        .close-modal:hover {
            background: black;
        }
        `;

        const container = document.createElement("div");
        container.classList.add("card-container");

        circuitos.forEach(circuito => {
            const circuitoItem = document.createElement("div");
            circuitoItem.classList.add("pista-card");
            circuitoItem.setAttribute("data-id", circuito.id);
            circuitoItem.innerHTML = `
                <img src="${circuito.imagen}" alt="${circuito.nombre}">
                <h3>${circuito.nombre}</h3>
                <p>Equipo: ${circuito.equipo}</p>
            `;
            container.appendChild(circuitoItem);
        });

        shadow.appendChild(style);
        shadow.appendChild(container);

       // Modal
        const modalContainer = document.createElement("div");
        modalContainer.classList.add("modal-container");

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal");
        modalContent.innerHTML = `
            <button class="close-modal">Cerrar</button>
            <div id="modal-content"></div>
        `;

        modalContainer.appendChild(modalContent);
        shadow.appendChild(modalContainer);

        // Evento para abrir el modal
        container.addEventListener("click", (event) => {
            const item = event.target.closest(".pista-card");
            if (item) {
                const id = item.getAttribute("data-id");
                const circuitoSeleccionado = circuitos.find(c => c.id.toString() === id);
                this.showModal(circuitoSeleccionado);
            }
        });

        // Evento para cerrar el modal
        shadow.querySelector(".close-modal").addEventListener("click", () => {
            modalContainer.classList.remove("active");
        });

        this.modalContainer = modalContainer;
        this.modalContent = shadow.getElementById("modal-content");
    }

    showModal(circuito) {
        this.modalContent.innerHTML = `
            <img src="${circuito.imagen}" alt="${circuito.nombre}">
            <p><strong>Longitud:</strong> ${circuito.longitud_km} km</p>
            <p><strong>Vueltas:</strong> ${circuito.vueltas}</p>
            <p><strong>Descripción:</strong> ${circuito.descripcion}</p>
        `;
        this.modalContainer.classList.add("active");
    }
}

customElements.define("circuito-card", CircuitoCard);
export { CircuitoCard };