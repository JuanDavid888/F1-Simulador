import { pilotos, equipos } from "../data/data.js";

function obtenerPilotosPorEquipo(nombreEquipo) {
  return pilotos
      .filter(piloto => piloto.equipo === nombreEquipo)
      .map(piloto => piloto.imagen); // Retorna solo las imágenes de los pilotos
}

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn-equipos");
    const menuOptions = document.getElementById("menuOptions-equipos");
  
    // Verificación de existencia de elementos
    if (!menuBtn || !menuOptions) {
      console.error("Error: No se encontró el botón 'Menú' o las opciones del menú.");
      return;
    }
  
    // Evento para mostrar/ocultar el menú
    menuBtn.addEventListener("click", () => {
      menuOptions.classList.toggle("hidden");
    });
  
    const addButton = document.querySelector(".crud-option.text-green-400");

  if (addButton) {
    addButton.addEventListener("click", () => {
      if (document.querySelector('#formTeam')) return; // Evita duplicados

      const formHtml = `
        <div id="modalTeamForm">
          <form id="formTeam">
            <h2>Agregar nuevo Equipo</h2>
            <input id="nombre" type="text" placeholder="Nombre del equipo" required>
            <input id="pais" type="text" placeholder="País" required>
            <input id="imagen" type="text" placeholder="URL de imagen" required>
            <button type="submit">Agregar</button>
          </form>
        </div>
        <style>
          #modalTeamForm {
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

          #formTeam {
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

          #formTeam input {
            padding: 0.6rem;
            border: 2px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
          }

          #formTeam button {
            padding: 0.7rem;
            background: crimson;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-weight: bold;
            cursor: pointer;
          }

          #formTeam button:hover {
            background: darkred;
          }

          #formTeam h2 {
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

      const form = document.querySelector('#formTeam');

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nuevoEquipo = {
          id: Date.now(),
          nombre: form.nombre.value.trim(),
          pais: form.pais.value.trim(),
          imagen: form.imagen.value.trim(),
          pilotos: obtenerPilotosPorEquipo(form.nombre.value.trim()) // Asigna automáticamente los pilotos
        };

        if (
          !nuevoEquipo.nombre ||
          !nuevoEquipo.pais ||
          !nuevoEquipo.imagen
        ) {
          alert("Por favor, rellena todos los campos.");
          return;
        }

          equipos.push(nuevoEquipo);
          alert("Equipo agregado correctamente.");

          const componenteEquipos = document.querySelector("equipo-card");
          if (componenteEquipos) {
              componenteEquipos.updateEquipos(equipos);
          }

        form.remove(); // Limpia el formulario
      });
    });
  } 
});