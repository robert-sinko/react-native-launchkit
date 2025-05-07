import Text from "../../../components/Text";
import { SafeAreaView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-center text-4xl">Welcome to</Text>
      <Text className="text-center text-4xl" fontWeight="semibold">
        React Native Launchkit!
      </Text>
    </SafeAreaView>
  );
}
