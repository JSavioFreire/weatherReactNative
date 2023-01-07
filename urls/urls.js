const keyApi = '889744c07aba4964b958fa84c139abf9';
const lat = '-22.897354484400115';
const lon = '-43.57304640674875';
export const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyApi}`;

export const setIcon = (iconCode) =>{
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
}