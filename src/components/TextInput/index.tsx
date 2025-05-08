import { TextInput as RnTextInput, TextInputProps } from "react-native";

type Props = TextInputProps;

export default function TextInput(props: Props) {
  return (
    <RnTextInput
      {...props}
      className="rounded-lg border border-slate-300/50 bg-slate-200/40 p-5 placeholder:text-slate-500 dark:border-slate-300/20 dark:bg-zinc-950 dark:text-white"
    />
  );
}
