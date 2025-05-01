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
            margin-top: 2.5rem;
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

        .detalles-vehiculo {
            width: 89%;
            height: 30rem;
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

        .back-content {
            background: red;
            margin-bottom: 2rem;
            border: none;
            cursor: pointer;
            font-size: 1.5rem;
            color: #fff;
            border-radius: 0.5rem;
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
                padding: 4rem;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
                gap: 3rem;
                margin-top: 2.5rem;
            }

            .detalles-vehiculo {
                width: 60%;
                background: #fff;
                justify-content: center;
                padding: 2rem;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
                gap: 5rem;
                margin-top: 5rem;
            }

            .detalles {
                width: 100%;
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
                display: relative;
                cursor: pointer;
            }

            .detalles-imagen {
                width: 100%;
                margin-top: 4rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .detalles-info {
                width: 70%;
                margin-left: 125%;
                margin-top: -72%;
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
                border: none;
                cursor: pointer;
                font-size: 1.5rem;
                color: #fff;
                border-radius: 0.5rem;
            }
        }   
        
        @media screen and (min-width: 601px) and (max-width: 1000px) {
            .detalles-vehiculo {
                width: 80%;
                height: 30rem;
                background: #fff;
                justify-content: center;
                padding: 1rem;
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
                width: 110%;
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
                margin-left: 62%;
                margin-top: -37%;
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
        this.renderVehiculos();
    }

    renderVehiculos = () => {
        this.container.innerHTML = "";
        const listaVehiculos = document.createElement("ul");
        listaVehiculos.classList.add("lista-vehiculos");

        vehiculos.forEach(vehiculo => {
            const vehiculoItem = document.createElement("li");
            vehiculoItem.classList.add("vehiculos");
            vehiculoItem.setAttribute("data-id", vehiculo.id);
            vehiculoItem.innerHTML = `
                <img src="${vehiculo.imagen}" alt="${vehiculo.equipo}">
                <p><strong>Equipo:</strong> ${vehiculo.equipo}</p>
                <p><strong>Motor:</strong> ${vehiculo.motor}</p>
            `;
            listaVehiculos.appendChild(vehiculoItem);
        });

        listaVehiculos.addEventListener("click", (event) => {
            const item = event.target.closest(".vehiculos");
            if (item) {
                const id = item.getAttribute("data-id");
                const vehiculoSeleccionado = vehiculos.find(v => v.id.toString() === id);
                this.renderDetails(vehiculoSeleccionado);
            }
        });
        this.container.appendChild(listaVehiculos);
    };

    renderDetails(vehiculo) {
        this.container.innerHTML = "";
    
        const detallesVehiculo = document.createElement("div");
        detallesVehiculo.classList.add("detalles-vehiculo");
    
        const detalles = document.createElement("ul");
        detalles.classList.add("detalles");
    
        const detalleItem = document.createElement("li");
        detalleItem.classList.add("detalles");
        detalleItem.innerHTML = `
            <button class="back-content">Volver</button>
            <div class="detalles-imagen">
                <img src="${vehiculo.imagen}" alt="${vehiculo.nombre}">
            </div>
            <div class="detalles-info">
                <p><strong>Equipo:</strong> ${vehiculo.equipo}</p>
                <p><strong>Motor:</strong> ${vehiculo.motor}</p>
                <p><strong>Modelo:</strong> ${vehiculo.modelo}</p>
                <p><strong>V-max:</strong> ${vehiculo.velocidad_maxima_kmh} km/h</p>
                <p><strong>Aceleración 0-100:</strong> ${vehiculo.aceleracion_0_100} s</p>
            </div>
        `;
    
        detalles.appendChild(detalleItem);
        detallesVehiculo.appendChild(detalles);
        this.container.appendChild(detallesVehiculo);
    
        const botonVolver = this.shadowRoot.querySelector(".back-content");
        if (botonVolver) {
            botonVolver.addEventListener("click", () => this.renderVehiculos());
        }
    }

}

customElements.define("vehiculos-f1", VehiculosF1);
export { VehiculosF1 };
