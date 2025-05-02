import { circuitos } from "../data/data.js";

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn-circuitos");
    const menuOptions = document.getElementById("menuOptions-circuitos");
  
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
      if (document.querySelector('#formPista')) return; // Evita duplicados

      const formHtml = `
        <div id="modalPistaForm">
          <form id="formPista">
            <h2>Agregar nueva Pista</h2>
            <input id="nombre" type="text" placeholder="Nombre de la pista" required>
            <input id="pais" type="text" placeholder="País" required>
            <input id="longitud" type="number" step="any" placeholder="Longitud (km)" required>
            <input id="vueltas" type="number" step="any" placeholder="Vueltas" required>
            <input id="descripcion" type="text" placeholder="Descripción" required>
            <input id="imagen" type="text" placeholder="URL de la imagen" required>
            <button type="submit">Agregar</button>
          </form>
        </div>
        <style>
          #modalPistaForm {
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

          #formPista {
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

          #formPista input {
            padding: 0.6rem;
            border: 2px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
          }

          #formPista button {
            padding: 0.7rem;
            background: crimson;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-weight: bold;
            cursor: pointer;
          }

          #formPista button:hover {
            background: darkred;
          }

          #formPista h2 {
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

      const form = document.querySelector('#formPista');

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nuevaPista = {
          id: Date.now(),
          nombre: form.nombre.value.trim(),
          pais: form.pais.value.trim(),
          longitud_km: parseFloat(form.longitud.value),
          vueltas: parseFloat(form.vueltas.value),
          descripcion: form.descripcion.value.trim(),
          imagen: form.imagen.value.trim()
        };

        if (
          !nuevaPista.nombre ||
          !nuevaPista.pais ||
          !nuevaPista.longitud_km ||
          !nuevaPista.vueltas ||
          !nuevaPista.descripcion ||
          !nuevaPista.imagen
        ) {
          alert("Por favor, rellena todos los campos.");
          return;
        }

          circuitos.push(nuevaPista);
          alert("Pista agregada correctamente.");

          const componentePista = document.querySelector("pista-card");
          if (componentePista) {
              componentePista.updateCircuitos(circuitos);
          }

        form.remove(); // Limpia el formulario
      });
    });
  } 
});