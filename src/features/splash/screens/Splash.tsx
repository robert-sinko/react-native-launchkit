import Button from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, useColorScheme, View } from "react-native";

const lightLogo = require("../assets/react-native-launchpad-light.png");
const darkLogo = require("../assets/react-native-launchpad-dark.png");

export default function SplashScreen() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView className="flex-1 items-center justify-between">
      <View className="mt-32 h-[400] w-2/3">
        <Image
          source={colorScheme === "dark" ? darkLogo : lightLogo}
          className="h-full w-full"
          resizeMode="contain"
        />
      </View>
      <View className="mb-4 px-8">
        <View className="mb-4 flex-row">
          <Button
            style="primary"
            title="Login"
            onPress={() => navigation.navigate("login")}
          />
        </View>
        <View className="mb-4 flex-row">
          <Button
            title="Register"
            onPress={() => navigation.navigate("register")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
