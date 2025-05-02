import Button from "../../../components/Button";
import Text from "../../../components/Text";
import TextInput from "../../../components/TextInput";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, View } from "react-native";

export default function RegisterScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <View className="p-6 pt-24">
        <Text className="text-4xl">Welcome!</Text>
        <View className="pb-1 pt-10">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter your name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
          />
        </View>
        <View className="py-1">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter your email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
        </View>
        <View className="py-1">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter your password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
              />
            )}
            name="password"
          />
        </View>
        <View className="py-1">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Confirm your password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
              />
            )}
            name="confirmPassword"
          />
        </View>
        <View className="pt-10">
          <Button
            title="Register"
            onPress={handleSubmit((data) => console.log(data))}
            style="primary"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
