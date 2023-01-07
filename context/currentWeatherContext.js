import { createContext, useState } from "react";

export const CurrentWeatherContext = createContext()

export const CurrentWeatherContextProvider = ({ children }) => {

    const [CurrentWeatherContext, setCurrentWeatherContext] = useState()
    return (
        <CurrentWeatherContext.Provider value={{ CurrentWeatherContext, setCurrentWeatherContext }}>
            {children}
        </CurrentWeatherContext.Provider>
    )
}