import { createContext, useState } from "react";

export const CurrentWeatherContext = createContext()

export const CurrentWeatherContextProvider = ({ children }) => {

    const [latitude, setLatitude] = useState('-20');
    const [longitude, setLongitude] = useState('-40');
    return (
        <CurrentWeatherContext.Provider value={{ latitude, setLatitude, longitude, setLongitude }}>
            {children}
        </CurrentWeatherContext.Provider>
    )
}