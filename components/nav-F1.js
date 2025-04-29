class NavF1 extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        // Crear el estilo
        const style = document.createElement("style");
        style.innerHTML = `
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
        }

        .nav-f1 {
            display: flex;
            overflow-x: auto;
        }

        ul {
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .boton-nav {
            width: 8rem;
            height: 2.5rem;
            border: none;
            border-radius: 0.5rem;
            color: #000;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
        }

        .boton-nav:hover {
            transform: scale(1.1);
            background-color: #ff3737;
            color: #fff;
            transition: transform 0.2s ease-in-out;
        }

        @media screen and (min-width: 700px) {
            .nav-f1 {
                display: flex;
                overflow-x: auto;
                justify-content: center;
            }
        }
        `;

        // Crear la estructura HTML
        const nav = document.createElement("nav");
        nav.classList.add("nav-f1");
        nav.innerHTML = `
            <div class="container">
                <ul>
                    <li><button onclick="window.location.href='../paginas/home.html'" class="boton-nav">Inicio</button></li>
                    <li><button onclick="window.location.href='../paginas/pilotos.html'" class="boton-nav">Pilotos</button></li>
                    <li><button onclick="window.location.href='../paginas/equipos.html'" class="boton-nav">Equipos</button></li>
                    <li><button onclick="window.location.href='../paginas/circuitos.html'" class="boton-nav">Circuitos</button></li>
                    <li><button onclick="window.location.href='../paginas/vehiculos.html'" class="boton-nav">Vehiculos</button></li>
                </ul>
            </div>
        `;

        // Agregar el estilo y el nav al shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(nav);
    }
}

customElements.define("nav-f1", NavF1);
export { NavF1 };


