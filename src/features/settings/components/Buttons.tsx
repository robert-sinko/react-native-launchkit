import Text from "../../../components/Text";
import { SettingsButton } from "../type/SettingsButton";
import Fontawesome from "@expo/vector-icons/FontAwesome";
import cx from "classnames";
import { TouchableOpacity, useColorScheme, View } from "react-native";

export function Buttons({
  buttons,
  handlePress,
}: {
  type: "button" | "selector";
  buttons: SettingsButton[];
  handlePress: (id: string) => void;
}) {
  const colorScheme = useColorScheme();

  return (
    <View className="m-4 mb-0 flex-1 items-center justify-center rounded-lg bg-slate-100 dark:bg-zinc-900">
      {buttons.map((button, i) => (
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
                  i !== buttons.length - 1,
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
  );
}
