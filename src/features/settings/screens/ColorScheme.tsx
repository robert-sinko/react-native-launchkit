import { Buttons } from "../components/Buttons";
import { SettingsButton } from "../type/SettingsButton";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Appearance, ScrollView } from "react-native";

const ColorSchemeButtons: SettingsButton[] = [
  {
    id: "light",
    name: "Light",
  },
  {
    id: "dark",
    name: "Dark",
  },
  {
    id: "system",
    name: "System Default",
  },
];

export default function ColorSchemeScreen() {
  const [colorScheme, setColorScheme] = useState<"light" | "dark" | "system">(
    "system",
  );
  useEffect(() => {
    async function loadColorScheme() {
      const scheme =
        (await ReactNativeAsyncStorage.getItem("color-scheme")) ?? "system";
      setColorScheme(scheme as "light" | "dark" | "system");
    }
    loadColorScheme();
  }, []);

  const buttons = ColorSchemeButtons.map((button) => {
    const style = !colorScheme ? "system" : colorScheme;

    if (button.id === style) {
      button.action = "checked";
    } else {
      delete button.action;
    }
    return button;
  });

  const handleColorSchemeChange = (scheme: string) => {
    setColorScheme(scheme as "light" | "dark" | "system");
    ReactNativeAsyncStorage.setItem("color-scheme", scheme);

    if (scheme === "light" || scheme === "dark") {
      Appearance.setColorScheme(scheme as "light" | "dark");
    } else {
      Appearance.setColorScheme(null);
    }
  };

  return (
    <ScrollView>
      <Buttons
        buttons={buttons}
        handlePress={handleColorSchemeChange}
        type="button"
      />
    </ScrollView>
  );
}
