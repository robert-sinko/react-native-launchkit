import Text from "../../../components/Text";
import Fontawesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import {
  Appearance,
  ColorSchemeName,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import colors from "tailwindcss/colors";

export default function ColorSchemeScreen() {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme(),
  );

  const handleColorSchemeChange = (scheme: "light" | "dark" | null) => {
    setColorScheme(scheme);
    Appearance.setColorScheme(scheme);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView>
        <TouchableOpacity
          className="h-14 justify-center border-b border-slate-200 pl-4"
          onPress={() => handleColorSchemeChange("light")}
        >
          <Text
            className="text-lg"
            fontWeight={colorScheme === "light" ? "medium" : "regular"}
          >
            Light
          </Text>
          {colorScheme === "light" && (
            <Fontawesome
              name="check"
              className="absolute right-4"
              color={colors.green[400]}
              size={16}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          className="h-14 justify-center border-b border-slate-200 pl-4"
          onPress={() => handleColorSchemeChange("dark")}
        >
          <Text
            className="text-lg"
            fontWeight={colorScheme === "dark" ? "medium" : "regular"}
          >
            Dark
          </Text>
          {colorScheme === "dark" && (
            <Fontawesome
              name="check"
              className="absolute right-4"
              color={colors.green[400]}
              size={16}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          className="h-14 justify-center border-b border-slate-200 pl-4"
          onPress={() => handleColorSchemeChange(null)}
        >
          <Text
            className="text-lg"
            fontWeight={colorScheme === null ? "medium" : "regular"}
          >
            System
          </Text>
          {colorScheme === null && (
            <Fontawesome
              name="check"
              className="absolute right-4"
              color={colors.green[400]}
              size={16}
            />
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
