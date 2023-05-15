import { View, StyleSheet, Text, Button } from 'react-native';
import * as Battery from 'expo-battery';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

export default function BatteryInfo() {

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
    <View>
      <Header
        title="Nível Bateria"
      />

      <Text>
        {nivelBateria}%
      </Text>

      <Button
        title="Atualizar"
        onPress={atualizarTudo}
      />

      <Footer />
    </View>
  )
};