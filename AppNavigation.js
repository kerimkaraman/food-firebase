import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Homepage from "./screens/Homepage";
import RecipeDetails from "./screens/RecipeDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";

function AppNavigation() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

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
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Signin"
          component={SignIn}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Homepage"
          component={Homepage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RecipeDetails"
          component={RecipeDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
