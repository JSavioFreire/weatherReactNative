import { View } from "react-native"
import CurrentWeatherAll from "../../components/currentWeatherAll/CurrentWeatherAll";
import LoadingCenter from "../../components/loading/LoadingCenter";
import { useFetch } from "../../hooks/fetch";
import { currentWeatherUrl } from "../../urls/urls";

const HomePage = () => {

    const { data } = useFetch(currentWeatherUrl);
    return (
        <View>
            {data ? <CurrentWeatherAll data = {data} /> : <LoadingCenter />}

        </View>
    )
}
export default HomePage;