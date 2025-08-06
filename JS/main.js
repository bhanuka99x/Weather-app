const apiKey = "85a0964aea6a1aa96b9a6fd5b7a8f31d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=sri%20lanka";

// Sample weather data for demonstration
        const weatherData = {
            'new york': {
                city: 'New York',
                country: 'USA',
                temperature: 28,
                feelsLike: 32,
                condition: 'sunny',
                description: 'Sunny',
                humidity: 65,
                windSpeed: 12,
                visibility: 10,
                pressure: 1013,
                icon: ''
            },
            'london': {
                city: 'London',
                country: 'UK',
                temperature: 18,
                feelsLike: 20,
                condition: 'cloudy',
                description: 'Mostly Cloudy',
                humidity: 78,
                windSpeed: 8,
                visibility: 8,
                pressure: 1008,
                icon: '☁️'
            },
            'tokyo': {
                city: 'Tokyo',
                country: 'Japan',
                temperature: 25,
                feelsLike: 28,
                condition: 'rainy',
                description: 'Light Rain',
                humidity: 85,
                windSpeed: 15,
                visibility: 6,
                pressure: 1005,
                icon: '🌧️'
            },
            'moscow': {
                city: 'Moscow',
                country: 'Russia',
                temperature: -5,
                feelsLike: -8,
                condition: 'snowy',
                description: 'Snow',
                humidity: 90,
                windSpeed: 20,
                visibility: 3,
                pressure: 1020,
                icon: '❄️'
            },
            'paris': {
                city: 'Paris',
                country: 'France',
                temperature: 22,
                feelsLike: 24,
                condition: 'clear',
                description: 'Clear Sky',
                humidity: 60,
                windSpeed: 5,
                visibility: 12,
                pressure: 1015,
                icon: '🌤️'
            }
        };

        // Create animated particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            particlesContainer.innerHTML = '';
            
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Update current time
        function updateDateTime() {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            document.getElementById('dateTime').textContent = now.toLocaleDateString('en-US', options);
        }

        // Update weather display
        function updateWeatherDisplay(data) {
            document.getElementById('cityName').textContent = `${data.city}, ${data.country}`;
            document.getElementById('weatherIcon').textContent = data.icon;
            document.getElementById('temperature').textContent = `${data.temperature}°C`;
            document.getElementById('weatherDesc').textContent = data.description;
            document.getElementById('feelsLike').textContent = `Feels like ${data.feelsLike}°C`;
            document.getElementById('humidity').textContent = `${data.humidity}%`;
            document.getElementById('windSpeed').textContent = `${data.windSpeed} km/h`;
            document.getElementById('visibility').textContent = `${data.visibility} km`;
            document.getElementById('pressure').textContent = `${data.pressure} hPa`;
            
            // Change background based on weather condition
            document.body.className = data.condition;
        }

        // Search functionality
        function searchWeather() {
            const searchInput = document.getElementById('searchInput');
            const query = searchInput.value.toLowerCase().trim();
            
            if (!query) return;
            
            // Show loading
            document.getElementById('loading').style.display = 'block';
            document.getElementById('weatherContent').style.display = 'none';
            
            // Simulate API call delay
            setTimeout(() => {
                const data = weatherData[query];
                
                if (data) {
                    updateWeatherDisplay(data);
                } else {
                    // Show default data for unknown cities
                    const defaultData = {
                        city: searchInput.value,
                        country: 'Unknown',
                        temperature: 20,
                        feelsLike: 22,
                        condition: 'clear',
                        description: 'Clear',
                        humidity: 70,
                        windSpeed: 10,
                        visibility: 8,
                        pressure: 1010,
                        icon: ''
                    };
                    updateWeatherDisplay(defaultData);
                }
                
                // Hide loading
                document.getElementById('loading').style.display = 'none';
                document.getElementById('weatherContent').style.display = 'block';
                
                searchInput.value = '';
            }, 1500);
        }

        // Event listeners
        document.getElementById('searchBtn').addEventListener('click', searchWeather);
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchWeather();
            }
        });

        // Initialize app
        createParticles();
        updateDateTime();
        
        // Update time every minute
        setInterval(updateDateTime, 60000);
        
        // Recreation particles every 10 seconds for animation variety
        setInterval(createParticles, 10000);