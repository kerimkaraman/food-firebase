import { createDrawerNavigator } from "@react-navigation/drawer";
import AllRecipes from "./AllRecipes";
import AddRecipe from "./AddRecipe";

export default function Homepage() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="All Recipes" component={AllRecipes} />
      <Drawer.Screen name="Add Recipe" component={AddRecipe} />
    </Drawer.Navigator>
  );
}
