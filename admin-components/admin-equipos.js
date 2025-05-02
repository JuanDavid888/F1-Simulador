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
  
    console.log("Menú de administración cargado correctamente.");
  
    // Manejo de botones CRUD
    const addButton = document.querySelector(".crud-option.text-green-400");
    const editButton = document.querySelector(".crud-option.text-yellow-400");
    const deleteButton = document.querySelector(".crud-option.text-red-400");
    const updateButton = document.querySelector(".crud-option.text-blue-400");
  
    if (addButton) {
      addButton.addEventListener("click", () => {
        openModal("Agregar nuevo equipo");
      });
    }
  
    if (editButton) {
      editButton.addEventListener("click", () => {
        openModal("Editar elemento seleccionado");
      });
    }
  
    if (deleteButton) {
      deleteButton.addEventListener("click", () => {
        confirmDelete();
      });
    }
  
    if (updateButton) {
      updateButton.addEventListener("click", () => {
        openModal("Actualizar información");
      });
    }
  });
  
  // Función para abrir una ventana emergente con el título de acción
  function openModal(action) {
    alert(`Acción seleccionada: ${action}`);
  }
  
  function confirmDelete() {
    const confirmation = confirm("¿Seguro que deseas eliminar este elemento?");
    if (confirmation) {
      alert("Elemento eliminado correctamente.");
    }
  }