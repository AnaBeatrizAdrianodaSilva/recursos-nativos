import { NavigationContainer } from "@react-navigation/native";
import BatteryInfo from "./BatteryInfo";
import DeviceInfo from "./DeviceInfo";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MyScreenOrientation from "./MyScreenOrientation";


const Stack = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BatteryInfo" component={BatteryInfo} />
        <Stack.Screen name="DeviceInfo" component={DeviceInfo} />
        <Stack.Screen name="Orientação" component={MyScreenOrientation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}