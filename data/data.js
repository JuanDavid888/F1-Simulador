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

// Lista de circuitos con estadísticas y ganadores históricos

const circuitos = [
    {
    nombre: "Circuito de Mónaco",
    pais: "Mónaco",
    longitud_km: 3.34,
    vueltas: 78,
    descripcion: "Uno de los circuitos más prestigiosos y difíciles del calendario, conocido por sus calles angostas y la falta de zonas de adelantamiento.",
    record_vuelta: { tiempo: "1:10.166", piloto: "Lewis Hamilton", año: 2019 },
    ganadores: [
    { temporada: 2021, piloto: 1 },
    { temporada: 2022, piloto: 2 },
    { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Monte_Carlo_Formula_1_track_map.svg"
    },

    {
    nombre: "Silverstone",
    pais: "Reino Unido",
    longitud_km: 5.89,
    vueltas: 52,
    descripcion: "Uno de los circuitos más rápidos del calendario, con curvas de alta velocidad como Maggotts y Becketts.",
    record_vuelta: { tiempo: "1:27.097", piloto: "Max Verstappen", año: 2020 },
    ganadores: [
    { temporada: 2021, piloto: 3 },
    { temporada: 2022, piloto: 5 },
    { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Silverstone_Circuit_2020_layout.png"
    },

    {
    nombre: "Circuito de Spa-Francorchamps",
    pais: "Bélgica",
    longitud_km: 7.00,
    vueltas: 44,
    descripcion: "Famoso por la curva Eau Rouge y la larga recta de Kemmel, un circuito donde la potencia del motor es clave.",
    record_vuelta: { tiempo: "1:46.286", piloto: "Valtteri Bottas", año: 2018 },
    ganadores: [
    { temporada: 2021, piloto: 1 },
    { temporada: 2022, piloto: 1 },
    { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Circuit_Spa_2018.png"
    },

    {
    nombre: "Circuito de Monza",
    pais: "Italia",
    longitud_km: 5.79,
    vueltas: 53,
    descripcion: "Conocido como 'El Templo de la Velocidad', Monza es el circuito más rápido del calendario con largas rectas y chicanes icónicas.",
    record_vuelta: { tiempo: "1:21.046", piloto: "Rubens Barrichello", año: 2004 },
    ganadores: [
    { temporada: 2021, piloto: 2 },
    { temporada: 2022, piloto: 1 },
    { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Monza_track_map.svg"
    },

    {
    nombre: "Interlagos",
    pais: "Brasil",
    longitud_km: 4.31, 
    vueltas: 71,
    descripcion: "Interlagos es un circuito legendario con cambios de elevación y un trazado técnico que ha sido sede de algunas de las carreras más emocionantes de la historia.",
    record_vuelta: { tiempo: "1:10.540", piloto: "Valtteri Bottas", año: 2018 },
    ganadores: [
    { temporada: 2021, piloto: 3 },
    { temporada: 2022, piloto: 1 },
    { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/2/23/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace_%28Interlagos%29.svg"
    },

    {
    nombre: "Circuito de Yas Marina",
    pais: "Emiratos Árabes Unidos",
    longitud_km: 5.28,
    vueltas: 58,
    descripcion: "Ubicado en Abu Dhabi, es famoso por ser el circuito donde se definen muchos campeonatos, con un diseño moderno y una espectacular carrera nocturna.",
    record_vuelta: { tiempo: "1:39.283", piloto: "Lewis Hamilton", año: 2019 },
    ganadores: [
    { temporada: 2021, piloto: 1 },
    { temporada: 2022, piloto: 1 },
    { temporada: 2023, piloto: 3 }
    ],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Yas_Marina_Circuit_2021_layout.svg"
    },

    {
    nombre: "Circuito de Suzuka",
    pais: "Japón",
    longitud_km: 5.81,
    vueltas: 53,
    descripcion: "Un circuito desafiante con un diseño en forma de ocho, famoso por sus curvas de alta velocidad como 130R y la 'S' de Senna.",
    record_vuelta: { tiempo: "1:30.983", piloto: "Lewis Hamilton", año: 2019 },
    ganadores: [
    { temporada: 2021, piloto: 1 },
    { temporada: 2022, piloto: 1 },
    { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Suzuka_circuit_map--2005.svg"
    }
];