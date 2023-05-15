import { View, Text } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BatteryInfo() {
  return (
    <View>
      <Header
        title="Battery Info"
      />
      <Footer />
    </View>
  )
}