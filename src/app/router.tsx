import LoginScreen from "../features/auth/screens/Login";
import RegisterScreen from "../features/auth/screens/Register";
import HomeScreen from "../features/home/screens/Home";
import ColorSchemeScreen from "../features/settings/screens/ColorScheme";
import SettingsScreen from "../features/settings/screens/Settings";
import SplashScreen from "../features/splash/screens/Splash";
import { useIsSignedIn, useIsSignedOut } from "./hooks/useIsSignedId";
import Fontawesome from "@expo/vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const SettingsStack = createNativeStackNavigator({
  screens: {
    settings: {
      screen: SettingsScreen,
      options: {
        title: "Settings",
      },
    },
    colorScheme: {
      screen: ColorSchemeScreen,
      options: {
        title: "App Theme",
      },
    },
  },
});
export type SettingsParamList = StaticParamList<typeof SettingsStack>;

const AppTabs = createBottomTabNavigator({
  screens: {
    home: {
      screen: HomeScreen,
      options: {
        headerShown: false,
        animation: "none",
        title: "Home",
        tabBarIcon: ({ color }) => (
          <Fontawesome
            name="home"
            size={24}
            color={color}
            style={{ marginBottom: -3 }}
          />
        ),
      },
    },
    settingsStack: {
      screen: SettingsStack,
      options: {
        title: "Settings",
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Fontawesome
            name="cog"
            size={24}
            color={color}
            style={{ marginBottom: -3 }}
          />
        ),
      },
    },
  },
  screenOptions: {
    tabBarStyle: {
      borderTopWidth: 0,
    },
  },
});

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
            animation: "none",
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
    app: {
      initialRouteName: "app",
      if: useIsSignedIn,
      screens: {
        app: {
          screen: AppTabs,
          options: {
            headerShown: false,
            animation: "none",
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
