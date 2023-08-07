import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

import { Gyroscope, Magnetometer } from "expo-sensors";
import { useEffect } from "react";

export default function Sensors() {
  const [giroscopio, setGiroscopio] = useState({});
  const [magneto, setMagneto] = useState({});

  useEffect(() => {
    Gyroscope.addListener(giroscopioListner);
    Magnetometer.addListener(magnetoListner);

    // return () => {
    //   Gyroscope.removeAllListeners();
    //   Magnetometer.removeAllListeners();
    // };
  }, []);

  const giroscopioListner = (data) => {
    setGiroscopio(data);
  };

  const magnetoListner = (data) => {
    setMagneto(data);
  };

  return (
    <View style={styles.container}>
      <Header title="Sensor" />

      <View style={styles.container}>
        <Text style={styles.sensor}>
          Giroscopio: {"\n"}
          x: {giroscopio.x} {"\n"}
          y: {giroscopio.y} {"\n"}
          z: {giroscopio.z} {"\n"}
        </Text>

        <Text style={styles.sensor}>
          Magneto: {"\n"}
          x: {magneto.x} {"\n"}
          y: {magneto.y} {"\n"}
          z: {magneto.z} {"\n"}
        </Text>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  content: {
    flex: 1,
    gap: 20,
    padding: 20,
    alignSelf: "center",
  },
  contentTextStyle: {
    padding: 5,
    textAlignVertical: "center",
    minHeight: 50,
    backgroundColor: "#969",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#888",
    paddingHorizontal: 25,
    padding: 20,
  },
});
