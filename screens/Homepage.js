import { createDrawerNavigator } from "@react-navigation/drawer";
import AllRecipes from "./AllRecipes";
import AddRecipe from "./AddRecipe";

export default function Homepage() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tüm Tarifler" component={AllRecipes} />
      <Drawer.Screen name="Tarif Ekle" component={AddRecipe} />
    </Drawer.Navigator>
  );
}
