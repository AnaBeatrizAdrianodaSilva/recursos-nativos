import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BatteryInfo from "./BatteryInfo";
import DeviceInfo from "./DeviceInfo";
import MyScreenOrientation from "./MyScreenOrientation";
import Notify from "./Notify";


const Stack = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notificação" component={Notify} />
        <Stack.Screen name="BatteryInfo" component={BatteryInfo} />
        <Stack.Screen name="DeviceInfo" component={DeviceInfo} />
        <Stack.Screen name="Orientação" component={MyScreenOrientation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}