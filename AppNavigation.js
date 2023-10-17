import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./screens/SignUp";

function AppNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Signup"
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
