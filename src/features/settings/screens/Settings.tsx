import { SettingsParamList } from "../../../app/router";
import Text from "../../../components/Text";
import Fontawesome from "@expo/vector-icons/FontAwesome";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import cx from "classnames";
import {
  ScrollView,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

const SettingsButtons: {
  id: string;
  name: string;
  icon?: "sun-o" | "sign-out";
}[] = [
  {
    id: "theme",
    name: "App Theme",
    icon: "sun-o",
  },
  {
    id: "log-out",
    name: "Log Out",
    icon: "sign-out",
  },
  {
    id: "delete-account",
    name: "Delete Account",
  },
];
export default function SettingsScreen() {
  const navigation = useNavigation<NavigationProp<SettingsParamList>>();
  const colorScheme = useColorScheme();

  const handlePress = (id: string) => {
    switch (id) {
      case "theme":
        // Handle theme change
        navigation.navigate("colorScheme");
        break;
      case "log-out":
        // Handle log out
        break;
      case "delete-account":
        // Handle delete account
        break;
      default:
        break;
    }
  };

  return (
    <ScrollView>
      <View className="m-4 mb-0 flex-1 items-center justify-center rounded-lg bg-slate-100 dark:bg-zinc-900">
        {SettingsButtons.map((button, i) => (
          <TouchableOpacity
            key={i}
            className="w-full px-4"
            onPress={() => handlePress(button.id)}
          >
            <View className="flex-row items-center gap-2">
              {button.icon && (
                <Fontawesome
                  name={button.icon}
                  size={14}
                  color={colorScheme === "light" ? "black" : "white"}
                />
              )}
              <Text
                className={cx("flex-1 py-4 text-lg", {
                  "border-b border-b-slate-200 dark:border-b-zinc-800":
                    i !== SettingsButtons.length - 1,
                })}
              >
                {button.name}
              </Text>
              <Fontawesome
                name="chevron-right"
                size={14}
                color={colorScheme === "light" ? "black" : "white"}
                className="ml-auto"
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
