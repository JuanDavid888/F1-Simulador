import { pilotos, equipos, circuitos, vehiculos } from '../data/data.js'

class EquiposF1 extends HTMLElement {
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

        .lista-equipos {
            background: #fff;
            justify-content: center;
            padding: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
            gap: 5rem;
            margin-top: 2.5rem;
        }

        .equipos {
            width: 100%;
            list-style: none;
        }
        
        .equipos:hover {
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
        }

        .equipos p {
            margin-bottom: 0.5rem;
        }

        .equipos img {
            width: 100%;
            display: relative;
            cursor: pointer;
        }

        .detalles-equipo {
            width: 89%;
            height: 45rem;
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

        .imagen-piloto1 {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .imagen-piloto1 strong {
            font-size: 1.5rem;
        }

        .imagen-piloto1 img {
            width: 100%;
            display: relative;
            cursor: pointer;
            margin-bottom: 1.5rem;
        }

        .imagen-piloto2 {
            width: 100%;
            margin-left: 0%;
            margin-top: 0%;
            text-align: center;
        }

        .imagen-piloto2 img {
            width: 100%;
            display: relative;
            cursor: pointer;
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

        @media screen and (min-width: 1200px) {
            .container {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 2rem 0;
                gap: 1rem;
            }
            .lista-equipos {
                background: #fff;
                justify-content: center;
                padding: 2rem;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
                gap: 5rem;
                margin-top: 2.5rem;
            }

            .equipos {
                width: 100%;
                list-style: none;
            }
            
            .equipos:hover {
                transform: scale(1.1);
                transition: transform 0.2s ease-in-out;
            }

            .equipos p {
                margin-bottom: 0.5rem;
            }

            .equipos img {
                width: 100%;
                display: relative;
                cursor: pointer;
            }

            .detalles-equipo {
                width: 40%;
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

            .imagen-piloto1 {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .imagen-piloto1 img {
                width: 100%;
                display: relative;
                cursor: pointer;
            }

            .imagen-piloto2 {
                width: 100%;
                margin-left: 22rem;
                margin-top: -23.75rem;
                text-align: center;
            }

            .imagen-piloto2 img {
                width: 100%;
                display: relative;
                cursor: pointer;
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
            .detalles-equipo {
            width: 80%;
            height: 40rem;
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

        .imagen-piloto1 {
            width: 55%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: -2%;
        }

        .imagen-piloto1 p {
            font-size: 2rem;
            font-weight: bold;
            margin-left: 110%;
            margin-bottom: 4rem;
        }


        .imagen-piloto1 img {
            width: 100%;
            display: relative;
            cursor: pointer;
            margin-bottom: 1.5rem;
        }

        .imagen-piloto2 {
            width: 55%;
            margin-left: 59%;
            margin-top: -59.60%;
            text-align: center;
        }

        .imagen-piloto2 img {
            width: 100%;
            display: relative;
            cursor: pointer;
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
    `;
        container.classList.add("container");

        shadow.appendChild(style);
        shadow.appendChild(container);
        this.container = container;
        this.renderEquipos();
    }

    renderEquipos = () => {
        this.container.innerHTML = "";
        const listaEquipos = document.createElement("ul");
        listaEquipos.classList.add("lista-equipos");

        equipos.forEach(equipo => {
            const equipoItem = document.createElement("li");
            equipoItem.classList.add("equipos");
            equipoItem.setAttribute("data-id", equipo.id);
            equipoItem.innerHTML = `
                <img src="${equipo.imagen}" alt="${equipo.nombre}">
                <p><strong>Nombre:</strong> ${equipo.nombre}</p>
                <p><strong>Pais:</strong> ${equipo.pais}</p>
            `;
            listaEquipos.appendChild(equipoItem);
        });

        listaEquipos.addEventListener("click", (event) => {
            const item = event.target.closest(".equipos");
            if (item) {
                const id = item.getAttribute("data-id");
                const equipoSeleccionado = equipos.find(e => e.id.toString() === id);
                this.renderDetails(equipoSeleccionado);
            }
        });
        this.container.appendChild(listaEquipos);
    };

    renderDetails(equipo) {
        this.container.innerHTML = "";
    
        const detallesEquipo = document.createElement("div");
        detallesEquipo.classList.add("detalles-equipo");
    
        const detalles = document.createElement("ul");
        detalles.classList.add("detalles");
    
        const detalleItem = document.createElement("li");
        detalleItem.classList.add("detalles");
        detalleItem.innerHTML = `
            <button class="back-content">Volver</button>
            <div class="imagen-piloto1">
                <p>Pilotos:</p>
                <img src="${equipo.pilotos[0]}" alt="${equipo.nombre}">
            </div>
            <div class="imagen-piloto2">
                <img src="${equipo.pilotos[1]}" alt="${equipo.nombre}">
            </div>
        `;
    
        detalles.appendChild(detalleItem);
        detallesEquipo.appendChild(detalles);
        this.container.appendChild(detallesEquipo);
    
        const botonVolver = this.shadowRoot.querySelector(".back-content");
        if (botonVolver) {
            botonVolver.addEventListener("click", () => this.renderEquipos());
        }
    }

}

customElements.define("equipos-f1", EquiposF1);
export { EquiposF1 };