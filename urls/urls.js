const keyApi = '889744c07aba4964b958fa84c139abf9';

export const currentWeatherUrl = (lat, lon) =>{
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyApi}&lang=pt_br`
}

export const setIcon = (iconCode) =>{
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
}


const otherUrl = 'api.openweathermap.org/data/2.5/forecast?lat=-22&lon=-43&appid=889744c07aba4964b958fa84c139abf9'