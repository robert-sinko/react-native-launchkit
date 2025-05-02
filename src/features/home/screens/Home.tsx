import Button from "../../../components/Button";
import Text from "../../../components/Text";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView, View } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <View className="p-6 pt-24">
        <Text className="text-4xl">Welcome to the Home Screen!</Text>
        <Button
          title="back to login"
          onPress={() => navigation.popTo("splash")}
        />
      </View>
    </SafeAreaView>
  );
}
