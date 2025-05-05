import Text from "../Text";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  size?: "sm" | "md" | "lg";
};

export default function Anchor(props: Props) {
  const sizeStyle = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };
  const sizeClass = sizeStyle[props.size || "md"];

  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text className={`${sizeClass} text-sky-700 dark:text-sky-300`}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
