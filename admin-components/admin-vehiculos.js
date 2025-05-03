import { vehiculos } from '../data/data.js';

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn-vehiculos");
  const menuOptions = document.getElementById("menuOptions-vehiculos");

  if (!menuBtn || !menuOptions) {
    console.error("No se encontró el botón o el menú de opciones.");
    return;
  }

  menuBtn.addEventListener("click", () => {
    menuOptions.classList.toggle("hidden");
  });

  const modalStyles = `
  <style>
    #modalVehicleForm {
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

    #formVehicle h2 {
      text-align: center;
      font-size: 1.5rem;
      color: #111;
      margin-bottom: 0.5rem;
    }

    #formVehicle input {
      padding: 0.75rem;
      border: 1.5px solid #ccc;
      border-radius: 0.5rem;
      font-size: 1rem;
      transition: border 0.2s ease;
      width: 100%;
      color: #000;
    }

    #formVehicle button {
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

    #formVehicle button:hover {
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
      if (document.querySelector('#formVehicle')) return;

      const formHtml = `
        <div id="modalVehicleForm">
          <div class="modal-content">
            <button class="close-modal" title="Cerrar">✕</button>
            <form id="formVehicle">
              <h2>Agregar nuevo vehículo</h2>
              <input id="equipo" type="text" placeholder="Equipo" required>
              <input id="motor" type="text" placeholder="Motor" required>
              <input id="modelo" type="text" placeholder="Modelo" required>
              <input id="velocidadMax" type="number" step="any" placeholder="Velocidad máxima (km/h)" required>
              <input id="aceleracion" type="number" step="any" placeholder="Aceleración 0-100 (s)" required>
              <input id="imagen" type="text" placeholder="URL de la imagen" required>
              <button type="submit">Agregar</button>
            </form>
          </div>
        </div>
        ${modalStyles}
      `;

      addButton.insertAdjacentHTML("afterend", formHtml);

      const form = document.querySelector('#formVehicle');

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nuevoVehiculo = {
          id: vehiculos.length + 1,
          equipo: form.equipo.value.trim(),
          motor: form.motor.value.trim(),
          modelo: form.modelo.value.trim(),
          velocidad_maxima_kmh: parseFloat(form.velocidadMax.value),
          aceleracion_0_100: parseFloat(form.aceleracion.value),
          imagen: form.imagen.value.trim()
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
        }

        vehiculos.push(nuevoVehiculo);
        alert("Vehículo agregado correctamente.");

        const componenteVehiculos = document.querySelector("vehiculo-card");
        if (componenteVehiculos) {
          componenteVehiculos.updateVehiculos(vehiculos);
        }

        document.getElementById("modalVehicleForm").remove();
      });

      document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("modalVehicleForm").remove();
      });

      document.getElementById("modalVehicleForm").addEventListener("click", (e) => {
        if (e.target.id === "modalVehicleForm") {
          e.target.remove();
        }
      });
    });
  }

  const editButton = document.querySelector(".crud-option.text-yellow-400");
  if (editButton) {
    editButton.addEventListener("click", () => {
      if (document.querySelector('#formVehicle')) return;

      const formHtml = `
        <div id="modalVehicleForm">
          <div class="modal-content">
            <button class="close-modal" title="Cerrar">✕</button>
            <form id="formVehicle">
              <h2>Editar vehículo</h2>
              <input id="id" type="number" placeholder="ID del vehículo a editar" required min="1">
              <input id="equipo" type="text" placeholder="Equipo">
              <input id="motor" type="text" placeholder="Motor">
              <input id="modelo" type="text" placeholder="Modelo">
              <input id="velocidadMax" type="number" step="any" placeholder="Velocidad máxima (km/h)">
              <input id="aceleracion" type="number" step="any" placeholder="Aceleración 0-100 (s)">
              <input id="imagen" type="text" placeholder="URL de la imagen">
              <button type="submit">Editar</button>
            </form>
          </div>
        </div>
        ${modalStyles}
      `;

      editButton.insertAdjacentHTML("afterend", formHtml);

      const form = document.querySelector('#formVehicle');

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const idIngresado = parseInt(form.id.value, 10);
        const vehiculoExistente = vehiculos.find(v => v.id === idIngresado);

        if (!vehiculoExistente) {
          alert("El ID ingresado no corresponde a ningún vehículo existente.");
          form.id.classList.add("invalid");
          return;
        } else {
          form.id.classList.remove("invalid");
        }

        if (form.equipo.value.trim()) vehiculoExistente.equipo = form.equipo.value.trim();
        if (form.motor.value.trim()) vehiculoExistente.motor = form.motor.value.trim();
        if (form.modelo.value.trim()) vehiculoExistente.modelo = form.modelo.value.trim();
        if (form.velocidadMax.value) vehiculoExistente.velocidad_maxima_kmh = parseFloat(form.velocidadMax.value);
        if (form.aceleracion.value) vehiculoExistente.aceleracion_0_100 = parseFloat(form.aceleracion.value);
        if (form.imagen.value.trim()) vehiculoExistente.imagen = form.imagen.value.trim();

        alert("Vehículo editado correctamente.");

        const componenteVehiculos = document.querySelector("vehiculo-card");
        if (componenteVehiculos) {
          componenteVehiculos.updateVehiculos(vehiculos);
        }

        document.getElementById("modalVehicleForm").remove();
      });

      document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("modalVehicleForm").remove();
      });

      document.getElementById("modalVehicleForm").addEventListener("click", (e) => {
        if (e.target.id === "modalVehicleForm") {
          e.target.remove();
        }
      });
    });
  }
});