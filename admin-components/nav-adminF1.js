class NavAdminF1 extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        const style = document.createElement("style");
        style.innerHTML = `
        .nav-container {
            display: flex;
            align-items: center;
            width: 100%;
        }

        .nav-admin-f1 {
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
        }

        ul {
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            list-style: none;
            padding: 1rem;
            margin: 0;
        }
        
        .boton-nav {
            width: 8rem;
            height: 3rem;
            border: none;
            border-radius: 0.5rem;
            color: white;
            font-size: 1rem;
            font-weight: bold;
            background-color: rgba(255, 55, 55, 0.8);
            transition: all 0.3s ease-in-out;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
        }

        .boton-nav:hover {
            transform: scale(1.1);
            background-color: #fff;
            color: #ff3737;
            box-shadow: 0px 4px 12px rgba(255, 55, 55, 0.6);
        }

        @media screen and (max-width: 700px) {
            .nav-admin-f1 {
                flex-wrap: nowrap;
                overflow-x: auto;
            }

            .boton-nav {
                width: 7rem;
                height: 2.5rem;
                font-size: 0.9rem;
            }
        }
        `;

        const nav = document.createElement("nav");
        nav.classList.add("nav-admin-f1");
        nav.innerHTML = `
            <div class="nav-container">
                <ul>
                    <li><button onclick="window.location.href='../paginas2/home-admin.html'" class="boton-nav">Inicio</button></li>
                    <li><button onclick="window.location.href='../paginas2/pilotos-admin.html'" class="boton-nav">Pilotos</button></li>
                    <li><button onclick="window.location.href='../paginas2/equipos-admin.html'" class="boton-nav">Equipos</button></li>
                    <li><button onclick="window.location.href='../paginas2/circuitos-admin.html'" class="boton-nav">Circuitos</button></li>
                    <li><button onclick="window.location.href='../paginas2/vehiculos-admin.html'" class="boton-nav">Vehículos</button></li>
                    <li><button onclick="window.location.href='../paginas2/simulacion-admin.html'" class="boton-nav">Simulación</button>
                    </li>
                </ul>
            </div>
        `;

        // Agregar elementos al shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(nav);
    }
}

customElements.define("nav-admin-f1", NavAdminF1);
export { NavAdminF1 };
