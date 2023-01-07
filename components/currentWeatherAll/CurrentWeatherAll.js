import { View, Text } from 'react-native'
import WeatherIcon from "../../components/weatherIcon/weatherIcon";

const CurrentWeatherAll = (data) => {
    return (
        <View>
            <WeatherIcon iconData={data['data']['weather']} />
            <Text>{data['data']['weather'][0]['description']}</Text>
        </View>
    )
}

export default CurrentWeatherAll