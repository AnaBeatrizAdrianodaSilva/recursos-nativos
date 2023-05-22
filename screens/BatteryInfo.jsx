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

      <Text style={{
        color: nivelBateria <= 100 && nivelBateria >= 80 ? 'green' : nivelBateria <= 79 && nivelBateria >= 50 ? 'yellow' : nivelBateria <= 49 && nivelBateria >= 30 ? 'orange' : 'red',
        fontWeight: 'bolder'
      }}>
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
