import { StyleSheet, Text, View, Button } from "react-native";
import * as Battery from "expo-battery";
import { useState } from "react";
import { useEffect } from "react";

export default function Header({ title }) {

  const [nivelBateria, setNivelBateria] = useState();

  async function atualizarTudo() {
    bateria();
  }

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setNivelBateria(Math.round(nivel * 100));
  }

  useEffect(()=> {
    bateria()
  }, [])

  return (
    <View style={{
      backgroundColor: nivelBateria <= 100 && nivelBateria >= 80 ? 'green' : nivelBateria <= 79 && nivelBateria >= 50 ? 'yellow' : nivelBateria <= 49 && nivelBateria >= 30 ? 'orange' : 'red',
      fontWeight: 'bolder'
    }} >
      <Text style={styles.headerTextStyle}>{title}</Text>

      <Button
        title="Atualizar"
        onPress={atualizarTudo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
      paddingTop: 30,
      backgroundColor: "#606",
      paddingBottom: 5,
      paddingHorizontal: 5,
  },
  headerTextStyle: {
      marginTop: 10,
      color: 'white',
      fontWeight: 'bold',
      fontSize: 35,
      textAlign: 'center'
  },
});