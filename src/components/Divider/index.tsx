import Text from "../Text";
import { View, ViewProps } from "react-native";

type Props = ViewProps & {
  text?: string;
};

export default function Divider(props: Props) {
  return (
    <View className="relative mt-3">
      <View className="h-[1px] bg-slate-300/50" />
      <View className="-mt-3 ml-auto mr-auto h-6 justify-center bg-slate-100 px-3 dark:bg-black">
        <Text className="text-slate-500" fontWeight="medium">
          {props.text}
        </Text>
      </View>
    </View>
  );
}
