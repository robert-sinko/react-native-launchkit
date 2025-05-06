import { AuthContext } from "./app/context/AuthContext";
import Navigation from "./app/router";
import "./global.css";
import { DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import colors from "tailwindcss/colors";

const auth = getAuth();
SplashScreen.preventAutoHideAsync();

const LightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    card: colors.slate[100],
    text: colors.slate[900],
    background: colors.slate[50],
  },
};
const DarkTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    card: colors.zinc[900],
    text: colors.emerald[100],
    background: colors.black,
  },
};

export default function App() {
  const { colorScheme } = useColorScheme();
  const [userId, setUserId] = useState<string | null>(null);
  const [loadingUser, setLoadingUser] = useState<boolean>(true);

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
      if (loaded && !loadingUser) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [loaded, loadingUser]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUserId(uid);
      } else {
        setUserId(null);
      }
      setLoadingUser(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={userId}>
      <Navigation theme={colorScheme === "light" ? LightTheme : DarkTheme} />
    </AuthContext.Provider>
  );
}
