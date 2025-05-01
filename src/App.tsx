import Navigation from "./app/router";
import "./global.css";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded] = useFonts({
    PoppinsRegular: require("./app/fonts/Poppins-Regular.ttf"),
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
