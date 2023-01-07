import { View, ActivityIndicator } from "react-native"
import LoadingCenter from "../../components/loading/LoadingCenter";
import WeatherIcon from "../../components/weatherIcon/weatherIcon";
import { useFetch } from "../../hooks/fetch";
import { currentWeatherUrl } from "../../urls/urls";

const HomePage = () => {

    const { data } = useFetch(currentWeatherUrl);
    
    return (
        <View>
            {data ? <WeatherIcon url={data['weather'][0]['icon']}/> : <LoadingCenter/>}

        </View>
    )
}
export default HomePage;