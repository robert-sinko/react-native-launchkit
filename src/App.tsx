import Navigation from "./app/router";
import "./global.css";
import { DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import colors from "tailwindcss/colors";

SplashScreen.preventAutoHideAsync();

const LightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    card: colors.emerald[200],
    text: colors.emerald[900],
    background: colors.slate[50],
  },
};
const DarkTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    card: colors.emerald[900],
    text: colors.emerald[100],
    background: colors.black,
  },
};

export default function App() {
  const { colorScheme } = useColorScheme();

  const [loaded] = useFonts({
    FiraSans100: require("./app/fonts/FiraSans-ExtraLight.ttf"),
    FiraSans200: require("./app/fonts/FiraSans-Light.ttf"),
    FiraSans300: require("./app/fonts/FiraSans-Medium.ttf"),
    FiraSans400: require("./app/fonts/FiraSans-Regular.ttf"),
    FiraSans500: require("./app/fonts/FiraSans-SemiBold.ttf"),
    FiraSans600: require("./app/fonts/FiraSans-Bold.ttf"),
    FiraSans700: require("./app/fonts/FiraSans-ExtraBold.ttf"),
    FiraSans800: require("./app/fonts/FiraSans-Black.ttf"),
    FiraSans900: require("./app/fonts/FiraSans-Black.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      if (loaded) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [loaded]);

  return (
    <Navigation theme={colorScheme === "light" ? LightTheme : DarkTheme} />
  );
}
