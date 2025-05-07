import { SettingsParamList } from "../../../app/router";
import { Buttons } from "../components/Buttons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

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
      <Buttons
        buttons={SettingsButtons}
        handlePress={handlePress}
        type="button"
      />
    </ScrollView>
  );
}
