import Navigation from "./app/router";
import "./global.css";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
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

  return <Navigation />;
}
