class PilotoDetail extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        // Estilos del modal 
        const style = document.createElement("style");
        style.innerHTML = `
        .modal-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.4s ease-in-out;
        }

        .modal {
            background: linear-gradient(to right, black, #ff3737);
            padding: 2rem;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0px 6px 15px rgba(255, 55, 55, 0.8);
            max-width: 400px;
            width: 85%;
            color: white;
            animation: fadeIn 0.4s ease-in-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
        }

        .modal img {
            width: 100%;
            max-width: 220px;
            border-radius: 50%;
            margin-bottom: 1rem;
            border: 4px solid red;
        }

        .modal h3 {
            font-size: 1.8rem;
            font-weight: bold;
            text-transform: uppercase;
        }

        .modal p {
            font-size: 1rem;
            color: #ddd;
        }

        .close-modal {
            background: red;
            color: white;
            border: none;
            padding: 0.6rem 1.2rem;
            font-size: 1.3rem;
            cursor: pointer;
            border-radius: 6px;
            margin-top: 1rem;
            transition: 0.3s ease-in-out;
        }

        .close-modal:hover {
            background: white;
            color: red;
        }

        .modal-container.active {
            visibility: visible;
            opacity: 1;
        }
        `;

        const modalContainer = document.createElement("div");
        modalContainer.classList.add("modal-container");

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal");
        modalContent.innerHTML = `
        <button class="close-modal" title="Volver">&#8592;</button>
        <div id="modal-content"></div>
      `;
      

        modalContainer.appendChild(modalContent);
        shadow.appendChild(style);
        shadow.appendChild(modalContainer);

        document.addEventListener("openModal", (event) => {
            this.showModal(event.detail);
        });

        shadow.querySelector(".close-modal").addEventListener("click", () => {
            modalContainer.classList.remove("active");
        });

        this.modalContainer = modalContainer;
        this.modalContent = shadow.getElementById("modal-content");
    }

    showModal(piloto) {
        this.modalContent.innerHTML = `
            <img src="${piloto.imagen}" alt="${piloto.nombre}">
            <h3>${piloto.nombre}</h3>
            <p><strong>Equipo:</strong> ${piloto.equipo}</p>
        `;
        this.modalContainer.classList.add("active");
    }
}

customElements.define("piloto-detail", PilotoDetail);
export { PilotoDetail };
