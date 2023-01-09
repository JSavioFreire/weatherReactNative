import { View } from "react-native";
import CurrentWeatherAll from "../../components/currentWeatherAll/CurrentWeatherAll";
import LoadingCenter from "../../components/loading/LoadingCenter";
import { useFetch } from "../../hooks/fetch";
import { currentWeatherUrl } from "../../urls/urls";
import { styleHome } from "./StyleHomePage";
import { CurrentWeatherContext } from "../../context/currentWeatherContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { PermissionsAndroid, Platform } from 'react-native';

const HomePage = () => {
    const { latitude, setLatitude, longitude, setLongitude } = useContext(CurrentWeatherContext);
    const url = currentWeatherUrl(latitude, longitude);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isTrue, setIsTrue] = useState(false)
    const { data } = useFetch(url);

    const [location, setLocation] = useState(null);
    Platform.OS === 'android' ?
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            .then(() => {

            })
        : '';


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let locations = await Location.getCurrentPositionAsync({});
            setLocation(locations);
            setIsTrue(true)
        })();
    }, []);
    useEffect(() => {
        if (isTrue) {
            setLatitude(location['coords']['latitude'])
            setLongitude(location['coords']['longitude'])
        }
    })



    return (
        <View style={styleHome.container}>
            {data ? <CurrentWeatherAll data={data} /> : <LoadingCenter />}
        </View>
    )
}
export default HomePage;