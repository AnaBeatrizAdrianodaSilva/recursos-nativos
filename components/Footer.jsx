import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.boxBtn}>
      <Text style={styles.textBtn}>Sair</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
      backgroundColor: '#888',
      paddingHorizontal: 25,
      padding: 20,
  }
});
