import { pilotos, equipos } from "../data/data.js";

function obtenerPilotosPorEquipo(nombreEquipo) {
  const pilotosDelEquipo = pilotos
      .filter(piloto => piloto.equipo === nombreEquipo)
      .map(piloto => piloto.imagen);

  const imagenPorDefecto = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png";
  
  return pilotosDelEquipo.length ? pilotosDelEquipo : [imagenPorDefecto, imagenPorDefecto]; // Imagen por defecto si no hay pilotos
}

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn-equipos");
  const menuOptions = document.getElementById("menuOptions-equipos");

  if (!menuBtn || !menuOptions) {
    console.error("No se encontró el botón o el menú de opciones.");
    return;
  }

  menuBtn.addEventListener("click", () => {
    menuOptions.classList.toggle("hidden");
  });

  const modalStyles = `
  <style>
    #modalTeamForm {
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
      max-width: 500px;
      position: relative;
      font-family: 'Segoe UI', sans-serif;
    }

    #formTeam h2 {
      text-align: center;
      font-size: 1.5rem;
      color: #111;
      margin-bottom: 0.5rem;
    }

    #formTeam input {
      padding: 0.75rem;
      border: 1.5px solid #ccc;
      border-radius: 0.5rem;
      font-size: 1rem;
      transition: border 0.2s ease;
      width: 100%;
      color: #000;
    }

    #formTeam button {
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
      margin: 1rem auto 0;
      width: 100%;
    }

    #formTeam button:hover {
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

  document.head.insertAdjacentHTML("beforeend", modalStyles);

  const addButton = document.querySelector(".crud-option.text-green-400");

  if (addButton) {
    addButton.addEventListener("click", () => {
      if (document.querySelector('#formTeam')) return;

      const formHtml = `
        <div id="modalTeamForm">
          <div class="modal-content">
            <button class="close-modal" title="Cerrar">✕</button>
            <form id="formTeam">
              <h2>Agregar nuevo equipo</h2>
              <input id="nombre" type="text" placeholder="Nombre del equipo" required>
              <input id="pais" type="text" placeholder="País" required>
              <input id="imagen" type="text" placeholder="URL de imagen" required>
              <button type="submit">Agregar</button>
            </form>
          </div>
        </div>
      `;

      addButton.insertAdjacentHTML("afterend", formHtml);

      const form = document.querySelector('#formTeam');

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nuevoEquipo = {
          id: equipos.length + 1,
          nombre: form.nombre.value.trim(),
          pais: form.pais.value.trim(),
          imagen: form.imagen.value.trim(),
          pilotos: obtenerPilotosPorEquipo(form.nombre.value.trim())
        };

        if (
          !nuevoEquipo.nombre ||
          !nuevoEquipo.pais ||
          !nuevoEquipo.imagen ||
          !nuevoEquipo.pilotos
        ) {
          alert("Por favor, rellena todos los campos.");
        }

        equipos.push(nuevoEquipo);
        alert("Equipo agregado correctamente.");

        const componenteEquipos = document.querySelector("equipo-card");
        if (componenteEquipos) {
          componenteEquipos.updateEquipos(equipos);
        }

        document.getElementById("modalTeamForm").remove();
      });
    });
  }

  const editButton = document.querySelector(".crud-option.text-yellow-400");

  if (editButton) {
    editButton.addEventListener("click", () => {
      if (document.querySelector('#formTeam')) return;

      const formHtml = `
        <div id="modalTeamForm">
          <div class="modal-content">
            <button class="close-modal" title="Cerrar">✕</button>
            <form id="formTeam">
              <h2>Editar equipo</h2>
              <input id="id" type="number" placeholder="ID del equipo a editar" required min="1">
              <input id="nombre" type="text" placeholder="Nombre del equipo">
              <input id="pais" type="text" placeholder="País">
              <input id="imagen" type="text" placeholder="URL de imagen">
              <button type="submit">Editar</button>
            </form>
          </div>
        </div>
      `;

      editButton.insertAdjacentHTML("afterend", formHtml);

      const form = document.querySelector('#formTeam');

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const idIngresado = parseInt(form.id.value, 10);

        if (isNaN(idIngresado) || idIngresado < 1) {
          alert("El ID debe ser un número mayor o igual a 1.");
          form.id.classList.add("invalid");
          return;
        } else {
          form.id.classList.remove("invalid");
        }

        const equipoExistente = equipos.find(e => e.id === idIngresado);

        if (!equipoExistente) {
          alert("El ID ingresado no corresponde a ningún equipo existente.");
          form.id.classList.add("invalid");
          return;
        } else {
          form.id.classList.remove("invalid");
        }

        if (form.nombre.value.trim()) equipoExistente.nombre = form.nombre.value.trim();
        if (form.pais.value.trim()) equipoExistente.pais = form.pais.value.trim();
        if (form.imagen.value.trim()) equipoExistente.imagen = form.imagen.value.trim();

        alert("Equipo editado correctamente.");

        const componenteEquipos = document.querySelector("equipo-card");
        if (componenteEquipos) {
          componenteEquipos.updateEquipos(equipos);
        }

        document.getElementById("modalTeamForm").remove();
      });

      document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("modalTeamForm").remove();
      });

      document.getElementById("modalTeamForm").addEventListener("click", (e) => {
        if (e.target.id === "modalTeamForm") {
          e.target.remove();
        }
      });
    });
  }
});