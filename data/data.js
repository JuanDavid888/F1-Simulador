// Lista de pilotos
const pilotos = [
    { 
    id: 1, 
    nombre: "Max Verstappen", 
    equipo: "Red Bull Racing", 
    rol: "Líder",
    nacimiento: "30/09/1997",
    pais: "Países bajos", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/verstappen"
    },

    {
    id: 2, 
    nombre: "Yuki Tsunoda", 
    equipo: "Red Bull Racing", 
    rol: "Escudero", 
    nacimiento: "11/05/2000", 
    pais: "Japón", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/tsunoda" 
    },

    {
    id: 3, 
    nombre: "George Russell", 
    equipo: "Mercedes-AMG Petronas", 
    rol: "Líder", 
    nacimiento: "15/02/1998", 
    pais: "Reino Unido", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/russell"
    },

    { 
    id: 4, 
    nombre: "Kimi Antonelli", 
    equipo: "Mercedes-AMG Petronas", 
    rol: "Escudero", 
    nacimiento: "25/08/2006",
    pais: "Italia",
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/antonelli"
    },

    {
    id: 5, 
    nombre: "Charles Leclerc", 
    equipo: "Ferrari", 
    rol: "Líder",  
    nacimiento: "16/10/1997", 
    pais: "Monaco", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/leclerc" 
    },

    { 
    id: 6, 
    nombre: "Lewis Hamilton", 
    equipo: "Ferrari", 
    rol: "Escudero", 
    nacimiento: "07/01/1985", 
    pais: "Reino Unido", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/hamilton" 
    },

    { 
    id: 7, 
    nombre: "Lando Norris", 
    equipo: "McLaren", 
    rol: "Líder", 
    nacimiento: "13/11/1999", 
    pais: "Reino Unido", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/piastri" 
    },

    { 
    id: 8, 
    nombre: "Oscar Piastri", 
    equipo: "McLaren", 
    rol: "Escudero", 
    nacimiento: "06/04/2001", 
    pais: "Australia", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/norris" 
    },

    {
    id: 9, 
    nombre: "Fernando Alonso", 
    equipo: "Aston Martin", 
    rol: "Líder", 
    nacimiento: "29/07/1981", 
    pais: "España", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/stroll" 
    },

    { 
    id: 10, 
    nombre: "Lance Stroll", 
    equipo: "Aston Martin", 
    rol: "Escudero", 
    nacimiento: "29/10/1986", 
    pais: "Canada", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/alonso" 
    },

    { 
    id: 11, 
    nombre: "Jack Doohan", 
    equipo: "Alpine", 
    rol: "Líder", 
    nacimiento: "20/01/2003", 
    pais: "Australia", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/gasly" 
    },

    { 
    id: 12, 
    nombre: "Pierre Gasly", 
    equipo: "Alpine", 
    rol: "Escudero", 
    nacimiento: "07/02/1996", 
    pais: "Francia", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/doohan" 
    },

    { 
    id: 13, 
    nombre: "Nico Hulkenberg", 
    equipo: "Kick Sauber", 
    rol: "Líder",  
    nacimiento: "19/08/1987", 
    pais: "Alemania", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/hulkenberg" 
    },

    { 
    id: 14, 
    nombre: "Gabriel Bortoleto", 
    equipo: "Kick Sauber", 
    rol: "Escudero", 
    nacimiento: "14/10/2004", 
    pais: "Brasil", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/bortoleto" 
    },

    { 
    id: 15, 
    nombre: "Esteban Ocon", 
    equipo: "Haas", 
    rol: "Líder",  
    nacimiento: "17/09/1996", 
    pais: "Francia", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/ocon" 
    },

    { 
    id: 16, 
    nombre: "Oliver Bearman", 
    equipo: "Haas", 
    rol: "Escudero", 
    nacimiento: "08/05/2005", 
    pais: "Reino Unido", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/bearman" 
    },

    {
    id: 17, 
    nombre: "Liam Lawson", 
    equipo: "Racing Bulls", 
    rol: "Líder", 
    nacimiento: "11/02/2002", 
    pais: "Nueva Zelanda", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/fom-website/drivers/2025Drivers/lawson-racing-bulls" 
    },

    { 
    id: 18, 
    nombre: "Isack Hadjar", 
    equipo: "Racing Bulls", 
    rol: "Escudero", 
    nacimiento: "28/09/2004", 
    pais: "Francia", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/hadjar" },

    { 
    id: 19, 
    nombre: "Alexander Albon", 
    equipo: "Williams", 
    rol: "Líder", 
    nacimiento: "23/03/1996", 
    pais: "Tailandia", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/albon" 
    },

    { 
    id: 20, 
    nombre: "Carlos Sainz", 
    equipo: "Williams", 
    rol: "Escudero", 
    nacimiento: "01/09/1994", 
    pais: "España", 
    imagen: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/sainz" 
    }
]

// Lista de equipos con sus pilotos
const equipos = [
    {
    id: 1,
    nombre: "Red Bull Racing",
    pais: "Austria",
    motor: "Honda",
    pilotos: [`${pilotos[0].imagen}`, `${pilotos[1].imagen}`], // IDs de pilotos
    imagen: "https://cdn-5.motorsport.com/images/mgl/Y99JQRbY/s8/red-bull-racing-logo-1.jpg"
    },
    {
    id: 2,
    nombre: "Mercedes-AMG Petronas",
    pais: "Alemania",
    motor: "Mercedes",
    pilotos: [`${pilotos[2].imagen}`, `${pilotos[3].imagen}`],
    imagen: "https://cdn-7.motorsport.com/images/mgl/0RrzmDo0/s8/mercedes-f1-logo-1.jpg"
    },
    {
    id: 3,
    nombre: "Ferrari",
    pais: "Italia",   
    motor: "Ferrari",
    pilotos: [`${pilotos[4].imagen}`, `${pilotos[5].imagen}`],
    imagen: "https://images1.autocasion.com/actualidad/wp-content/uploads/2015/12/Qu%C3%A9-significa-el-Logo-de-Ferrari--300x200.jpg"
    },
    {
    id: 4,
    nombre: "McLaren",
    pais: "Inglaterra",
    motor: "McLaren",
    pilotos: [`${pilotos[6].imagen}`, `${pilotos[7].imagen}`],
    imagen: "https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2025/01/23171426/mclaren-logo-2024.jpg"
    },
    {
    id: 5,
    nombre: "Aston Martin",
    pais: "Inglaterra",
    motor: "Aston Martin",
    pilotos: [`${pilotos[8].imagen}`, `${pilotos[9].imagen}`],
    imagen: "https://images.daznservices.com/di/library/DAZN_News/e1/b0/2022-03-11-logo-aston-martin-f1-formula-1_11gxc0mj1vntq1xetpipewcfoc.jpg?t=2021864903"
    },
    {
    id: 6,
    nombre: "Alpine",
    pais: "Francia",
    motor: "Alpine",
    pilotos: [`${pilotos[10].imagen}`, `${pilotos[11].imagen}`],
    imagen: "https://cdn.group.renault.com/alp/master/formula-1/homepage/alpine-F1-home-013-mobile.jpg.ximg.xsmall.jpg/114c58d502.jpg"
    },
    {
    id: 7,
    nombre: "Kick Sauber",
    pais: "Italia",
    motor: "Alfa Romeo",
    pilotos: [`${pilotos[12].imagen}`, `${pilotos[13].imagen}`],
    imagen: "https://pbs.twimg.com/profile_images/1838256124438421505/F6SzatG3_400x400.png"
    },
    {
    id: 8,
    nombre: "Haas",
    pais: "Alemania",
    motor: "Haas",
    pilotos: [`${pilotos[14].imagen}`, `${pilotos[15].imagen}`],
    imagen: "https://fanabox.com/cdn/shop/files/grosjeanhaascap4_480x480_a49953a4-ad49-470b-bd98-206744efbe97.jpg?v=1682635073&width=720"
    },
    {
    id: 9,
    nombre: "Racing Bulls",
    pais: "Italia",
    motor: "AlphaTauri",
    pilotos: [`${pilotos[16].imagen}`, `${pilotos[17].imagen}`],
    imagen: "https://r.testifier.nl/Acbs8526SDKI/resizing_type:fit/watermark:Visa%20Cash%20App%20RB%20F1%20Team/width:1080/height:720/plain/https://s3-newsifier.ams3.digitaloceanspaces.com/gpblog.com/images/2025-03/815fd2a24f576b26e7a23eb3ad338cd326e2fd93.jpg@webp"
    },
    {   
    id: 10,
    nombre: "Williams",
    pais: "Inglaterra",
    motor: "RedBull",
    pilotos: [`${pilotos[18].imagen}`, `${pilotos[19].imagen}`],
    imagen: "https://img.freepik.com/vector-premium/logotipo-w-blanco-negro-flecha-azul-sobre-fondo-negro_853558-1301.jpg"
    },
];

// Lista de circuitos con estadísticas y ganadores históricos
const circuitos = [
    {
    id: 1,
    nombre: "Circuito de Mónaco",
    pais: "Mónaco",
    longitud_km: 3.34,
    vueltas: 78,
    descripcion: "Circuito prestigioso y desafiante, conocido por sus calles estrechas y pocas zonas de adelantamiento.",
    record_vuelta: { tiempo: "1:10.166", piloto: "Lewis Hamilton", año: 2019 },
    ganadores: [
    { temporada: 2021, piloto: 1 },
    { temporada: 2022, piloto: 2 },
    { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://www.f1cfa.com/images/post/D51_C07-22-MONACO-Monaco.JPG"
    }, // imagen: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/06/03/16857725131564.gif" (gif)

    {
    id: 2,
    nombre: "Silverstone",
    pais: "Reino Unido",
    longitud_km: 5.89,
    vueltas: 52,
    descripcion: "Circuito muy rápido, destacado por curvas veloces como Maggotts y Becketts.",
    record_vuelta: { tiempo: "1:27.097", piloto: "Max Verstappen", año: 2020 },
    ganadores: [
    { temporada: 2021, piloto: 3 },
    { temporada: 2022, piloto: 5 },
    { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://images.daznservices.com/di/library/DAZN_News/98/97/gp-gran-bretana-silverstone-formula-1_dt6k7j6rsv581l0s95h8v31fh.jpg?t=-1438907127"
    },

    {
    id: 3,
    nombre: "Circuito de Spa-Francorchamps",
    pais: "Bélgica",
    longitud_km: 7.00,
    vueltas: 44,
    descripcion: "Circuito icónico con la curva Eau Rouge y la recta de Kemmel, donde la potencia del motor es crucial.",
    record_vuelta: { tiempo: "1:46.286", piloto: "Valtteri Bottas", año: 2018 },
    ganadores: [
    { temporada: 2021, piloto: 1 },
    { temporada: 2022, piloto: 1 },
    { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://images.daznservices.com/di/library/DAZN_News/ec/a/spa-gp-de-belgica-gran-premio-de-belgica-formula-1-f1_sf3v3dosh31t154gh2mug3par.jpg?t=-970892422"
    },

    {
    id: 4,
    nombre: "Circuito de Monza",
    pais: "Italia",
    longitud_km: 5.79,
    vueltas: 53,
    descripcion: "Monza, el circuito más rápido, destaca por sus largas rectas y chicanes icónicas.",
    record_vuelta: { tiempo: "1:21.046", piloto: "Rubens Barrichello", año: 2004 },
    ganadores: [
    { temporada: 2021, piloto: 2 },
    { temporada: 2022, piloto: 1 },
    { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://images.daznservices.com/di/library/DAZN_News/eb/98/monza-gp-italia-gran-premio-de-italia-formula-1-f1_6ig2wzyt5ppl1i7uyv8q0dxpg.jpg?t=314989067"
    },

    {
    id: 5,
    nombre: "Interlagos",
    pais: "Brasil",
    longitud_km: 4.31, 
    vueltas: 71,
    descripcion: "Interlagos, circuito legendario con desniveles y trazado técnico, famoso por carreras emocionantes.",
    record_vuelta: { tiempo: "1:10.540", piloto: "Valtteri Bottas", año: 2018 },
    ganadores: [
    { temporada: 2021, piloto: 3 },
    { temporada: 2022, piloto: 1 },
    { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://www.f1cfa.com/images/post/6BC_C19-21-BRASIL-CarlosPace.JPG"
    },

    {
    id: 6,
    nombre: "Circuito de Yas Marina",
    pais: "Emiratos Árabes Unidos",
    longitud_km: 5.28,
    vueltas: 58,
    descripcion: "Circuito moderno en Abu Dhabi, conocido por sus finales de campeonato y su carrera nocturna.",
    record_vuelta: { tiempo: "1:39.283", piloto: "Lewis Hamilton", año: 2019 },
    ganadores: [
    { temporada: 2021, piloto: 1 },
    { temporada: 2022, piloto: 1 },
    { temporada: 2023, piloto: 3 }
    ],
    imagen: "https://www.f1cfa.com/images/post/FCD_C23-22-ABUDHABI-YasMarina.JPG"
    },

    {
    id: 7,
    nombre: "Circuito de Suzuka",
    pais: "Japón",
    longitud_km: 5.81,
    vueltas: 53,
    descripcion: "Circuito exigente en forma de ocho, famoso por curvas rápidas como 130R y la 'S' de Senna.",
    record_vuelta: { tiempo: "1:30.983", piloto: "Lewis Hamilton", año: 2019 },
    ganadores: [
    { temporada: 2021, piloto: 1 },
    { temporada: 2022, piloto: 1 },
    { temporada: 2023, piloto: 1 }
    ],
    imagen: "https://images.daznservices.com/di/library/DAZN_News/8c/b9/suzuka-f1_nd5l87nqmsbrzbrq5j9j3obw.jpg?t=-1548675717"
    }
];

// Lista de vehículos con rendimiento detallado
const vehiculos = [
    {
    id: 1,
    equipo: "Red Bull Racing",
    modelo: "RB20",
    motor: "Honda",
    velocidad_maxima_kmh: 360,
    aceleracion_0_100: 2.5,
    pilotos: [1, 2], // Max Verstappen y Sergio Pérez
    rendimiento: {
    conduccion_normal: {
    velocidad_promedio_kmh: 320,
    consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
    desgaste_neumaticos: { seco: 1.6, lluvioso: 0.9, extremo: 2.6 }
    },
    conduccion_agresiva: {
    velocidad_promedio_kmh: 340,
    consumo_combustible: { seco: 2.6, lluvioso: 2.8, extremo: 3.2 },
    desgaste_neumaticos: { seco: 2.3, lluvioso: 1.4, extremo: 3.8 }
    },
    ahorro_combustible: {
    velocidad_promedio_kmh: 300,
    consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
    desgaste_neumaticos: { seco: 1.1, lluvioso: 0.6, extremo: 1.9 }
    }
    },
    imagen: "https://www.amalgamcollection.com/cdn/shop/articles/DSCF6458_1024x1024.jpg?v=1695978601"
    },

    {
    id: 2,
    equipo: "Mercedes-AMG Petronas",
    modelo: "W15",
    motor: "Mercedes",
    velocidad_maxima_kmh: 350,
    aceleracion_0_100: 2.7,
    pilotos: [3, 4], // Lewis Hamilton y George Russell
    rendimiento: {
    conduccion_normal: {
    velocidad_promedio_kmh: 315,
    consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
    desgaste_neumaticos: { seco: 1.6, lluvioso: 0.9, extremo: 2.6 }
    },
    conduccion_agresiva: {
    velocidad_promedio_kmh: 335,
    consumo_combustible: { seco: 2.6, lluvioso: 2.8, extremo: 3.2 },
    desgaste_neumaticos: { seco: 2.3, lluvioso: 1.4, extremo: 3.8 }
    },
    ahorro_combustible: {
    velocidad_promedio_kmh: 295,
    consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
    desgaste_neumaticos: { seco: 1.1, lluvioso: 0.6, extremo: 1.9 }
    }
    },
    imagen: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_c031e02c3c434338b8d3719938ef8c3c.webp"
    },

    {
    id: 3,
    equipo: "Ferrari",
    modelo: "F40",
    motor: "Ferrari",
    velocidad_maxima_kmh: 350,
    aceleracion_0_100: 2.7,
    pilotos: [5, 6], // Charles Leclerc y Carlos Sainz
    rendimiento: {
    conduccion_normal: {
    velocidad_promedio_kmh: 310,
    consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
    desgaste_neumaticos: { seco: 1.6, lluvioso: 0.9, extremo: 2.6 }
    },
    conduccion_agresiva: {
    velocidad_promedio_kmh: 330,
    consumo_combustible: { seco: 2.6, lluvioso: 2.8, extremo: 3.2 },
    desgaste_neumaticos: { seco: 2.3, lluvioso: 1.4, extremo: 3.8 }
    },
    ahorro_combustible: {
    velocidad_promedio_kmh: 290,
    consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
    desgaste_neumaticos: { seco: 1.1, lluvioso: 0.6, extremo: 1.9 }
    }
    },
    imagen: "https://www.newsauto.it/wp-content/uploads/2023/02/F1-2023-Ferrari-SF-23-2.jpg"
    },

    {
    id: 4,
    equipo: "McLaren",
    modelo: "MP4-26",
    motor: "McLaren",
    velocidad_maxima_kmh: 352,
    aceleracion_0_100: 2.65,
    pilotos: [7, 8], // Lando Norris y Oscar Piastri
    rendimiento: {
    conduccion_normal: {
    velocidad_promedio_kmh: 312,
    consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
    desgaste_neumaticos: { seco: 1.6, lluvioso: 0.9, extremo: 2.6 }
    },
    conduccion_agresiva: {
    velocidad_promedio_kmh: 332,
    consumo_combustible: { seco: 2.6, lluvioso: 2.8, extremo: 3.2 },
    desgaste_neumaticos: { seco: 2.3, lluvioso: 1.4, extremo: 3.8 }
    },
    ahorro_combustible: {
    velocidad_promedio_kmh: 292,
    consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
    desgaste_neumaticos: { seco: 1.1, lluvioso: 0.6, extremo: 1.9 }
    }
    },
    imagen: "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0116%2Fr1278313_1296x729_16%2D9.jpg"
    },

    {
    id: 5,
    equipo: "Aston Martin",
    modelo: "DBR9",
    motor: "Aston Martin",
    velocidad_maxima_kmh: 348,
    aceleracion_0_100: 2.75,
    pilotos: [9, 10], // Lewis Hamilton y Sebastian Vettel
    rendimiento: {
    conduccion_normal: {
    velocidad_promedio_kmh: 308,
    consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
    desgaste_neumaticos: { seco: 1.6, lluvioso: 0.9, extremo: 2.6 }
    },
    conduccion_agresiva: {
    velocidad_promedio_kmh: 328,
    consumo_combustible: { seco: 2.6, lluvioso: 2.8, extremo: 3.2 },
    desgaste_neumaticos: { seco: 2.3, lluvioso: 1.4, extremo: 3.8 }
    },
    ahorro_combustible: {
    velocidad_promedio_kmh: 288,
    consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
    desgaste_neumaticos: { seco: 1.1, lluvioso: 0.6, extremo: 1.9 }
    }
    },
    imagen: "https://d3sc99wzehqi2v.cloudfront.net/images/notas/nota_17403485513310_730.jpg"
    },

    {
    id: 6,
    equipo: "Alpine",
    modelo: "A1",
    motor: "Alpine",
    velocidad_maxima_kmh: 345,
    aceleracion_0_100: 2.8,
    pilotos: [11, 12], // Pierre Gasly y Valtteri Bottas
    rendimiento: {
    conduccion_normal: {
    velocidad_promedio_kmh: 305,
    consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
    desgaste_neumaticos: { seco: 1.6, lluvioso: 0.9, extremo: 2.6 }
    },
    conduccion_agresiva: {
    velocidad_promedio_kmh: 325,
    consumo_combustible: { seco: 2.6, lluvioso: 2.8, extremo: 3.2 },
    desgaste_neumaticos: { seco: 2.3, lluvioso: 1.4, extremo: 3.8 }
    },
    ahorro_combustible: {
    velocidad_promedio_kmh: 285,
    consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
    desgaste_neumaticos: { seco: 1.1, lluvioso: 0.6, extremo: 1.9 }
    }
    },
    imagen: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_56b2ddeac8f0442c8d0424568180c8c6.webp"
    },

    {
    id: 7,
    equipo: "Kick Sauber",
    modelo: "F1",
    motor: "Kick Sauber",
    velocidad_maxima_kmh: 355,
    aceleracion_0_100: 2.7,
    pilotos: [13, 14], // Zhou Guanyu y Kenta Nagano
    rendimiento: {
    conduccion_normal: {
    velocidad_promedio_kmh: 325,
    consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
    desgaste_neumaticos: { seco: 1.6, lluvioso: 0.9, extremo: 2.6 }
    },
    conduccion_agresiva: {
    velocidad_promedio_kmh: 345,
    consumo_combustible: { seco: 2.6, lluvioso: 2.8, extremo: 3.2 },
    desgaste_neumaticos: { seco: 2.3, lluvioso: 1.4, extremo: 3.8 }
    },
    ahorro_combustible: {
    velocidad_promedio_kmh: 305,
    consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
    desgaste_neumaticos: { seco: 1.1, lluvioso: 0.6, extremo: 1.9 }
    }
    },
    imagen: "https://admin.sauber-group.nobound.com/fileadmin/_processed_/0/e/csm_C45_PR_Visual_Detailview_84e5d217c7.webp"
    },

    {
    id: 8,
    equipo: "Haas",
    modelo: "F1",
    motor: "Haas",
    velocidad_maxima_kmh: 345,
    aceleracion_0_100: 2.8,
    pilotos: [15, 16], // Yuki Tsunoda y Daniel Ricciardo
    rendimiento: {
    conduccion_normal: {
    velocidad_promedio_kmh: 308,
    consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
    desgaste_neumaticos: { seco: 1.6, lluvioso: 0.9, extremo: 2.6 }
    },
    conduccion_agresiva: {
    velocidad_promedio_kmh: 328,
    consumo_combustible: { seco: 2.6, lluvioso: 2.8, extremo: 3.2 },
    desgaste_neumaticos: { seco: 2.3, lluvioso: 1.4, extremo: 3.8 }
    },
    ahorro_combustible: {
    velocidad_promedio_kmh: 292,
    consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
    desgaste_neumaticos: { seco: 1.1, lluvioso: 0.6, extremo: 1.9 }
    }
    },
    imagen: "https://cdn-7.motorsport.com/images/mgl/YpNpL8N0/s700/haas-vf-24-livery.jpg"
    },

    {
    id: 9,
    equipo: "Racing Bulls",
    modelo: "RB20",
    motor: "Honda",
    velocidad_maxima_kmh: 350,
    aceleracion_0_100: 2.65,
    pilotos: [17, 18], // Daniel Ricciardo y Alexander Albon
    rendimiento: {
    conduccion_normal: {
    velocidad_promedio_kmh: 305,
    consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
    desgaste_neumaticos: { seco: 1.6, lluvioso: 0.9, extremo: 2.6 }
    },
    conduccion_agresiva: {
    velocidad_promedio_kmh: 320,
    consumo_combustible: { seco: 2.6, lluvioso: 2.8, extremo: 3.2 },
    desgaste_neumaticos: { seco: 2.3, lluvioso: 1.4, extremo: 3.8 }
    },
    ahorro_combustible: {
    velocidad_promedio_kmh: 285,
    consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
    desgaste_neumaticos: { seco: 1.1, lluvioso: 0.6, extremo: 1.9 }
    }
    },
    imagen: "https://e0.365dm.com/25/02/768x432/skysports-rb-vcarb-racing-bulls_6832979.jpg?20250218205334"
    },

    {
    id: 10,
    equipo: "Williams",
    modelo: "F1",
    motor: "RedBull",
    velocidad_maxima_kmh: 350,
    aceleracion_0_100: 2.7,
    pilotos: [19, 20], // Lewis Hamilton y Sebastian Vettel
    rendimiento: {
    conduccion_normal: {
    velocidad_promedio_kmh: 315,
    consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
    desgaste_neumaticos: { seco: 1.6, lluvioso: 0.9, extremo: 2.6 }
    },
    conduccion_agresiva: {
    velocidad_promedio_kmh: 335,
    consumo_combustible: { seco: 2.6, lluvioso: 2.8, extremo: 3.2 },
    desgaste_neumaticos: { seco: 2.3, lluvioso: 1.4, extremo: 3.8 }
    },
    ahorro_combustible: {
    velocidad_promedio_kmh: 295,
    consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
    desgaste_neumaticos: { seco: 1.1, lluvioso: 0.6, extremo: 1.9 }
    }
    },
    imagen: "https://cdn-2.motorsport.com/images/amp/Y998X97Y/s6/williams-racing-fw46.jpg"
    }
]

export { pilotos, equipos, circuitos, vehiculos };