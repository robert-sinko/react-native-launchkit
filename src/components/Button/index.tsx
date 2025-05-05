import Text from "../Text";
import { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type CommonProps = TouchableOpacityProps & {
  style?: "primary" | "secondary";
};
type Props =
  | (CommonProps & {
      title: string;
      children?: never;
    })
  | (CommonProps & {
      title?: never;
      children: ReactNode;
    });

export default function Button(props: Props) {
  const buttonStyle =
    props.style === "primary"
      ? "w-full rounded-lg bg-emerald-900 dark:bg-emerald-800 border border-slate-300/50 dark:border-emerald-800 h-14 justify-center items-center"
      : "w-full rounded-lg bg-slate-200 dark:bg-emerald-950 border border-slate-300/50 dark:border-slate-600 h-14 justify-center items-center";

  const textStyle =
    props.style === "primary"
      ? "text-center text-white"
      : "text-center text-slate-800 dark:text-white";

  return (
    <TouchableOpacity className={buttonStyle} onPress={props.onPress}>
      <Text
        className={textStyle}
        fontWeight={props.style === "primary" ? "medium" : "regular"}
      >
        {props.title ?? props.children}
      </Text>
    </TouchableOpacity>
  );
}
