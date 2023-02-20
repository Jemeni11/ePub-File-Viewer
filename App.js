import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import EpubFiles from "./screens/EpubFiles";
// Expo Dev Client
import "expo-dev-client";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={Home} />
        <Stack.Screen name="ePub Files Screen" component={EpubFiles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
