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

    const modalStyles = `
    <style>
      #modalPilotForm {
        position: fixed;
        top: 0; left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      }

      .modal-content {
        background: #fff;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 90%;
        max-width: 500px; /* Aumentando el ancho del formulario */
        position: relative;
        font-family: 'Segoe UI', sans-serif;
      }

      #formPilot h2 {
        text-align: center;
        font-size: 1.5rem;
        color: #111;
        margin-bottom: 0.5rem;
      }

      #formPilot input {
        padding: 0.75rem;
        border: 1.5px solid #ccc;
        border-radius: 0.5rem;
        font-size: 1rem;
        transition: border 0.2s ease;
        width: 100%; /* Haciendo los recuadros más largos */
        color: #000; /* Cambiando el color del texto a negro */
      }

      #formPilot input:focus {
        outline: none;
        border-color: #e50914;
      }

      #formPilot button {
        padding: 0.8rem;
        background: #e50914;
        color: white;
        border: none;
        border-radius: 0.5rem;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.3s ease;
        display: block;
        margin: 1rem auto 0; /* Centrando el botón */
        width: 100%; /* Opcional, para que el botón tenga el mismo ancho que los inputs */
      }

      #formPilot button:hover {
        background: #c20710;
      }

      .close-modal {
        position: absolute;
        top: 12px;
        right: 16px;
        background: none;
        border: none;
        font-size: 1.5rem;
        font-weight: bold;
        color: #aaa;
        cursor: pointer;
      }

      .close-modal:hover {
        color: #333;
      }

      input.invalid {
        border-color: red;
      }
    </style>
  `;

  const addButton = document.querySelector(".crud-option.text-green-400");

  if (addButton) {
    addButton.addEventListener("click", () => {
      if (document.querySelector('#formPilot')) return;

      const formHtml = `
        <div id="modalPilotForm">
          <div class="modal-content">
            <button class="close-modal" title="Cerrar">✕</button>
            <form id="formPilot">
              <h2>Agregar nuevo piloto</h2>
              <input id="nombre" type="text" placeholder="Nombre del piloto" required>
              <input id="equipo" type="text" placeholder="Equipo" required>
              <input id="rol" type="text" placeholder="Rol ('líder' o 'escudero')" required>
              <input id="nacimiento" type="date" required>
              <input id="pais" type="text" placeholder="País" required>
              <input id="imagen" type="text" placeholder="URL de la imagen" required>
              <button type="submit">Agregar</button>
            </form>
          </div>
        </div>
        ${modalStyles}
      `;

      addButton.insertAdjacentHTML("afterend", formHtml);

      const form = document.querySelector('#formPilot');

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nuevoPiloto = {
          id: pilotos.length + 1,
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

        document.getElementById("modalPilotForm").remove();
      });

      document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("modalPilotForm").remove();
      });

      document.getElementById("modalPilotForm").addEventListener("click", (e) => {
        if (e.target.id === "modalPilotForm") {
          e.target.remove();
        }
      });
    });
  }

  const editButton = document.querySelector(".crud-option.text-yellow-400");
  if (editButton) {
    editButton.addEventListener("click", () => {
      if (document.querySelector('#formPilot')) return;

      const formHtml = `
        <div id="modalPilotForm">
          <div class="modal-content">
            <button class="close-modal" title="Cerrar">✕</button>
            <form id="formPilot">
              <h2>Editar piloto</h2>
              <input id="id" type="number" placeholder="ID del piloto a editar" required>
              <input id="nombre" type="text" placeholder="Nombre del piloto">
              <input id="equipo" type="text" placeholder="Equipo">
              <input id="rol" type="text" placeholder="Rol ('líder' o 'escudero')">
              <input id="nacimiento" type="date">
              <input id="pais" type="text" placeholder="País">
              <input id="imagen" type="text" placeholder="URL de la imagen">
              <button type="submit">Editar</button>
            </form>
          </div>
        </div>
        ${modalStyles}
      `;

      editButton.insertAdjacentHTML("afterend", formHtml);

      const form = document.querySelector('#formPilot');

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const idIngresado = parseInt(form.id.value, 10);
        const pilotoExistente = pilotos.find(p => p.id === idIngresado);

        if (!pilotoExistente) {
          alert("El ID ingresado no corresponde a ningún piloto existente.");
          form.id.classList.add("invalid");
          return;
        } else {
          form.id.classList.remove("invalid");
        }

        const nuevoRol = form.rol.value.trim().toLowerCase();
        const rolValido = ["líder", "escudero"];
        if (form.rol.value && !rolValido.includes(nuevoRol)) {
          alert("El rol debe ser 'líder' o 'escudero'.");
        }
        else if (form.rol.value === ' ') {
          //Dejar el que estaba antes
          form.rol.value = pilotoExistente.rol;
        }

        if (form.nombre.value.trim()) pilotoExistente.nombre = form.nombre.value.trim();
        if (form.equipo.value.trim()) pilotoExistente.equipo = form.equipo.value.trim();
        if (form.rol.value.trim()) pilotoExistente.rol = nuevoRol;
        if (form.nacimiento.value) pilotoExistente.nacimiento = form.nacimiento.value;
        if (form.pais.value.trim()) pilotoExistente.pais = form.pais.value.trim();
        if (form.imagen.value.trim()) pilotoExistente.imagen = form.imagen.value.trim();

        alert("Piloto editado correctamente.");

        const componentePilotos = document.querySelector("piloto-card");
        if (componentePilotos) {
          componentePilotos.updatePilotos(pilotos);
        }

        document.getElementById("modalPilotForm").remove();
      });

      document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("modalPilotForm").remove();
      });

      document.getElementById("modalPilotForm").addEventListener("click", (e) => {
        if (e.target.id === "modalPilotForm") {
          e.target.remove();
        }
      });
    });
  }
});
