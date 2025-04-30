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
            grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
            gap: 3rem;
            margin-top: 3rem;
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

        .detalles-circuito {
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
            margin-top: -32%;
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
                margin-top: -0.5rem;
            }

            .detalles-circuito {
                width: 89%;
                height: 33rem;
                background: #fff;
                justify-content: center;
                padding: 2rem;
                gap: 5rem;
                margin-top: 3rem;
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
                margin-top: 2.5rem;
            }    
        
            .detalles-circuito {
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
                margin-top:  -39%;
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
                margin-bottom: 4rem;
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
        this.renderCircuitos();
    }

    renderCircuitos = () => {
        this.container.innerHTML = "";
        const listaCircuitos = document.createElement("ul");
        listaCircuitos.classList.add("lista-circuitos");

        circuitos.forEach(pista => {
            const circuitoItem = document.createElement("li");
            circuitoItem.classList.add("circuitos");
            circuitoItem.setAttribute("data-id", pista.id);
            circuitoItem.innerHTML = `
                <img src="${pista.imagen}" alt="${pista.nombre}">
                <p><strong>Nombre:</strong> ${pista.nombre}</p>
                <p><strong>Pais:</strong> ${pista.pais}</p>
            `;
            listaCircuitos.appendChild(circuitoItem);
        });

        listaCircuitos.addEventListener("click", (event) => {
            const item = event.target.closest(".circuitos");
            if (item) {
                const id = item.getAttribute("data-id");
                const circuitoSeleccionado = circuitos.find(c => c.id.toString() === id);
                this.renderDetails(circuitoSeleccionado);
            }
        });
        this.container.appendChild(listaCircuitos);
    };

    renderDetails(circuitos) {
        this.container.innerHTML = "";
    
        const detallesCircuito = document.createElement("div");
        detallesCircuito.classList.add("detalles-circuito");
    
        const detalles = document.createElement("ul");
        detalles.classList.add("detalles");
    
        const detalleItem = document.createElement("li");
        detalleItem.classList.add("detalles");
        detalleItem.innerHTML = `
            <button class="back-content">Volver</button>
            <div class="detalles-imagen">
                <img src="${circuitos.imagen}" alt="${circuitos.nombre}">
            </div>
            <div class="detalles-info">
                <p><strong>longitud:</strong> ${circuitos.longitud_km}</p>
                <p><strong>Vueltas:</strong> ${circuitos.vueltas}</p>
                <p><strong>Descripción:</strong> ${circuitos.descripcion}</p>
            </div>
        `;
    
        detalles.appendChild(detalleItem);
        detallesCircuito.appendChild(detalles);
        this.container.appendChild(detallesCircuito);
    
        const botonVolver = this.shadowRoot.querySelector(".back-content");
        if (botonVolver) {
            botonVolver.addEventListener("click", () => this.renderCircuitos());
        }
    }

}

customElements.define("circuitos-f1", CircuitosF1);
export { CircuitosF1 };