import Text from "../Text";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  style?: "primary" | "secondary";
};

export default function Button(props: Props) {
  const buttonStyle =
    props.style === "primary"
      ? "w-full rounded-lg bg-emerald-800 border border-slate-300/50 p-4"
      : "w-full rounded-lg bg-slate-200 border border-slate-300/50 p-4";

  const textStyle =
    props.style === "primary"
      ? "text-center text-white"
      : "text-center text-slate-800";

  return (
    <TouchableOpacity className={buttonStyle} onPress={props.onPress}>
      <Text
        className={textStyle}
        fontWeight={props.style === "primary" ? "medium" : "regular"}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
