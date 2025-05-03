class NavF1 extends HTMLElement {
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

        .nav-f1 {
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
            .nav-f1 {
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
        nav.classList.add("nav-f1");
        nav.innerHTML = `
            <div class="nav-container">
                <ul>
                    <li><button onclick="window.location.href='../paginas/home.html'" class="boton-nav">Inicio</button></li>
                    <li><button onclick="window.location.href='../paginas/pilotos.html'" class="boton-nav">Pilotos</button></li>
                    <li><button onclick="window.location.href='../paginas/equipos.html'" class="boton-nav">Equipos</button></li>
                    <li><button onclick="window.location.href='../paginas/circuitos.html'" class="boton-nav">Circuitos</button></li>
                    <li><button onclick="window.location.href='../paginas/vehiculos.html'" class="boton-nav">Vehículos</button></li>
                    </li>
                </ul>
            </div>
        `;
        shadow.appendChild(style);
        shadow.appendChild(nav);
    }
}

customElements.define("nav-f1", NavF1);
export { NavF1 };
