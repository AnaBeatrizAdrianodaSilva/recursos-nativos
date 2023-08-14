import { Gyroscope, Magnetometer } from "expo-sensors";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c4beca",
    },
    title: {
        fontSize: 35,
        backgroundColor: '#949',
        // fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        padding: 10,
        textAlign: 'center'
    },

    info: {
        fontSize: 14,
        backgroundColor: '#5e4d85',
        color: '#fff',
        marginBottom: 10,
        padding: 10,
        textAlign: 'center'
    }
});

export default function SensorScreen() {

    const [giroscopio, setGiroscopio] = useState({});
    const [magneto, setMagneto] = useState({});
    const [coro, setCoro] = useState('gray');
    const [orientacao, setOrientacao] = useState('');

    useEffect(() => {
        Gyroscope.addListener(giroscopioListner);
        Magnetometer.addListener(magnetoListner)
    }, [])

    const giroscopioListner = (data) => {
        setGiroscopio(data);
    }

    const magnetoListner = (data) => {
        setMagneto(data);
    }


    useEffect(() => {
        if (magneto.x == -5.875 && magneto.y == 0 && magneto.z == -48.375) {
            setCoro('red');
            setOrientacao('Deitado a direita');

        } else if (magneto.x == 5.875 && magneto.y == 0 && magneto.z == -48.375) {
            setCoro('green');
            setOrientacao('Deitado a esquerda');

        } else if (magneto.y > 0.5) {
            setCoro('blue');
            setOrientacao('Vertical Up');

        } else if (magneto.y < -0.5) {
            setCoro('yellow');
            setOrientacao('Vertical Down');

            // }   else if (magneto.x > -0.625 && magneto.x < -3.8125){
            //     return 'Inclinado Right';  
            // }   else if (magneto.x > 0.625 && magneto.x < 3.625){
            //     return 'Inclinado Left';
        } else {
            setOrientacao('Ué?');
        }
    }, [giroscopio, magneto])

    return (
        <View style={styles.container}>
            <Header title="SENSOR" />
            <View style={{
                flex: 1,
                backgroundColor: coro,
            }}>
                <Text style={{ fontSize: 18 }}>
                    Giroscopio: {'\n'}
                    x: {giroscopio.x} {'\n'}
                    y: {giroscopio.y} {'\n'}
                    z: {giroscopio.z} {'\n'}
                </Text>
                <Text style={{ fontSize: 18 }}>
                    Magnetrometro: {'\n'}
                    x: {magneto.x} {'\n'}
                    y: {magneto.y} {'\n'}
                    z: {magneto.z} {'\n'}
                </Text>

                <Text style={{
                    fontSize: 18,
                }}>
                    Orientação: {orientacao}
                </Text>

            </View>
        </View>
    )
}