import { useState } from "react";
import * as Notify from "expo-notifications";
import { Button, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import Header from "../components/Header";

export default function AgendamentoNotify() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const [time, setTime] = useState(3);
  const [expoToken, setExpoToken] = useState("");

  async function notify() {
    const token = await Notify.scheduleNotificationAsync({
      content: {
        title: title,
        subtitle: subTitle,
        body: content,
      },
      trigger: { seconds: parseInt(time) },
    });
    setExpoToken(token);
  }

  return (
    <View>
      <Header title="Agendamento Notificação" />

      <View>
        <Text>Agende a sua própria Notificação</Text>
        <Text>ExpoToken: { expoToken } </Text>

        <TextInput 
          label="Título" 
          value={title} 
          onChangeText={setTitle} 
        />
        <TextInput 
          label="SubTítulo" 
          value={subTitle} 
          onChangeText={setSubTitle} 
        />
        <TextInput 
          label="Conteúdo" 
          value={content} 
          onChangeText={setContent} 
        />
        <TextInput
          type="Number"
          label="Quanto tempo até aparecer a Notificação"
          value={time}
          onChangeText={setTime}
        />

        <Button onPress={notify} title="Enviat Notificação" />
      </View>
    </View>
  );
}
