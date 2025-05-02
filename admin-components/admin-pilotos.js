import { pilotos } from '../data/data.js';

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn-pilotos");
  const menuOptions = document.getElementById("menuOptions-pilotos");

  if (!menuBtn || !menuOptions) {
    console.error("No se encontró el botón o el menú de opciones.");
    return;
  }

  menuBtn.addEventListener("click", () => {
    menuOptions.classList.toggle("hidden");
  });

  const addButton = document.querySelector(".crud-option.text-green-400");

  if (addButton) {
    addButton.addEventListener("click", () => {
      if (document.querySelector('#formPilot')) return; // Evita duplicados

      const formHtml = `
        <div id="modalPilotForm">
          <form id="formPilot">
            <h2>Agregar nuevo piloto</h2>
            <input id="nombre" type="text" placeholder="Nombre del piloto" required>
            <input id="equipo" type="text" placeholder="Equipo" required>
            <input id="rol" type="text" placeholder="Rol ('líder' o 'escudero')" required>
            <input id="nacimiento" type="date" required>
            <input id="pais" type="text" placeholder="País" required>
            <input id="imagen" type="text" placeholder="URL de imagen" required>
            <button type="submit">Agregar</button>
          </form>
        </div>
        <style>
          #modalPilotForm {
            position: fixed;
            top: 0; left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          }

          #formPilot {
            background: #fff;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0,0,0,0.3);
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            max-width: 400px;
          }

          #formPilot input {
            padding: 0.6rem;
            border: 2px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
          }

          #formPilot button {
            padding: 0.7rem;
            background: crimson;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-weight: bold;
            cursor: pointer;
          }

          #formPilot button:hover {
            background: darkred;
          }

          #formPilot h2 {
            text-align: center;
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
            color: #333;
          }

          input.invalid {
            border-color: red;
          }
        </style>
      `;

      addButton.insertAdjacentHTML("afterend", formHtml);

      const form = document.querySelector('#formPilot');

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nuevoPiloto = {
          id: Date.now(),
          nombre: form.nombre.value.trim(),
          equipo: form.equipo.value.trim(),
          rol: form.rol.value.trim(),
          nacimiento: form.nacimiento.value,
          pais: form.pais.value.trim(),
          imagen: form.imagen.value.trim()
        };

        const rolValido = ["líder", "escudero"];
        if (!rolValido.includes(nuevoPiloto.rol.toLowerCase())) {
          alert("El rol debe ser 'líder' o 'escudero'.");
          return;
        }

        if (
          !nuevoPiloto.nombre ||
          !nuevoPiloto.equipo ||
          !nuevoPiloto.rol ||
          !nuevoPiloto.nacimiento ||
          !nuevoPiloto.pais ||
          !nuevoPiloto.imagen
        ) {
          alert("Por favor, rellena todos los campos.");
          return;
        }

          pilotos.push(nuevoPiloto);
          alert("Piloto agregado correctamente.");

          const componentePilotos = document.querySelector("piloto-card");
          if (componentePilotos) {
              componentePilotos.updatePilotos(pilotos);
          }

        form.remove(); // Limpia el formulario
      });
    });
  } 
});
