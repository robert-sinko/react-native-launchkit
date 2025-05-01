import Button from "../../../components/Button";
import { Image, SafeAreaView, Text, View } from "react-native";

const logo = require("../assets/logo.png");

export default function SplashScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-between">
      <View className="mt-32 h-[300] w-2/3">
        <Image source={logo} className="h-full w-full" resizeMode="contain" />
      </View>
      <View className="mb-4 px-8">
        <View className="mb-4 flex-row">
          <Button style="primary" title="Login" />
        </View>
        <View className="mb-4 flex-row">
          <Button title="Register" />
        </View>
        <View className="mb-4 mt-8">
          <Text className="text-center text-sky-700">Continue as guest</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
