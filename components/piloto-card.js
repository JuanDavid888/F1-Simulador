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
            cursor: pointer;
        }

        .detalles-piloto {
            width: 50%;
            height: 30rem;
            background: #fff;
            justify-content: center;
            padding: 2rem;
            gap: 5rem;
            margin-top: 5rem;
        }

        .detalles {
            width: 95%;
            height: 26rem;
            list-style: none;
        }
        
        .detalles button:hover {
            background-color: #000;
            color: #fff;
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
        }

        .detalles img {
            width: 120%;
            display: flex;
            cursor: pointer;
        }

        .detalles-imagen {
            width: 40%;
            display: flex;
            align-items: center;
        }

        .detalles-info {
            width: 40%;
            margin-left: 60%;
            margin-top: -50%;
            line-height: 1.5;
        }

        .detalles-info p {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        .detalles-info strong {
            font-size: 1.5rem;
        }

        .back-content {
            background: red;
            margin-bottom: 2rem;
            border: none;
            cursor: pointer;
            font-size: 1.5rem;
            color: #fff;
            border-radius: 0.5rem;
        }

        @media screen and (max-width: 600px) {
            .detalles-piloto {
                width: 89%;
                height: 33rem;
                background: #fff;
                justify-content: center;
                padding: 2rem;
                gap: 5rem;
                margin-top: 5rem;
            }

            .detalles {
                width: 89%;
                height: 31rem;
                list-style: none;
            }
            
            .detalles button:hover {
                background-color: #000;
                color: #fff;
                transform: scale(1.1);
                transition: transform 0.2s ease-in-out;
            }

            .detalles img {
                width: 120%;
                display: flex;
                cursor: pointer;
            }

            .detalles-imagen {
                width: 80%;
                display: flex;
                align-items: center;
            }

            .detalles-info {
                width: 85%;
                margin-left: 5%;
                margin-top: 0%;
            }

            .detalles-info p {
                font-size: 1rem;
                margin-bottom: 0.5rem;
            }

            .detalles-info strong {
                font-size: 1.1rem;
            }

            .back-content {
                background: red;
                margin-bottom: 2rem;
                border: none;
                cursor: pointer;
                font-size: 1.5rem;
                color: #fff;
                border-radius: 0.5rem;
            }
        }

        @media screen and (min-width: 601px) and (max-width: 1000px) {
            .detalles-piloto {
                width: 80%;
                height: 30rem;
                background: #fff;
                justify-content: center;
                padding: 2rem;
                gap: 5rem;
                margin-top: 5rem;
            }

            .detalles {
                width: 95%;
                height: 31rem;
                list-style: none;
            }
            
            .detalles button:hover {
                background-color: #000;
                color: #fff;
                transform: scale(1.1);
                transition: transform 0.2s ease-in-out;
            }

            .detalles img {
                width: 100%;
                display: flex;
                cursor: pointer;
            }

            .detalles-imagen {
                width: 50%;
                display: flex;
                align-items: center;
            }

            .detalles-info {
                width: 50%;
                margin-left: 60%;
                margin-top: -52%;
            }

            .detalles-info p {
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
            }

            .detalles-info strong {
                font-size: 1.5rem;
            }

            .back-content {
                background: red;
                margin-bottom: 3rem;
                border: none;
                cursor: pointer;
                font-size: 1.5rem;
                color: #fff;
                border-radius: 0.5rem;
            }
        }
    `;
        container.classList.add("container");

        shadow.appendChild(style);
        shadow.appendChild(container);
        this.container = container;
        this.renderPilotos();
    }

    renderPilotos = () => {
        this.container.innerHTML = "";
        const listaPilotos = document.createElement("ul");
        listaPilotos.classList.add("lista-pilotos");

        pilotos.forEach(piloto => {
            const pilotoItem = document.createElement("li");
            pilotoItem.classList.add("pilotos");
            pilotoItem.setAttribute("data-id", piloto.id);
            pilotoItem.innerHTML = `
                <img src="${piloto.imagen}" alt="${piloto.nombre}">
                <p><strong>Nombre:</strong> ${piloto.nombre}</p>
                <p><strong>Equipo:</strong> ${piloto.equipo}</p>
            `;
            listaPilotos.appendChild(pilotoItem);
        });

        listaPilotos.addEventListener("click", (event) => {
            const item = event.target.closest(".pilotos");
            if (item) {
                const id = item.getAttribute("data-id");
                const pilotoSeleccionado = pilotos.find(p => p.id.toString() === id);
                this.renderDetails(pilotoSeleccionado);
            }
        });
        this.container.appendChild(listaPilotos);
    };

    renderDetails(piloto) {
        this.container.innerHTML = "";
    
        const detallesPiloto = document.createElement("div");
        detallesPiloto.classList.add("detalles-piloto");
    
        const detalles = document.createElement("ul");
        detalles.classList.add("detalles");
    
        const detalleItem = document.createElement("li");
        detalleItem.classList.add("detalles");
        detalleItem.innerHTML = `
            <button class="back-content">Volver</button>
            <div class="detalles-imagen">
                <img src="${piloto.imagen}" alt="${piloto.nombre}">
            </div>
            <div class="detalles-info">
                <p><strong>Nombre:</strong> ${piloto.nombre}</p>
                <p><strong>Equipo:</strong> ${piloto.equipo}</p>
                <p><strong>Rol:</strong> ${piloto.rol}</p>
                <p><strong>Nacimiento:</strong> ${piloto.nacimiento}</p>
                <p><strong>País:</strong> ${piloto.pais}</p>
            </div>
        `;
    
        detalles.appendChild(detalleItem);
        detallesPiloto.appendChild(detalles);
        this.container.appendChild(detallesPiloto);
    
        const botonVolver = this.shadowRoot.querySelector(".back-content");
        if (botonVolver) {
            botonVolver.addEventListener("click", () => this.renderPilotos());
        }
    }
}

customElements.define("pilotos-f1", PilotosF1);
export { PilotosF1 };