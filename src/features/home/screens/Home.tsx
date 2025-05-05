import Button from "../../../components/Button";
import Text from "../../../components/Text";
import Fontawesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView className="flex-1">
      <TouchableOpacity
        className="absolute right-8 top-16 h-12 w-12 items-center justify-center"
        onPress={() => navigation.navigate("settingsColorScheme")}
      >
        <Fontawesome name="cog" size={32} />
      </TouchableOpacity>
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
