import Fontawesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { Appearance, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

export default function BackButton() {
  const navigation = useNavigation();
  const colorScheme = Appearance.getColorScheme();

  return (
    <View className="m-6 mr-auto mt-8">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="h-12 w-12 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-300/20"
      >
        <Fontawesome
          name="chevron-left"
          size={18}
          color={colorScheme === "dark" ? "white" : colors.slate[800]}
          style={{
            marginLeft: -3,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
