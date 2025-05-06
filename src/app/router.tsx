import LoginScreen from "../features/auth/screens/Login";
import RegisterScreen from "../features/auth/screens/Register";
import HomeScreen from "../features/home/screens/Home";
import ColorSchemeScreen from "../features/settings/screens/ColorScheme";
import SplashScreen from "../features/splash/screens/Splash";
import { useIsSignedIn, useIsSignedOut } from "./hooks/useIsSignedId";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator({
  groups: {
    auth: {
      initialRouteName: "splash",
      if: useIsSignedOut,
      screens: {
        splash: {
          screen: SplashScreen,
          options: {
            headerShown: false,
          },
        },
        login: {
          screen: LoginScreen,
          options: {
            title: "Login",
            presentation: "modal",
            headerShown: false,
          },
        },
        register: {
          screen: RegisterScreen,
          options: {
            title: "Register",
            presentation: "modal",
            headerShown: false,
          },
        },
      },
    },
    home: {
      initialRouteName: "home",
      if: useIsSignedIn,
      screens: {
        home: {
          screen: HomeScreen,
          options: {
            headerShown: false,
            animation: "none",
          },
        },
        settingsColorScheme: {
          screen: ColorSchemeScreen,
          options: {
            title: "Color Scheme",
          },
        },
      },
    },
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
