import { View, ActivityIndicator } from "react-native"

const LoadingCenter = () => {
    return (
        <View style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent:'center' }}>
            <ActivityIndicator size="large" color="#4A68FF" />
        </View>
    )
}

export default LoadingCenter