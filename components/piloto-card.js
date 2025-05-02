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
            color: #000;
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
            const item = event.target.closest(".piloto-card");
            if (item) {
                const id = item.getAttribute("data-id");
                const pilotoSeleccionado = pilotos.find(p => p.id.toString() === id);
                this.showModal(pilotoSeleccionado);
            }
        });

        // Evento para cerrar el modal
        shadow.querySelector(".close-modal").addEventListener("click", () => {
            modalContainer.classList.remove("active");
        });

        this.modalContainer = modalContainer;
        this.modalContent = shadow.getElementById("modal-content");
    }

    showModal(piloto) {
        this.modalContent.innerHTML = `
            <img src="${piloto.imagen}" alt="${piloto.nombre}">
            <p><strong>Nombre:</strong> ${piloto.nombre}</p>
            <p><strong>Equipo:</strong> ${piloto.equipo}</p>
            <p><strong>Rol:</strong> ${piloto.rol}</p>
            <p><strong>Nacimiento:</strong> ${piloto.nacimiento}</p>
            <p><strong>Paí­s:</strong> ${piloto.pais}</p>
        `;
        this.modalContainer.classList.add("active");
    }

    updatePilotos(nuevaLista) {
        const container = this.shadowRoot.querySelector(".card-container");
        container.innerHTML = ""; // Limpia la vista anterior

        nuevaLista.forEach(piloto => {
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
    }
}

customElements.define("piloto-card", PilotoCard);
export { PilotoCard };