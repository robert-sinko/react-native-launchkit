import Text from "../../../components/Text";
import Fontawesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View className="flex-row items-center">
        <Fontawesome name="chevron-left" size={14} color="white" />
        <Text className="ml-2 text-xl" fontWeight="semibold">
          Back
        </Text>
      </View>
    </TouchableOpacity>
  );
}
