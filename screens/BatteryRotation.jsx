import { Text } from "react-native-paper";
import { Button, StyleSheet, View } from "react-native";
import Header from "../components/Header";

import * as Battery from "expo-battery";
import * as ScreenOrientation from "expo-screen-orientation";
import { useState } from "react";
import { useEffect } from "react";

export default function BetteryRotation() {
  const [nivelBateria, setNivelBateria] = useState();

  async function atualizarTudo() {
    bateria();
  }

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    const bateria = Math.round(nivel * 100);
    setNivelBateria(bateria);

    if (bateria <= 100 && bateria >= 75) {
      Default();
    } else if(bateria <= 74 && bateria >= 50) {
      DeitarDireita();
    } else if(bateria <= 49 && bateria >= 25) {
      DeitarEsquerda();
    } else if(bateria <= 24 && bateria >= 0) {
      ForcarInverter();
    } 
  }

  useEffect(() => {
    bateria();
  }, []);

  async function Default() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.DEFAULT
    );
  }

  async function DeitarDireita() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
  }

  async function DeitarEsquerda() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }

  async function ForcarInverter() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_DOWN
    );
  }


  return (
    <View style={styles.container}>
      <Header title="Battery Rotation" />

      <Text>Nível da Bateria: {nivelBateria}% </Text>

      <Text>
        A sua orientação de tela vai mudar de acordo com o seu nível de bateria
      </Text>

      <Button title="Atualizar" onPress={atualizarTudo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
  },
});
