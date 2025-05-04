import { pilotos } from "../data/data.js"

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn-pilotos")

  const menuOptions = document.getElementById("menuOptions-pilotos")


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
    #menuOptions-pilotos {
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
    
    #menuOptions-pilotos.show {
      transform: scale(1);
      opacity: 1;
    }
    
    #menuOptions-pilotos.hidden {
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
    
    /* Añadir un pequeño triángulo en la parte superior del menú */
    #menuOptions-pilotos::before {
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
    
    /* Estilos para los modales */
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

    #formPilot h2 {
      text-align: center;
      font-size: 1.5rem;
      color: white;
      margin-bottom: 1rem;
      text-shadow: 0 0 10px rgba(229, 9, 20, 0.5);
    }

    #formPilot input {
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

    #formPilot input:focus {
      outline: none;
      border-color: #e50914;
      box-shadow: 0 0 0 2px rgba(229, 9, 20, 0.3);
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
      transition: all 0.3s ease;
      display: block;
      margin: 1rem auto 0;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    #formPilot button:hover {
      background: #c20710;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(229, 9, 20, 0.4);
    }
    
    #formPilot button:active {
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
      if (document.querySelector("#formPilot")) return

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
      `

      document.body.insertAdjacentHTML("beforeend", formHtml)

      
      menuOptions.classList.remove("show")
      setTimeout(() => {
        menuOptions.classList.add("hidden")
      }, 300)

      const form = document.querySelector("#formPilot")

      form.addEventListener("submit", (e) => {
        e.preventDefault()

        const nuevoPiloto = {
          id: pilotos.length + 1,
          nombre: form.nombre.value.trim(),
          equipo: form.equipo.value.trim(),
          rol: form.rol.value.trim(),
          nacimiento: form.nacimiento.value,
          pais: form.pais.value.trim(),
          imagen: form.imagen.value.trim(),
        }

        const rolValido = ["líder", "escudero"]
        if (!rolValido.includes(nuevoPiloto.rol.toLowerCase())) {
          alert("El rol debe ser 'líder' o 'escudero'.")
          return
        }

        if (
          !nuevoPiloto.nombre ||
          !nuevoPiloto.equipo ||
          !nuevoPiloto.rol ||
          !nuevoPiloto.nacimiento ||
          !nuevoPiloto.pais ||
          !nuevoPiloto.imagen
        ) {
          alert("Por favor, rellena todos los campos.")
          return
        }

        pilotos.push(nuevoPiloto)

        // Guardar en localStorage
        localStorage.setItem("pilotos", JSON.stringify(pilotos))

        alert("Piloto agregado correctamente.")

        const componentePilotos = document.querySelector("piloto-card")
        if (componentePilotos) {
          componentePilotos.updatePilotos(pilotos)
        }

        document.getElementById("modalPilotForm").remove()
      })

      document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("modalPilotForm").remove()
      })

      document.getElementById("modalPilotForm").addEventListener("click", (e) => {
        if (e.target.id === "modalPilotForm") {
          e.target.remove()
        }
      })
    })
  }

  const editButton = document.querySelector(".crud-option.text-yellow-400")
  if (editButton) {
    editButton.addEventListener("click", () => {
      if (document.querySelector("#formPilot")) return

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
      `

     
      document.body.insertAdjacentHTML("beforeend", formHtml)

      menuOptions.classList.remove("show")
      setTimeout(() => {
        menuOptions.classList.add("hidden")
      }, 300)

      const form = document.querySelector("#formPilot")

      form.addEventListener("submit", (e) => {
        e.preventDefault()

        const idIngresado = Number.parseInt(form.id.value, 10)
        const pilotoExistente = pilotos.find((p) => p.id === idIngresado)

        if (!pilotoExistente) {
          alert("El ID ingresado no corresponde a ningún piloto existente.")
          form.id.classList.add("invalid")
          return
        } else {
          form.id.classList.remove("invalid")
        }

        const nuevoRol = form.rol.value.trim().toLowerCase()
        const rolValido = ["líder", "escudero"]
        if (form.rol.value && !rolValido.includes(nuevoRol)) {
          alert("El rol debe ser 'líder' o 'escudero'.")
        } else if (form.rol.value === " ") {
          //Dejar el que estaba antes
          form.rol.value = pilotoExistente.rol
        }

        if (form.nombre.value.trim()) pilotoExistente.nombre = form.nombre.value.trim()
        if (form.equipo.value.trim()) pilotoExistente.equipo = form.equipo.value.trim()
        if (form.rol.value.trim()) pilotoExistente.rol = nuevoRol
        if (form.nacimiento.value) pilotoExistente.nacimiento = form.nacimiento.value
        if (form.pais.value.trim()) pilotoExistente.pais = form.pais.value.trim()
        if (form.imagen.value.trim()) pilotoExistente.imagen = form.imagen.value.trim()

        // Guardar en localStorage
        localStorage.setItem("pilotos", JSON.stringify(pilotos))

        alert("Piloto editado correctamente.")

        const componentePilotos = document.querySelector("piloto-card")
        if (componentePilotos) {
          componentePilotos.updatePilotos(pilotos)
        }

        document.getElementById("modalPilotForm").remove()
      })

      document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("modalPilotForm").remove()
      })

      document.getElementById("modalPilotForm").addEventListener("click", (e) => {
        if (e.target.id === "modalPilotForm") {
          e.target.remove()
        }
      })
    })
  }

  // Implementación del botón de eliminar
  const deleteButton = document.querySelector(".crud-option.text-red-400")
  if (deleteButton) {
    deleteButton.addEventListener("click", () => {
      if (document.querySelector("#formPilot")) return

      const formHtml = `
        <div id="modalPilotForm">
          <div class="modal-content">
            <button class="close-modal" title="Cerrar">✕</button>
            <form id="formPilot">
              <h2>Eliminar piloto</h2>
              <input id="id" type="number" placeholder="ID del piloto a eliminar" required>
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

      const form = document.querySelector("#formPilot")

      form.addEventListener("submit", (e) => {
        e.preventDefault()

        const idIngresado = Number.parseInt(form.id.value, 10)

        
        let pilotosArray = []
        try {
          const storedPilotos = localStorage.getItem("pilotos")
          if (storedPilotos) {
            pilotosArray = JSON.parse(storedPilotos)
          } else {
            pilotosArray = [...pilotos]
          }
        } catch (error) {
          console.error("Error al cargar pilotos:", error)
          pilotosArray = [...pilotos]
        }


        const index = pilotosArray.findIndex((p) => p.id === idIngresado)

        if (index === -1) {
          alert("El ID ingresado no corresponde a ningún piloto existente.")
          form.id.classList.add("invalid")
          return
        } else {
          form.id.classList.remove("invalid")
        }


        const confirmacion = confirm(`¿Estás seguro de que deseas eliminar al piloto ${pilotosArray[index].nombre}?`)
        if (!confirmacion) return


        pilotosArray.splice(index, 1)

        while (pilotos.length > 0) {
          pilotos.pop()
        }
        pilotosArray.forEach((p) => pilotos.push(p))

     
        localStorage.setItem("pilotos", JSON.stringify(pilotosArray))

        alert("Piloto eliminado correctamente.")

        const componentePilotos = document.querySelector("piloto-card")
        if (componentePilotos) {
          componentePilotos.updatePilotos(pilotosArray)
        }

        document.getElementById("modalPilotForm").remove()
      })

      document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("modalPilotForm").remove()
      })

      document.getElementById("modalPilotForm").addEventListener("click", (e) => {
        if (e.target.id === "modalPilotForm") {
          e.target.remove()
        }
      })
    })
  }

  positionMenu()

  window.addEventListener("resize", positionMenu)
})
