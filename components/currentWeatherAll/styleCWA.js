import { StyleSheet } from 'react-native';

export const StyleCWA = StyleSheet.create({
    all: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
    },
    container: {
        alignItems: 'center'
    },
    weather: {
        fontSize: 25,
        textTransform: 'capitalize',
    },
    place: {
        fontSize: 20,
        marginVertical: 20
    },
    currentTemp: {
        backgroundColor: '#BFBFBF',
        padding: 20,
        borderRadius: 15,
    },
    temp: {
        fontSize: 30
    }
})

