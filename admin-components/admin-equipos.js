import { pilotos, equipos } from "../data/data.js"

function obtenerPilotosPorEquipo(nombreEquipo) {
  const pilotosDelEquipo = pilotos.filter((piloto) => piloto.equipo === nombreEquipo).map((piloto) => piloto.imagen)

  const imagenPorDefecto = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"

  return pilotosDelEquipo.length ? pilotosDelEquipo : [imagenPorDefecto, imagenPorDefecto] // Imagen por defecto si no hay pilotos
}

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn-equipos")
  const menuOptions = document.getElementById("menuOptions-equipos")


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
    #menuOptions-equipos {
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
    
    #menuOptions-equipos.show {
      transform: scale(1);
      opacity: 1;
    }
    
    #menuOptions-equipos.hidden {
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
    #menuOptions-equipos::before {
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

    #formTeam h2 {
      text-align: center;
      font-size: 1.5rem;
      color: white;
      margin-bottom: 1rem;
      text-shadow: 0 0 10px rgba(229, 9, 20, 0.5);
    }

    #formTeam input {
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

    #formTeam input:focus {
      outline: none;
      border-color: #e50914;
      box-shadow: 0 0 0 2px rgba(229, 9, 20, 0.3);
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
      transition: all 0.3s ease;
      display: block;
      margin: 1rem auto 0;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    #formTeam button:hover {
      background: #c20710;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(229, 9, 20, 0.4);
    }
    
    #formTeam button:active {
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
      if (document.querySelector("#formTeam")) return

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
      `

      document.body.insertAdjacentHTML("beforeend", formHtml)

      menuOptions.classList.remove("show")
      setTimeout(() => {
        menuOptions.classList.add("hidden")
      }, 300)

      const form = document.querySelector("#formTeam")

      form.addEventListener("submit", (e) => {
        e.preventDefault()

        const nuevoEquipo = {
          id: equipos.length + 1,
          nombre: form.nombre.value.trim(),
          pais: form.pais.value.trim(),
          imagen: form.imagen.value.trim(),
          pilotos: obtenerPilotosPorEquipo(form.nombre.value.trim()),
        }

        if (!nuevoEquipo.nombre || !nuevoEquipo.pais || !nuevoEquipo.imagen) {
          alert("Por favor, rellena todos los campos.")
          return
        }

        equipos.push(nuevoEquipo)

        // Guardar en localStorage
        try {
          localStorage.setItem("equipos", JSON.stringify(equipos))
        } catch (error) {
          console.error("Error al guardar en localStorage:", error)
        }

        alert("Equipo agregado correctamente.")

        const componenteEquipos = document.querySelector("equipo-card")
        if (componenteEquipos) {
          componenteEquipos.updateEquipos(equipos)
        }

        document.getElementById("modalTeamForm").remove()
      })

      document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("modalTeamForm").remove()
      })

      document.getElementById("modalTeamForm").addEventListener("click", (e) => {
        if (e.target.id === "modalTeamForm") {
          e.target.remove()
        }
      })
    })
  }

  const editButton = document.querySelector(".crud-option.text-yellow-400")
  if (editButton) {
    editButton.addEventListener("click", () => {
      if (document.querySelector("#formTeam")) return

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
      `

      document.body.insertAdjacentHTML("beforeend", formHtml)


      menuOptions.classList.remove("show")
      setTimeout(() => {
        menuOptions.classList.add("hidden")
      }, 300)

      const form = document.querySelector("#formTeam")

      form.addEventListener("submit", (e) => {
        e.preventDefault()

        const idIngresado = Number.parseInt(form.id.value, 10)

        if (isNaN(idIngresado) || idIngresado < 1) {
          alert("El ID debe ser un número mayor o igual a 1.")
          form.id.classList.add("invalid")
          return
        } else {
          form.id.classList.remove("invalid")
        }

        const equipoExistente = equipos.find((e) => e.id === idIngresado)

        if (!equipoExistente) {
          alert("El ID ingresado no corresponde a ningún equipo existente.")
          form.id.classList.add("invalid")
          return
        } else {
          form.id.classList.remove("invalid")
        }

        if (form.nombre.value.trim()) equipoExistente.nombre = form.nombre.value.trim()
        if (form.pais.value.trim()) equipoExistente.pais = form.pais.value.trim()
        if (form.imagen.value.trim()) equipoExistente.imagen = form.imagen.value.trim()

        // Guardar en localStorage
        try {
          localStorage.setItem("equipos", JSON.stringify(equipos))
        } catch (error) {
          console.error("Error al guardar en localStorage:", error)
        }

        alert("Equipo editado correctamente.")

        const componenteEquipos = document.querySelector("equipo-card")
        if (componenteEquipos) {
          componenteEquipos.updateEquipos(equipos)
        }

        document.getElementById("modalTeamForm").remove()
      })

      document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("modalTeamForm").remove()
      })

      document.getElementById("modalTeamForm").addEventListener("click", (e) => {
        if (e.target.id === "modalTeamForm") {
          e.target.remove()
        }
      })
    })
  }

  // Implementación del botón de eliminar
  const deleteButton = document.querySelector(".crud-option.text-red-400")
  if (deleteButton) {
    deleteButton.addEventListener("click", () => {
      if (document.querySelector("#formTeam")) return

      const formHtml = `
        <div id="modalTeamForm">
          <div class="modal-content">
            <button class="close-modal" title="Cerrar">✕</button>
            <form id="formTeam">
              <h2>Eliminar equipo</h2>
              <input id="id" type="number" placeholder="ID del equipo a eliminar" required min="1">
              <button type="submit">Eliminar</button>
            </form>
          </div>
        </div>
      `

      // Insertar el modal en el body para que esté centrado
      document.body.insertAdjacentHTML("beforeend", formHtml)

      // Ocultar el menú después de seleccionar una opción
      menuOptions.classList.remove("show")
      setTimeout(() => {
        menuOptions.classList.add("hidden")
      }, 300)

      const form = document.querySelector("#formTeam")

      form.addEventListener("submit", (e) => {
        e.preventDefault()

        const idIngresado = Number.parseInt(form.id.value, 10)

        if (isNaN(idIngresado) || idIngresado < 1) {
          alert("El ID debe ser un número mayor o igual a 1.")
          form.id.classList.add("invalid")
          return
        } else {
          form.id.classList.remove("invalid")
        }

        // Cargar equipos desde localStorage si existen
        let equiposArray = []
        try {
          const storedEquipos = localStorage.getItem("equipos")
          if (storedEquipos) {
            equiposArray = JSON.parse(storedEquipos)
          } else {
            equiposArray = [...equipos]
          }
        } catch (error) {
          console.error("Error al cargar equipos:", error)
          equiposArray = [...equipos]
        }

        
        const index = equiposArray.findIndex((e) => e.id === idIngresado)

        if (index === -1) {
          alert("El ID ingresado no corresponde a ningún equipo existente.")
          form.id.classList.add("invalid")
          return
        } else {
          form.id.classList.remove("invalid")
        }

        // Confirmar eliminación
        const confirmacion = confirm(`¿Estás seguro de que deseas eliminar el equipo ${equiposArray[index].nombre}?`)
        if (!confirmacion) return

        // Eliminar el equipo usando splice
        equiposArray.splice(index, 1)

        // Actualizar la variable global equipos
        while (equipos.length > 0) {
          equipos.pop()
        }
        equiposArray.forEach((e) => equipos.push(e))

        // Guardar en localStorage
        localStorage.setItem("equipos", JSON.stringify(equiposArray))

        alert("Equipo eliminado correctamente.")

        const componenteEquipos = document.querySelector("equipo-card")
        if (componenteEquipos) {
          componenteEquipos.updateEquipos(equiposArray)
        }

        document.getElementById("modalTeamForm").remove()
      })

      document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("modalTeamForm").remove()
      })

      document.getElementById("modalTeamForm").addEventListener("click", (e) => {
        if (e.target.id === "modalTeamForm") {
          e.target.remove()
        }
      })
    })
  }


  positionMenu()

  window.addEventListener("resize", positionMenu)
})
