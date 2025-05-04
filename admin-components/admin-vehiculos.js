import { vehiculos } from "../data/data.js"

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn-vehiculos")
  const menuOptions = document.getElementById("menuOptions-vehiculos")

  if (menuOptions) {
    menuOptions.classList.add("hidden")
  }

  if (!menuBtn || !menuOptions) {
    console.error("No se encontró el botón o el menú de opciones.")
    return
  }

  function positionMenu() {
    const btnRect = menuBtn.getBoundingClientRect()
    menuOptions.style.position = "absolute"
    menuOptions.style.top = btnRect.bottom + window.scrollY + "px"
    menuOptions.style.right = "5px"
    menuOptions.style.zIndex = "1000"
  }

  const menuStyles = document.createElement("style")
  menuStyles.textContent = `
    #menuOptions-vehiculos {
      background: linear-gradient(to bottom, #1a1a1a, #000000);
      border: 2px solid #e50914;
      border-radius: 10px;
      padding: 10px;
      min-width: 180px;
      box-shadow: 0 10px 25px rgba(229, 9, 20, 0.3);
      transform-origin: top right;
      transition: transform 0.3s ease, opacity 0.3s ease;
      transform: scale(0.95);
      opacity: 0;
    }
    
    #menuOptions-vehiculos.show {
      transform: scale(1);
      opacity: 1;
    }
    
    #menuOptions-vehiculos.hidden {
      display: none;
    }
    
    .crud-option {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 10px 15px;
      margin: 5px 0;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      transition: all 0.2s ease;
      border: none;
      text-align: left;
      font-weight: 500;
    }
    
    .crud-option:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(5px);
    }
    
    #menuOptions-vehiculos::before {
      content: '';
      position: absolute;
      top: -10px;
      right: 10px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #e50914;
    }
    
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
      backdrop-filter: blur(5px);
    }

    .modal-content {
      background: linear-gradient(to bottom, #1a1a1a, #000000);
      padding: 2rem;
      border-radius: 1rem;
      border: 2px solid #e50914;
      box-shadow: 0 10px 30px rgba(229, 9, 20, 0.4);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 90%;
      max-width: 500px;
      position: relative;
      font-family: 'Segoe UI', sans-serif;
      animation: modalAppear 0.3s ease-out;
    }
    
    @keyframes modalAppear {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    #formVehicle h2 {
      text-align: center;
      font-size: 1.5rem;
      color: white;
      margin-bottom: 1rem;
      text-shadow: 0 0 10px rgba(229, 9, 20, 0.5);
    }

    #formVehicle input {
      padding: 0.75rem;
      border: 1.5px solid #333;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 0.5rem;
      font-size: 1rem;
      transition: all 0.2s ease;
      width: 100%;
      color: #000;
      margin-bottom: 10px;
    }

    #formVehicle input:focus {
      outline: none;
      border-color: #e50914;
      box-shadow: 0 0 0 2px rgba(229, 9, 20, 0.3);
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
      transition: all 0.3s ease;
      display: block;
      margin: 1rem auto 0;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    #formVehicle button:hover {
      background: #c20710;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(229, 9, 20, 0.4);
    }
    
    #formVehicle button:active {
      transform: translateY(0);
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
      transition: color 0.2s ease;
    }

    .close-modal:hover {
      color: #e50914;
    }

    input.invalid {
      border-color: #e50914 !important;
      background-color: rgba(229, 9, 20, 0.1) !important;
    }
  `
  document.head.appendChild(menuStyles)

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation()

    positionMenu()

    if (menuOptions.classList.contains("hidden")) {
      menuOptions.classList.remove("hidden")
      setTimeout(() => {
        menuOptions.classList.add("show")
      }, 10)
    } else {
      menuOptions.classList.remove("show")
      setTimeout(() => {
        menuOptions.classList.add("hidden")
      }, 300)
    }
  })

  document.addEventListener("click", (e) => {
    if (!menuOptions.contains(e.target) && e.target !== menuBtn) {
      menuOptions.classList.remove("show")
      setTimeout(() => {
        menuOptions.classList.add("hidden")
      }, 300)
    }
  })

  const addButton = document.querySelector(".crud-option.text-green-400")

  if (addButton) {
    addButton.addEventListener("click", () => {
      if (document.querySelector("#formVehicle")) return

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
      `
      document.body.insertAdjacentHTML("beforeend", formHtml)

      menuOptions.classList.remove("show")
      setTimeout(() => {
        menuOptions.classList.add("hidden")
      }, 300)

      const form = document.querySelector("#formVehicle")

      form.addEventListener("submit", (e) => {
        e.preventDefault()

        const nuevoVehiculo = {
          id: vehiculos.length + 1,
          equipo: form.equipo.value.trim(),
          motor: form.motor.value.trim(),
          modelo: form.modelo.value.trim(),
          velocidad_maxima_kmh: Number.parseFloat(form.velocidadMax.value),
          aceleracion_0_100: Number.parseFloat(form.aceleracion.value),
          imagen: form.imagen.value.trim(),
        }

        if (
          !nuevoVehiculo.equipo ||
          !nuevoVehiculo.motor ||
          !nuevoVehiculo.modelo ||
          !nuevoVehiculo.velocidad_maxima_kmh ||
          !nuevoVehiculo.aceleracion_0_100 ||
          !nuevoVehiculo.imagen
        ) {
          alert("Por favor, rellena todos los campos.")
          return
        }

        vehiculos.push(nuevoVehiculo)

        try {
          localStorage.setItem("vehiculos", JSON.stringify(vehiculos))
        } catch (error) {
          console.error("Error al guardar en localStorage:", error)
        }

        alert("Vehículo agregado correctamente.")

        const componenteVehiculos = document.querySelector("vehiculo-card")
        if (componenteVehiculos) {
          componenteVehiculos.updateVehiculos(vehiculos)
        }

        document.getElementById("modalVehicleForm").remove()
      })

      document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("modalVehicleForm").remove()
      })

      document.getElementById("modalVehicleForm").addEventListener("click", (e) => {
        if (e.target.id === "modalVehicleForm") {
          e.target.remove()
        }
      })
    })
  }

  const editButton = document.querySelector(".crud-option.text-yellow-400")
  if (editButton) {
    editButton.addEventListener("click", () => {
      if (document.querySelector("#formVehicle")) return

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
      `
      document.body.insertAdjacentHTML("beforeend", formHtml)

      menuOptions.classList.remove("show")
      setTimeout(() => {
        menuOptions.classList.add("hidden")
      }, 300)

      const form = document.querySelector("#formVehicle")

      form.addEventListener("submit", (e) => {
        e.preventDefault()

        const idIngresado = Number.parseInt(form.id.value, 10)
        const vehiculoExistente = vehiculos.find((v) => v.id === idIngresado)

        if (!vehiculoExistente) {
          alert("El ID ingresado no corresponde a ningún vehículo existente.")
          form.id.classList.add("invalid")
          return
        } else {
          form.id.classList.remove("invalid")
        }

        if (form.equipo.value.trim()) vehiculoExistente.equipo = form.equipo.value.trim()
        if (form.motor.value.trim()) vehiculoExistente.motor = form.motor.value.trim()
        if (form.modelo.value.trim()) vehiculoExistente.modelo = form.modelo.value.trim()
        if (form.velocidadMax.value) vehiculoExistente.velocidad_maxima_kmh = Number.parseFloat(form.velocidadMax.value)
        if (form.aceleracion.value) vehiculoExistente.aceleracion_0_100 = Number.parseFloat(form.aceleracion.value)
        if (form.imagen.value.trim()) vehiculoExistente.imagen = form.imagen.value.trim()

        try {
          localStorage.setItem("vehiculos", JSON.stringify(vehiculos))
        } catch (error) {
          console.error("Error al guardar en localStorage:", error)
        }

        alert("Vehículo editado correctamente.")

        const componenteVehiculos = document.querySelector("vehiculo-card")
        if (componenteVehiculos) {
          componenteVehiculos.updateVehiculos(vehiculos)
        }

        document.getElementById("modalVehicleForm").remove()
      })

      document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("modalVehicleForm").remove()
      })

      document.getElementById("modalVehicleForm").addEventListener("click", (e) => {
        if (e.target.id === "modalVehicleForm") {
          e.target.remove()
        }
      })
    })
  }

  const deleteButton = document.querySelector(".crud-option.text-red-400")
  if (deleteButton) {
    deleteButton.addEventListener("click", () => {
      if (document.querySelector("#formVehicle")) return

      const formHtml = `
        <div id="modalVehicleForm">
          <div class="modal-content">
            <button class="close-modal" title="Cerrar">✕</button>
            <form id="formVehicle">
              <h2>Eliminar vehículo</h2>
              <input id="id" type="number" placeholder="ID del vehículo a eliminar" required min="1">
              <button type="submit">Eliminar</button>
            </form>
          </div>
        </div>
      `
      document.body.insertAdjacentHTML("beforeend", formHtml)

      menuOptions.classList.remove("show")
      setTimeout(() => {
        menuOptions.classList.add("hidden")
      }, 300)

      const form = document.querySelector("#formVehicle")

      form.addEventListener("submit", (e) => {
        e.preventDefault()

        const idIngresado = Number.parseInt(form.id.value, 10)

        let vehiculosArray = []
        try {
          const storedVehiculos = localStorage.getItem("vehiculos")
          if (storedVehiculos) {
            vehiculosArray = JSON.parse(storedVehiculos)
          } else {
            vehiculosArray = [...vehiculos]
          }
        } catch (error) {
          console.error("Error al cargar vehículos:", error)
          vehiculosArray = [...vehiculos]
        }

        const index = vehiculosArray.findIndex((v) => v.id === idIngresado)

        if (index === -1) {
          alert("El ID ingresado no corresponde a ningún vehículo existente.")
          form.id.classList.add("invalid")
          return
        } else {
          form.id.classList.remove("invalid")
        }

        const confirmacion = confirm(
          `¿Estás seguro de que deseas eliminar el vehículo ${vehiculosArray[index].modelo}?`,
        )
        if (!confirmacion) return

        vehiculosArray.splice(index, 1)

        while (vehiculos.length > 0) {
          vehiculos.pop()
        }
        vehiculosArray.forEach((v) => vehiculos.push(v))

        localStorage.setItem("vehiculos", JSON.stringify(vehiculosArray))

        alert("Vehículo eliminado correctamente.")

        const componenteVehiculos = document.querySelector("vehiculo-card")
        if (componenteVehiculos) {
          componenteVehiculos.updateVehiculos(vehiculosArray)
        }

        document.getElementById("modalVehicleForm").remove()
      })

      document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("modalVehicleForm").remove()
      })

      document.getElementById("modalVehicleForm").addEventListener("click", (e) => {
        if (e.target.id === "modalVehicleForm") {
          e.target.remove()
        }
      })
    })
  }
  positionMenu()
  window.addEventListener("resize", positionMenu)
})