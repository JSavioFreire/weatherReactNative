import { View } from "react-native"
import CurrentWeatherAll from "../../components/currentWeatherAll/CurrentWeatherAll";
import LoadingCenter from "../../components/loading/LoadingCenter";
import { useFetch } from "../../hooks/fetch";
import { currentWeatherUrl } from "../../urls/urls";
import { styleHome } from "./StyleHomePage";

const HomePage = () => {

    const { data } = useFetch(currentWeatherUrl);
    return (
        <View style={styleHome.container}>
            {data ? <CurrentWeatherAll data = {data} /> : <LoadingCenter />}

        </View>
    )
}
export default HomePage;