   // Datos de los pilotos
   const drivers = [
    { id: 1, name: "Lewis Hamilton", team: "Mercedes" },
    { id: 2, name: "Max Verstappen", team: "Red Bull" },
    { id: 3, name: "Charles Leclerc", team: "Ferrari" },
    { id: 4, name: "Lando Norris", team: "McLaren" },
    { id: 5, name: "Carlos Sainz", team: "Ferrari" },
    { id: 6, name: "Sergio Pérez", team: "Red Bull" },
    { id: 7, name: "George Russell", team: "Mercedes" },
    { id: 8, name: "Fernando Alonso", team: "Aston Martin" },
    { id: 9, name: "Oscar Piastri", team: "McLaren" },
    { id: 10, name: "Pierre Gasly", team: "Alpine" },
    { id: 11, name: "Lance Stroll", team: "Aston Martin" },
    { id: 12, name: "Esteban Ocon", team: "Alpine" }
];

// Datos de los circuitos
const circuits = {
    monza: {
        name: "Autodromo Nazionale di Monza",
        country: "Italia",
        length: 5.793,
        corners: 11,
        baseTime: 80.5, // Tiempo base en segundos
        image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit.png.transform/7col/image.png",
        description: "Conocido como el 'Templo de la Velocidad', es uno de los circuitos más rápidos del calendario."
    },
    monaco: {
        name: "Circuit de Monaco",
        country: "Mónaco",
        length: 3.337,
        corners: 19,
        baseTime: 74.5,
        image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monaco_Circuit.png.transform/7col/image.png",
        description: "El circuito urbano más emblemático, conocido por sus calles estrechas y curvas cerradas."
    },
    silverstone: {
        name: "Silverstone Circuit",
        country: "Reino Unido",
        length: 5.891,
        corners: 18,
        baseTime: 85.2,
        image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png.transform/7col/image.png",
        description: "Uno de los circuitos más rápidos y fluidos, sede del primer Gran Premio de F1 de la historia."
    },
    spa: {
        name: "Circuit de Spa-Francorchamps",
        country: "Bélgica",
        length: 7.004,
        corners: 19,
        baseTime: 103.8,
        image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png.transform/7col/image.png",
        description: "Famoso por su curva Eau Rouge y por ser el circuito más largo del calendario actual."
    },
    suzuka: {
        name: "Suzuka International Racing Course",
        country: "Japón",
        length: 5.807,
        corners: 18,
        baseTime: 91.3,
        image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit.png.transform/7col/image.png",
        description: "Único circuito en forma de ocho, con una combinación de curvas técnicas y rápidas."
    }
};

// Variables globales
let currentWeather = null;
let currentResults = [];
let comparisonChart = null;

// Elementos DOM
const circuitSelect = document.getElementById('circuitSelect');
const circuitImage = document.getElementById('circuitImage');
const circuitInfo = document.getElementById('circuitInfo');
const weatherInfo = document.getElementById('weatherInfo');
const weatherIcon = document.getElementById('weatherIcon');
const weatherText = document.getElementById('weatherText');
const randomWeatherBtn = document.getElementById('randomWeatherBtn');
const tiresConfig = document.getElementById('tiresConfig');
const aeroConfig = document.getElementById('aeroConfig');
const fuelConfig = document.getElementById('fuelConfig');
const fuelValue = document.getElementById('fuelValue');
const runSimulationBtn = document.getElementById('runSimulationBtn');
const resultsBody = document.getElementById('resultsBody');
const noResults = document.getElementById('noResults');
const historyCards = document.getElementById('historyCards');
const noHistory = document.getElementById('noHistory');
const historyDetailCard = document.getElementById('historyDetailCard');
const historyDetail = document.getElementById('historyDetail');
const comparisonCircuit = document.getElementById('comparisonCircuit');
const noComparisonData = document.getElementById('noComparisonData');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    updateCircuitInfo();
    generateRandomWeather();
    loadHistory();
    
    // Event listeners
    circuitSelect.addEventListener('change', updateCircuitInfo);
    randomWeatherBtn.addEventListener('click', generateRandomWeather);
    fuelConfig.addEventListener('input', updateFuelValue);
    runSimulationBtn.addEventListener('click', runSimulation);
    comparisonCircuit.addEventListener('change', updateComparisonChart);
    
    // Inicializar valor de combustible
    updateFuelValue();
});

// Actualizar información del circuito
function updateCircuitInfo() {
    const selectedCircuit = circuits[circuitSelect.value];
    circuitImage.style.backgroundImage = `url(${selectedCircuit.image})`;
    circuitImage.style.backgroundSize = 'cover';
    circuitImage.style.backgroundPosition = 'center';
    
    circuitInfo.innerHTML = `
        <strong>${selectedCircuit.name}</strong> - ${selectedCircuit.country}<br>
        Longitud: ${selectedCircuit.length} km | Curvas: ${selectedCircuit.corners}
        <p class="mt-2">${selectedCircuit.description}</p>
    `;
}

// Generar clima aleatorio
function generateRandomWeather() {
    const weatherTypes = ['dry', 'rainy', 'extreme'];
    const randomIndex = Math.floor(Math.random() * weatherTypes.length);
    currentWeather = weatherTypes[randomIndex];
    
    weatherInfo.className = '';
    weatherInfo.classList.add(`${currentWeather}-weather`);
    
    switch(currentWeather) {
        case 'dry':
            weatherIcon.innerHTML = '<i class="fas fa-sun"></i>';
            weatherText.textContent = 'Seco';
            break;
        case 'rainy':
            weatherIcon.innerHTML = '<i class="fas fa-cloud-rain"></i>';
            weatherText.textContent = 'Lluvioso';
            break;
        case 'extreme':
            weatherIcon.innerHTML = '<i class="fas fa-bolt"></i>';
            weatherText.textContent = 'Condiciones Extremas';
            break;
    }
    
    // Sugerir neumáticos según el clima
    if (currentWeather === 'dry') {
        tiresConfig.value = 'medium';
    } else if (currentWeather === 'rainy') {
        tiresConfig.value = 'intermediate';
    } else if (currentWeather === 'extreme') {
        tiresConfig.value = 'wet';
    }
}

// Actualizar valor de combustible
function updateFuelValue() {
    fuelValue.textContent = `${fuelConfig.value} kg`;
}

// Ejecutar simulación
function runSimulation() {
    const selectedCircuit = circuits[circuitSelect.value];
    const tires = tiresConfig.value;
    const aero = parseInt(aeroConfig.value);
    const fuel = parseInt(fuelConfig.value);
    
    // Validar configuración según el clima
    if ((currentWeather === 'rainy' && tires === 'soft') || 
        (currentWeather === 'rainy' && tires === 'medium') || 
        (currentWeather === 'rainy' && tires === 'hard') ||
        (currentWeather === 'extreme' && tires !== 'wet')) {
        alert('¡Configuración de neumáticos inadecuada para las condiciones climáticas actuales!');
        return;
    }
    
    // Calcular tiempos para cada piloto
    currentResults = drivers.map(driver => {
        // Base de cálculo: tiempo base del circuito + factores aleatorios y de configuración
        let lapTime = selectedCircuit.baseTime;
        
        // Factor de habilidad del piloto (aleatorio pero consistente por piloto)
        const driverSkill = (driver.id * 0.1) % 1; // Valor entre 0 y 1
        lapTime -= driverSkill * 0.5;
        
        // Factor de equipo
        if (['Red Bull', 'Mercedes', 'Ferrari'].includes(driver.team)) {
            lapTime -= 0.3;
        } else if (['McLaren', 'Aston Martin'].includes(driver.team)) {
            lapTime -= 0.1;
        }
        
        // Efecto del clima
        if (currentWeather === 'rainy') {
            lapTime += 2.0 - (tires === 'intermediate' ? 1.5 : 0);
        } else if (currentWeather === 'extreme') {
            lapTime += 4.0 - (tires === 'wet' ? 3.0 : 0);
        } else {
            // Clima seco - efecto de los neumáticos
            if (tires === 'soft') lapTime -= 0.8;
            else if (tires === 'hard') lapTime += 0.5;
        }
        
        // Efecto de la aerodinámica
        // En circuitos con muchas curvas, alta carga aerodinámica es mejor
        const aeroEffect = (selectedCircuit.corners > 15) ? 
            (aero - 5) * 0.1 : (5 - aero) * 0.1;
        lapTime += aeroEffect;
        
        // Efecto del combustible (más combustible = más peso = más lento)
        lapTime += (fuel - 80) * 0.01;
        
        // Añadir factor aleatorio (±0.5 segundos)
        lapTime += (Math.random() - 0.5) * 1.0;
        
        // Convertir a minutos:segundos.milisegundos
        const minutes = Math.floor(lapTime / 60);
        const seconds = Math.floor(lapTime % 60);
        const milliseconds = Math.floor((lapTime % 1) * 1000);
        
        const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
        
        return {
            driver: driver.name,
            team: driver.team,
            lapTime: lapTime,
            formattedTime: formattedTime
        };
    });
    
    // Ordenar por tiempo de vuelta
    currentResults.sort((a, b) => a.lapTime - b.lapTime);
    
    // Calcular diferencias
    currentResults.forEach((result, index) => {
        if (index === 0) {
            result.difference = '-';
        } else {
            const diffTime = result.lapTime - currentResults[0].lapTime;
            const diffSeconds = Math.floor(diffTime);
            const diffMilliseconds = Math.floor((diffTime % 1) * 1000);
            result.difference = `+${diffSeconds}.${diffMilliseconds.toString().padStart(3, '0')}`;
        }
    });
    
    // Mostrar resultados
    displayResults();
    
    // Guardar en historial
    saveToHistory();
    
    // Actualizar gráfico de comparación
    updateComparisonChart();
}

// Mostrar resultados en la tabla
function displayResults() {
    resultsBody.innerHTML = '';
    noResults.style.display = 'none';
    
    currentResults.forEach((result, index) => {
        const row = document.createElement('tr');
        if (index === 0) row.classList.add('pole-position');
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${result.driver}</td>
            <td>${result.team}</td>
            <td>${result.formattedTime}</td>
            <td>${result.difference}</td>
        `;
        
        resultsBody.appendChild(row);
    });
}

// Guardar sesión en el historial (localStorage)
function saveToHistory() {
    const history = JSON.parse(localStorage.getItem('raceHistory') || '[]');
    
    const session = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        circuit: circuitSelect.value,
        weather: currentWeather,
        configuration: {
            tires: tiresConfig.value,
            aero: parseInt(aeroConfig.value),
            fuel: parseInt(fuelConfig.value)
        },
        results: currentResults
    };
    
    history.push(session);
    localStorage.setItem('raceHistory', JSON.stringify(history));
    
    // Actualizar vista de historial
    loadHistory();
}

// Cargar historial desde localStorage
function loadHistory() {
    const history = JSON.parse(localStorage.getItem('raceHistory') || '[]');
    historyCards.innerHTML = '';
    
    if (history.length === 0) {
        noHistory.style.display = 'block';
        return;
    }
    
    noHistory.style.display = 'none';
    
    // Ordenar por fecha (más reciente primero)
    history.sort((a, b) => b.id - a.id);
    
    history.forEach(session => {
        const circuitData = circuits[session.circuit];
        const weatherIcon = getWeatherIcon(session.weather);
        
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-3';
        card.innerHTML = `
            <div class="card history-card" data-session-id="${session.id}">
                <div class="card-body">
                    <h5 class="card-title">${circuitData.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${session.date}</h6>
                    <p class="card-text">
                        ${weatherIcon} ${getWeatherText(session.weather)}<br>
                        Pole: ${session.results[0].driver} (${session.results[0].formattedTime})
                    </p>
                    <button class="btn btn-sm btn-outline-primary view-details-btn">Ver detalles</button>
                </div>
            </div>
        `;
        
        historyCards.appendChild(card);
    });
    
    // Añadir event listeners a los botones de detalles
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const sessionId = parseInt(this.closest('.history-card').dataset.sessionId);
            showHistoryDetails(sessionId);
        });
    });
}

// Mostrar detalles de una sesión del historial
function showHistoryDetails(sessionId) {
    const history = JSON.parse(localStorage.getItem('raceHistory') || '[]');
    const session = history.find(s => s.id === sessionId);
    
    if (!session) return;
    
    const circuitData = circuits[session.circuit];
    
    historyDetailCard.style.display = 'block';
    historyDetail.innerHTML = `
        <h4>${circuitData.name} - ${session.date}</h4>
        <div class="row mb-4">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5>Condiciones</h5>
                        <p>
                            <i class="${getWeatherIconClass(session.weather)}"></i> ${getWeatherText(session.weather)}<br>
                            Neumáticos: ${getTiresText(session.configuration.tires)}<br>
                            Aerodinámica: ${session.configuration.aero}/10<br>
                            Combustible: ${session.configuration.fuel} kg
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <img src="${circuitData.image}" class="img-fluid rounded" alt="${circuitData.name}">
            </div>
        </div>
        
        <h5>Resultados</h5>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Piloto</th>
                        <th>Equipo</th>
                        <th>Tiempo</th>
                        <th>Diferencia</th>
                    </tr>
                </thead>
                <tbody>
                    ${session.results.map((result, index) => `
                        <tr class="${index === 0 ? 'pole-position' : ''}">
                            <td>${index + 1}</td>
                            <td>${result.driver}</td>
                            <td>${result.team}</td>
                            <td>${result.formattedTime}</td>
                            <td>${result.difference}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// Actualizar gráfico de comparación
function updateComparisonChart() {
    const history = JSON.parse(localStorage.getItem('raceHistory') || '[]');
    const selectedCircuit = comparisonCircuit.value;
    
    // Filtrar sesiones por circuito seleccionado
    const circuitSessions = history.filter(session => session.circuit === selectedCircuit);
    
    if (circuitSessions.length === 0) {
        noComparisonData.style.display = 'block';
        if (comparisonChart) {
            comparisonChart.destroy();
            comparisonChart = null;
        }
        return;
    }
    
    noComparisonData.style.display = 'none';
    
    // Preparar datos para el gráfico
    const chartData = {
        labels: circuitSessions.map(session => {
            const date = new Date(session.date);
            return date.toLocaleDateString();
        }),
        datasets: []
    };
    
    // Obtener los 3 mejores pilotos de cada sesión
    const topDrivers = new Set();
    circuitSessions.forEach(session => {
        session.results.slice(0, 3).forEach(result => {
            topDrivers.add(result.driver);
        });
    });
    
    // Crear dataset para cada piloto
    Array.from(topDrivers).forEach(driver => {
        const driverData = circuitSessions.map(session => {
            const result = session.results.find(r => r.driver === driver);
            return result ? result.lapTime : null;
        });
        
        // Generar color aleatorio pero consistente para cada piloto
        const driverHash = hashCode(driver);
        const r = (driverHash & 0xFF0000) >> 16;
        const g = (driverHash & 0x00FF00) >> 8;
        const b = driverHash & 0x0000FF;
        const color = `rgba(${r % 200}, ${g % 200}, ${b % 200}, 0.7)`;
        
        chartData.datasets.push({
            label: driver,
            data: driverData,
            borderColor: color,
            backgroundColor: color,
            fill: false,
            tension: 0.1
        });
    });
    
    // Crear o actualizar el gráfico
    const ctx = document.getElementById('comparisonChart').getContext('2d');
    
    if (comparisonChart) {
        comparisonChart.data = chartData;
        comparisonChart.update();
    } else {
        comparisonChart = new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: `Comparación de tiempos en ${circuits[selectedCircuit].name}`
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const lapTime = context.raw;
                                if (lapTime === null) return 'No data';
                                
                                const minutes = Math.floor(lapTime / 60);
                                const seconds = Math.floor(lapTime % 60);
                                const milliseconds = Math.floor((lapTime % 1) * 1000);
                                
                                return `${context.dataset.label}: ${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        reverse: true,
                        title: {
                            display: true,
                            text: 'Tiempo de vuelta (segundos)'
                        }
                    }
                }
            }
        });
    }
}

// Funciones auxiliares
function getWeatherIcon(weather) {
    switch(weather) {
        case 'dry': return '<i class="fas fa-sun"></i>';
        case 'rainy': return '<i class="fas fa-cloud-rain"></i>';
        case 'extreme': return '<i class="fas fa-bolt"></i>';
        default: return '';
    }
}

function getWeatherIconClass(weather) {
    switch(weather) {
        case 'dry': return 'fas fa-sun';
        case 'rainy': return 'fas fa-cloud-rain';
        case 'extreme': return 'fas fa-bolt';
        default: return '';
    }
}

function getWeatherText(weather) {
    switch(weather) {
        case 'dry': return 'Seco';
        case 'rainy': return 'Lluvioso';
        case 'extreme': return 'Condiciones Extremas';
        default: return '';
    }
}

function getTiresText(tires) {
    switch(tires) {
        case 'soft': return 'Blando (Soft)';
        case 'medium': return 'Medio (Medium)';
        case 'hard': return 'Duro (Hard)';
        case 'intermediate': return 'Intermedio (Wet)';
        case 'wet': return 'Lluvia Extrema (Full Wet)';
        default: return '';
    }
}

// Función para generar un hash a partir de una cadena
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0; // Convertir a entero de 32 bits
    }
    return hash;
}
