import { SettingsParamList } from "../../../app/router";
import { Buttons } from "../components/Buttons";
import { SettingsButton } from "../type/SettingsButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

const AppButtons: SettingsButton[] = [
  {
    id: "theme",
    name: "App Theme",
    icon: "sun-o",
    action: "link",
  },
  {
    id: "log-out",
    name: "Log Out",
    icon: "sign-out",
  },
];
const LegalButtons: SettingsButton[] = [
  {
    id: "terms-of-service",
    name: "Terms of Service",
  },
  {
    id: "privacy-policy",
    name: "Privacy Policy",
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
      <Buttons buttons={AppButtons} handlePress={handlePress} type="button" />
      <Buttons buttons={LegalButtons} handlePress={handlePress} type="button" />
    </ScrollView>
  );
}
