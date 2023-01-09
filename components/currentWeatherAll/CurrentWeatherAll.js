import { View, Text } from 'react-native'
import WeatherIcon from "../../components/weatherIcon/weatherIcon";
import { StyleCWA } from './styleCWA';
import { convertToCelsius } from '../../convertToCelsius/ConvertToCelsius'

const CurrentWeatherAll = (data) => {

    const currentTemp = convertToCelsius(data['data']['main']['temp']);

    return (
        <View style={StyleCWA.all}>
            <WeatherIcon iconData={data['data']['weather']} />
            <View style={StyleCWA.container}>
                <Text style={StyleCWA.weather}>{data['data']['weather'][0]['description']}</Text>
                <Text style={StyleCWA.place}>Local: {data['data']['name']}</Text>
            </View>
            <View>
                <View style={StyleCWA.currentTemp}>
                    <Text>Temperatura atual: </Text>
                    <Text style={StyleCWA.temp}>{currentTemp.toFixed(1)}°C</Text>
                </View>


               
            </View>
        </View>
    )
}

export default CurrentWeatherAll