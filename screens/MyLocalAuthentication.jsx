import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as LocalAuthentication from 'expo-local-authentication';

export default function MyLocalAuthentication() {

  const autenticar = async () => {
    try {
      const disponivel = await LocalAuthentication.hasHardwareAsync();
      if (!disponivel) {
        alert('Autenticação não disponível');
        return;
      }

      const { success, error } = await LocalAuthentication.authenticateAsync();
      
      if(success) {
        alert('Autenticação com sucesso');
      } else {
        console.log(success);
        alert('Falha na autenicação');
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Authentication" />

      <View style={styles.container}>
        <TouchableOpacity 
          onPress={
            () => autenticar()
          }
        >
          <Text style={styles.text}>Autenticar</Text>
        </TouchableOpacity>
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
