import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import *  as ScreenOrientation from "expo-screen-orientation";
import { Button } from "react-native";

async function Default() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.DEFAULT
  );
}

export default function MyScreenOrientation() {
  return (
    <View style={styles.container}>
      <Header title="Orientação de Tela" />

      <View>
        <Button title="Default" onPress={Default} style={{backgroundColor:'#000', color:'#fff'}} />
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      gap: 10
  },
  content: {
      flex: 1,
      gap: 20,
      padding: 20,
      alignSelf: 'center',
  },
  contentTextStyle: {
      padding: 5,
      textAlignVertical: 'center',
      minHeight: 50,
      backgroundColor: '#969',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center'
  },
  footer: {
      backgroundColor: '#888',
      paddingHorizontal: 25,
      padding: 20,
  }
});
