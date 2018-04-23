import { StackNavigator } from "react-navigation";
import HomeScreen from "../containers/home";
import RecipesScreen from "../containers/recipes";

const AppNavigator = StackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    RecipesScreen: { screen: RecipesScreen }
  },
  {
    initialRouteName: "HomeScreen",
    headerMode: "float"
  }
);

export default AppNavigator;
