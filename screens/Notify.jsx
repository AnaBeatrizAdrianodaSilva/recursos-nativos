import { View, Text, StyleSheet, Button } from "react-native";
import Header from "../components/Header";
import * as Notifications from "expo-notifications";
import * as Battery from "expo-battery";
import { useEffect, useState } from "react";

export default function DeviceInfo() {
  const [expoToken, setExpoToken] = useState();
  const [battery, setBattery] = useState();

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setBattery(Math.round(nivel * 100));
  }

  async function notificarExpo() {
    await bateria();
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bateria",
        subtitle: "Subtitle",
        body: "Nivel é: " + battery +"%",
      },
      trigger: { seconds: 3 },
    });
    setExpoToken(token);
  }

  return (
    <View style={styles.container}>
      <Header title="Notificação" />

      <View>
        <Text>Expo Token: {expoToken} </Text>
        <Button
          title="Enviar Notificação"
          onPress={async () => await notificarExpo()}
        />
        <Button title="Ler última notificação clicada" />
        <Button title="Ler notificações não clicadas" />
        <Button title="Mostrar Bateria" onPress={async () => notificarExpo()} />
      </View>
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
