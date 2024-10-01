import { useState, useEffect } from "react";

import WeatherInfo from "../services/WeatherInfo";

const Weather = ({ latlng }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        WeatherInfo.get(latlng).then(data => setWeather(data));
    }, []);

    return (
        weather ? (
            <>
                <div><strong>temperature:</strong> {Math.round((weather.main.temp - 273.15) * 100) / 100} Celsius</div>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
                <div><strong>wind:</strong> {weather.wind.speed} m/s</div>
            </>
        ) : null
    );
}

export default Weather;