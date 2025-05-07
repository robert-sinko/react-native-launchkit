import { Buttons } from "../components/Buttons";
import { SettingsButton } from "../type/SettingsButton";
import { useState } from "react";
import { Appearance, ColorSchemeName, ScrollView } from "react-native";

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
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme(),
  );
  console.log(Appearance.getColorScheme());

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
    if (["light", "dark"].includes(scheme)) {
      setColorScheme(scheme === "light" ? "light" : "dark");
      Appearance.setColorScheme(scheme === "light" ? "light" : "dark");
      return;
    } else {
      setColorScheme(null);
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
