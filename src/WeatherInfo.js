import React from 'react';

const WeatherInfo = ( {weather, error} ) => {
    return(
        <div>
        {error 
            ? (<h1 className="errorMessage">Sorry, looks like this location is not found...</h1>) 
            : (<div>
                {weather && <div className="weatherDesc">
                    <p><i className='iconWeather fas fa-water'></i> Humidity: {weather.humidity}%</p>
                    <p className="weatherInfo"><i className='iconWeather fas fa-wind'></i> Wind speed: {weather.wind}m/h</p>
                </div>}
                {weather && <div className="weatherContainer">
                    <span className="emoji2">&#127777;</span><p className="p2">Current weather: </p>
                    <div>
                        <p className="tempP">{Math.round(weather.temp)}&#8451;</p>
                    </div>
                    <div className="weatherIcons">
                        <p>{weather.desc}</p>
                        <img className="iconWeather" src={weather.icon} alt="icon"/>
                    </div>
                </div>} 
            </div>)}
        </div>
    )
}


export default WeatherInfo;