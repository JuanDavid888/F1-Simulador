import { vehiculos } from '../data/data.js';

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn-vehiculos");
    const menuOptions = document.getElementById("menuOptions-vehiculos");
  
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
      if (document.querySelector('#formVehicle')) return; // Evita duplicados

      const formHtml = `
        <div id="modalVehicleForm">
          <form id="formVehicle">
            <h2>Agregar nuevo Vehículo</h2>
            <input id="equipo" type="text" placeholder="Equipo" required>
            <input id="motor" type="text" placeholder="Motor" required>
            <input id="modelo" type="text" placeholder="Modelo" required>
            <input id="velocidadMax" type="text" placeholder="Velocidad máxima (km/h)" required>
            <input id="aceleracion" type="text" placeholder="Aceleración 0-100 (s)" required>
            <input id="imagen" type="text" placeholder="URL de la imagen" required>
            <button type="submit">Agregar</button>
          </form>
        </div>
        <style>
          #modalVehicleForm {
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

          #formVehicle {
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

          #formVehicle input {
            padding: 0.6rem;
            border: 2px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
          }

          #formVehicle button {
            padding: 0.7rem;
            background: crimson;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-weight: bold;
            cursor: pointer;
          }

          #formVehicle button:hover {
            background: darkred;
          }

          #formVehicle h2 {
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

      const form = document.querySelector('#formVehicle');

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nuevoVehiculo = {
          id: Date.now(),
          equipo: form.equipo.value.trim(),
          motor: form.motor.value.trim(),
          modelo: form.modelo.value.trim(),
          velocidad_maxima_kmh: parseFloat(form.velocidadMax.value),
          aceleracion_0_100: parseFloat(form.aceleracion.value),
          imagen: form.imagen.value.trim(),
        };

        if (
          !nuevoVehiculo.equipo ||
          !nuevoVehiculo.motor ||
          !nuevoVehiculo.modelo ||
          !nuevoVehiculo.velocidad_maxima_kmh ||
          !nuevoVehiculo.aceleracion_0_100 ||
          !nuevoVehiculo.imagen
        ) {
          alert("Por favor, rellena todos los campos.");
          return;
        }

          vehiculos.push(nuevoVehiculo);
          alert("Vehículo agregado correctamente.");

          const componenteVehiculos = document.querySelector("vehiculo-card");
          if (componenteVehiculos) {
              componenteVehiculos.updateVehiculos(vehiculos);
          }

        form.remove(); // Limpia el formulario
      });
    });
  } 
});