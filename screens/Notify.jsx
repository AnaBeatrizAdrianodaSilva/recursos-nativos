import { View, Text, StyleSheet, Button } from "react-native";
import Header from "../components/Header";
import * as Notifications from "expo-notifications";
import * as Battery from "expo-battery";
import * as Device  from "expo-device";
import { useEffect, useState } from "react";

export default function DeviceInfo() {
  const [expoToken, setExpoToken] = useState();
  const [battery, setBattery] = useState();

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setBattery(Math.round(nivel * 100));
  }

  async function notificarExpo() {
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Notificação",
        subtitle: "Subtitle",
        body: "AAAAAAAAAAAAAAAAAAAAAAAAA",
      },
      trigger: { seconds: 1 },
    });
    setExpoToken(token);
  }

  async function notificarExpoBattery() {
    await bateria();
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bateria",
        subtitle: "Subtitle",
        body: "Nivel é: " + battery +"%",
      },
      trigger: { seconds: 1 },
    });
    setExpoToken(token);
  }

  async function notificarExpoDeviceName() {
    await bateria();
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Nome do Aparelho",
        subtitle: "Subtitle",
        body: "Nome do aparelho " + Device.osName,
      },
      trigger: { seconds: 1 },
    });
    setExpoToken(token);
  }

  const ultimaNotificacao = Notifications.useLastNotificationResponse();

  async function exibirAlerta() {
    alert('oi')
    console.log(ultimaNotificacao);
  }

  useEffect(() => {
    exibirAlerta();
  }, [ultimaNotificacao])

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
        <Button title="Mostrar Bateria" onPress={async () => notificarExpoBattery()} />

        <Button title="Nome do Aparelho" onPress={async () => notificarExpoDeviceName()} />
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
