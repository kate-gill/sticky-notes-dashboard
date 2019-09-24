import React, {useEffect, useState} from 'react';
import WeatherInfo from './WeatherInfo'


const Weather = ({theme}) => {

    const[newLocation, setNewLocation] = useState(false)   ;    
    const[error, setError] = useState(false);

    const[city, setCity] = useState(
        JSON.parse(localStorage.getItem('city')) || 'London'
    );

    const[country, setCountry] = useState(
        JSON.parse(localStorage.getItem('country')) || 'UK'
    );

    useEffect(() => {
        localStorage.setItem('city', JSON.stringify(city))
    }, [city])

    useEffect(() => {
        localStorage.setItem('country', JSON.stringify(country))
    }, [country])


    const[query, setQuery] = useState(`${city},${country}`)
    
    const[weather, setWeather] = useState(
        {
            temp: '', 
            desc: '', 
            icon: '',
            humidity: '',
            wind: ''
        }
    )

    useEffect(() => {
          
        const APP_KEY = `${process.env.REACT_APP_API_KEY}`;

        const getWeather = async () => {
   
            try {
                const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${APP_KEY}`);
                if(!response.ok){
                    setError(true);
                    throw Error(response.statusText)
                }
                const data = await response.json();
                setError(false);
                setWeather(
                    {
                        temp: data.main.temp, 
                        desc: data.weather[0].main, 
                        icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
                        humidity: data.main.humidity,
                        wind: data.wind.speed
                    }
                )
            } catch (error){
                console.log(error)
            }

        }

        getWeather()
        
    }, [query]);


    const changeLocation = () => {
        setNewLocation(true);
    }

    const updateCity = e => {
        setCity(e.target.value);
    }

    const updateCountry = e => {
        setCountry(e.target.value);
    }

    const getUpdate = e => {
        e.preventDefault();
        setQuery(`${city},${country}`);
        setNewLocation(false);
    }
   
    const locationDisplay = query.split(',');
        
    return(
        <div>
            <WeatherInfo weather={weather} error={error}/>
            {/* Form to search for another location */}
            {newLocation 
                ? (<div className="weatherForms">
                    <form className="form1" onSubmit={getUpdate}>
                        <input className={theme === 'dark' ? 'formOneDark' : 'formOneLight'} type="text" value={city} placeholder="Enter city/town" onChange={updateCity} required/>
                        <input className={theme === 'dark' ? 'formTwoDark' : 'formTwoLight'} type="text" value={country} placeholder="Enter country" onChange={updateCountry} required/>
                        <button><i className={theme === 'dark' ? 'locationBtn checkBtnDark material-icons' : 'locationBtn checkBtnLight material-icons'}>check</i></button>                        
                    </form>
                    <button onClick={() => {setNewLocation(false)}}><i className={theme === 'dark' ? 'locationBtn cancelBtnDark material-icons' : 'locationBtn cancelBtnLight material-icons'}>cancel</i></button>
                </div>) 
                : (<span className="locationHeader">
                        <button className={theme === 'dark' ? 'locationBtnDark' : 'locationBtnLight'} onClick={changeLocation}>My location: {`${locationDisplay[0].charAt(0).toUpperCase() + locationDisplay[0].slice(1)}, ${locationDisplay[1].charAt(0).toUpperCase() + locationDisplay[1].slice(1)}`}
                        <i className="locationIcon material-icons">add_location</i>
                        </button>
                </span>) 
            }
        </div>
    )
}

export default Weather;



