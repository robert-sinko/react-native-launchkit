import { Text as RnText, TextProps } from "react-native";
import { twMerge } from "tailwind-merge";

type Props = TextProps & {
  fontWeight?:
    | "extralight"
    | "light"
    | "medium"
    | "regular"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
};

export default function ErrorText(props: Props) {
  const fontWeightMap = {
    extralight: "FiraSans100",
    light: "FiraSans200",
    medium: "FiraSans300",
    regular: "FiraSans400",
    semibold: "FiraSans500",
    bold: "FiraSans600",
    extrabold: "FiraSans700",
    black: "FiraSans800",
  };
  const fontWeight = fontWeightMap[props.fontWeight || "regular"];
  const fontFamily = fontWeight ? fontWeight : "FiraSans400";

  return (
    <RnText
      className={twMerge("p-1 text-red-600 dark:text-red-500", props.className)}
      style={{
        fontFamily,
      }}
    >
      {props.children}
    </RnText>
  );
}
