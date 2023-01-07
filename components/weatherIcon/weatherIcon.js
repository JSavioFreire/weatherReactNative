import { View, Image } from 'react-native';
import { setIcon } from "../../urls/urls";
import { StyleWI } from './styleWeatherIcon';

const WeatherIcon = ({ url }) => {

    const urlIcon = setIcon(url);

    return (
        <View style={StyleWI.container}>
            <Image style={StyleWI.icon} source={{ uri: urlIcon }} />
        </View>
    )
}

export default WeatherIcon