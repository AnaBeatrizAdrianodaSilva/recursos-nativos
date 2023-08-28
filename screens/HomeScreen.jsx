import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BatteryInfo from "./BatteryInfo";
import BatteryRotation from "./BatteryRotation";
import DeviceInfo from "./DeviceInfo";
import MyScreenOrientation from "./MyScreenOrientation";
import Notify from "./Notify";
import IndexScreen from "./IndexScreen";
import ContactInfo from "./ContactsInfo";
import AgendamentoNotify from "./AgendamentoNotify";
import Sensors from "./Sensors";
import Capture from "./Capture";



const Stack = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Capture" component={Capture} />
        <Stack.Screen name="Sensors" component={Sensors} />
        <Stack.Screen name="BatteryRotation" component={BatteryRotation} />
        <Stack.Screen name="Home" component={IndexScreen} />
        <Stack.Screen name="Agendamento Notificação" component={AgendamentoNotify} />
        <Stack.Screen name="Contact" component={ContactInfo} />
        <Stack.Screen name="Notificação" component={Notify} />
        <Stack.Screen name="BatteryInfo" component={BatteryInfo} />
        <Stack.Screen name="DeviceInfo" component={DeviceInfo} />
        <Stack.Screen name="Orientação" component={MyScreenOrientation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}