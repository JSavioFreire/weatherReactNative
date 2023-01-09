import { createContext, useState } from "react";

export const CurrentWeatherContext = createContext()

export const CurrentWeatherContextProvider = ({ children }) => {

    const [latitude, setLatitude] = useState('40.6643');
    const [longitude, setLongitude] = useState('-73.9385');
    return (
        <CurrentWeatherContext.Provider value={{ latitude, setLatitude, longitude, setLongitude }}>
            {children}
        </CurrentWeatherContext.Provider>
    )
}