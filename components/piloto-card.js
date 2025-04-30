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
            width: 100%;
            height: 40rem;
            background: #fff;
            justify-content: center;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 5rem;
            margin-top: 5rem;
        }

        .detalles-ul {
            width: 90%;
            height: 100%;
            text-align: center;
        }

        .detalles {
            width: 90%;
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
            width: 100%;
            margin-top: -5rem;
            display: relative;
            cursor: pointer;
        }

        .detalles-imagen {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .detalles-info {
            width: 100%;
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
            border: none;
            cursor: pointer;
            font-size: 1.5rem;
            color: #fff;
            border-radius: 0.5rem;
        }

        @media screen and (max-width: 470px) {
            .detalles-ul {
                width: 90%;
                height: 100%;
                margin-left: -0.5rem;
            }
            
            .detalles img {
                margin-top: 2rem;
            }

            .back-content {
                margin-left: -16rem;
                margin-top: -1rem;
            }
        }

        @media screen and (max-width: 400px) {
            .detalles-ul {
                width: 90%;
                height: 100%;
                margin-left: -0.5rem;
            }
            
            .detalles img {
                margin-top: 2rem;
            }

            .back-content {
                margin-left: -14rem;
                margin-top: -1rem;
            }
        }

        @media screen and (max-width: 325px) {
            .back-content {
                margin-left: -11rem;
                margin-top: -1rem;
            }
        }

        @media screen and (min-width: 700px) {
            .detalles-piloto {
                width: 100%;
                height: 25rem;
                background: #fff;
                justify-content: center;
                padding: 2rem;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
                gap: 5rem;
                margin-top: 5rem;
            }

            .detalles{
                width: 100%;
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
                display: relative;
                cursor: pointer;
                margin-top: 1rem;
            }

            .detalles-imagen {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .detalles-info {
                width: 100%;
                margin-left: 25rem;
                margin-top: -20rem;
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
                margin-bottom: 1rem;
                margin-left: -13rem;
                border: none;
                cursor: pointer;
                font-size: 1.5rem;
                color: #fff;
                border-radius: 0.5rem;
            }

        @media screen and (min-width: 1200px) {
            .detalles-piloto {
                width: 70%;
                height: 30rem;
                background: #fff;
                justify-content: center;
                padding: 2rem;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
                gap: 5rem;
                margin-top: 5rem;
            }

            .detalles-info {
                width: 100%;
                margin-left: 25rem;
                margin-top: -22rem;
                line-height: 1.5;
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
        detalles.classList.add("detalles-ul");
    
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