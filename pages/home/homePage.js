import { View, PermissionsAndroid, Platform } from "react-native";
import CurrentWeatherAll from "../../components/currentWeatherAll/CurrentWeatherAll";
import LoadingCenter from "../../components/loading/LoadingCenter";
import { useFetch } from "../../hooks/fetch";
import { currentWeatherUrl } from "../../urls/urls";
import { styleHome } from "./StyleHomePage";
import { CurrentWeatherContext } from "../../context/currentWeatherContext";
import { useContext } from "react";
import * as Location from 'expo-location';

const HomePage = () => {
    const { latitude, setLatitude, longitude, setLongitude } = useContext(CurrentWeatherContext);
    const url = currentWeatherUrl(latitude, longitude);
    const { data } = useFetch(url);
    Platform.OS === 'android' ?
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            .then(() => {
                user();
            })
        : '';

    const user = async () => {
        const userLocation = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest, maximumAge: 10000 });
        setLatitude(userLocation['coords']['latitude']);
        setLongitude(userLocation['coords']['longitude']);
    }

    return (
        <View style={styleHome.container}>
            {data ? <CurrentWeatherAll data={data} /> : <LoadingCenter />}
        </View>
    )
}
export default HomePage;