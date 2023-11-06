import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import * as Camera from "expo-camera";

export default function CameraInfo() {

  const [hasPermission, setHasPermission] = useState(null);
  const [CameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = Camera.requestCameraPermissionsAsync();
      setHasPermission(status == 'granted');
    })();
  }, [])

  if(hasPermission == null) {
    return ( <View /> );
  }

  if(hasPermission == false) {
    return (<Text style={styles.contentTextStyle}>Sem permissão para acessar a câmera</Text>);
  }

  return (
    <View style={styles.container}>
      <Header title="Câmera" />

      <View style={styles.container2}>
        <Camera
          ref={(ref) => setCameraRef(ref)}
          type={type}
          ratio="4:3"
          zoom={0}
          style={styles.camera}
        />
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
  container2: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  button: {
    flex: 0.3,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
