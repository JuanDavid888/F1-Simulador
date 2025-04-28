// Lista de pilotos
const pilotos = [
    { id: 1, nombre: "Max Verstappen", equipo: "Red Bull Racing", rol: "Líder" },
    { id: 2, nombre: "Sergio Pérez", equipo: "Red Bull Racing", rol: "Escudero" },
    { id: 3, nombre: "Lewis Hamilton", equipo: "Mercedes-AMG Petronas", rol: "Líder" },
    { id: 4, nombre: "George Russell", equipo: "Mercedes-AMG Petronas", rol: "Escudero" },
    { id: 5, nombre: "Charles Leclerc", equipo: "Ferrari", rol: "Líder" },
    { id: 6, nombre: "Carlos Sainz", equipo: "Ferrari", rol: "Escudero" },
    { id: 7, nombre: "Lando Norris", equipo: "McLaren", rol: "Líder" },
    { id: 8, nombre: "Oscar Piastri", equipo: "McLaren", rol: "Escudero" },
    { id: 9, nombre: "Fernando Alonso", equipo: "Aston Martin", rol: "Líder" },
    { id: 10, nombre: "Lance Stroll", equipo: "Aston Martin", rol: "Escudero" },
    { id: 11, nombre: "Esteban Ocon", equipo: "Alpine", rol: "Líder" },
    { id: 12, nombre: "Pierre Gasly", equipo: "Alpine", rol: "Escudero" },
    { id: 13, nombre: "Valtteri Bottas", equipo: "Alfa Romeo", rol: "Líder" },
    { id: 14, nombre: "Zhou Guanyu", equipo: "Alfa Romeo", rol: "Escudero" },
    { id: 15, nombre: "Kevin Magnussen", equipo: "Haas", rol: "Líder" },
    { id: 16, nombre: "Nico Hülkenberg", equipo: "Haas", rol: "Escudero" },
    { id: 17, nombre: "Yuki Tsunoda", equipo: "AlphaTauri", rol: "Líder" },
    { id: 18, nombre: "Daniel Ricciardo", equipo: "AlphaTauri", rol: "Escudero" },
    { id: 19, nombre: "Alexander Albon", equipo: "Williams", rol: "Líder" },
    { id: 20, nombre: "Logan Sargeant", equipo: "Williams", rol: "Escudero" }
]

// Lista de equipos con sus pilotos
const equipos = [
    {
    nombre: "Red Bull Racing",
    pais: "Austria",
    motor: "Honda",
     pilotos: [1, 2], // IDs de pilotos
    imagen: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Red_Bull_Racing_Logo.svg"
    },
    {
    nombre: "Mercedes-AMG Petronas",
    pais: "Alemania",
    motor: "Mercedes",
    pilotos: [3, 4],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/32/Mercedes_AMG_Petronas_F1_Team_logo.svg"
    },
    {
    nombre: "Ferrari",
    pais: "Italia",   
    motor: "Ferrari",
    pilotos: [5, 6],
    imagen: "https://upload.wikimedia.org/wikipedia/en/d/d4/Scuderia_Ferrari_Logo.svg"
    },
    {
    nombre: "McLaren",
    pais: "Inglaterra",
    motor: "McLaren",
    pilotos: [7, 8],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/McLaren_Logo.svg/1200px-McLaren_Logo.svg.png"
    },
    {
    nombre: "Aston Martin",
    pais: "Inglaterra",
    motor: "Aston Martin",
    pilotos: [9, 10],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Aston_Martin_F1_Logo.svg/1200px-Aston_Martin_F1_Logo.svg.png"
    },
    {
    nombre: "Alpine",
    pais: "Francia",
    motor: "Alpine",
    pilotos: [11, 12],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Alpine_F1_Logo.svg/1200px-Alpine_F1_Logo.svg.png"
    },
    {
    nombre: "Alfa Romeo",
    pais: "Italia",
    motor: "Alfa Romeo",
    pilotos: [13, 14],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Alfa_Romeo_F1_Logo.svg/1200px-Alfa_Romeo_F1_Logo.svg.png"
    },
    {
    nombre: "Haas",
    pais: "Alemania",
    motor: "Haas",
    pilotos: [15, 16],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Haas_F1_Logo.svg/1200px-Haas_F1_Logo.svg.png"
    },
    {
    nombre: "AlphaTauri",
    pais: "Italia",
    motor: "AlphaTauri",
    pilotos: [17, 18],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/AlphaTauri_F1_Logo.svg/1200px-AlphaTauri_F1_Logo.svg.png"
    },
    {   
    nombre: "Williams",
    pais: "Inglaterra",
    motor: "RedBull",
    pilotos: [19, 20],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Redbull_F1_Logo.svg/1200px-Redbull_F1_Logo.svg.png"
    },
];