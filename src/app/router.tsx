import SplashScreen from "../splash/auth/screens/Login";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator({
  initialRouteName: "splash",
  screenOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "tomato",
    },
  },
  screens: {
    splash: {
      screen: SplashScreen,
      options: {
        headerShown: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
