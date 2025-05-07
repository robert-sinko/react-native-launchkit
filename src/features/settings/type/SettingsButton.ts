import Fontawesome from "@expo/vector-icons/FontAwesome";

type FontAwesomeIcon = keyof typeof Fontawesome.glyphMap;
export type SettingsButton = {
  id: string;
  name: string;
  icon?: FontAwesomeIcon;
  action?: "link" | "checked";
};
