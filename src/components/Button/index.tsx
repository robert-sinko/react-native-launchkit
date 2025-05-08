import Text from "../Text";
import { ReactNode } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type CommonProps = TouchableOpacityProps & {
  style?: "primary" | "secondary";
  loading?: boolean;
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
      ? "w-full rounded-lg bg-emerald-900 dark:bg-emerald-950 border border-slate-300/50 dark:border-emerald-950 h-14 justify-center items-center"
      : `w-full rounded-lg bg-slate-200 dark:bg-black border border-slate-300/50 dark:border-slate-600/70 h-14 justify-center items-center`;

  const textStyle =
    props.style === "primary"
      ? "text-center text-white"
      : "text-center text-slate-800 dark:text-white";

  if (props.loading) {
    return (
      <TouchableOpacity className={buttonStyle} onPress={() => {}} disabled>
        <ActivityIndicator />
      </TouchableOpacity>
    );
  }
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
