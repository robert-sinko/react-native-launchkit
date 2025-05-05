import Anchor from "../../../components/Anchor";
import Button from "../../../components/Button";
import Divider from "../../../components/Divider";
import Text from "../../../components/Text";
import TextInput from "../../../components/TextInput";
import GoogleLogo from "../assets/google-logo";
import BackButton from "../components/BackButton";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <SafeAreaView className="flex-1">
      <BackButton />
      <View className="p-6 pt-1">
        <Text className="text-4xl">Welcome back! Glad to see you, Again!</Text>
        <View className="pt-10">
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
        <View className="pb-3 pt-4">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <TextInput
                  placeholder="Enter your password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  className="absolute right-0 h-full items-center justify-center px-5"
                  onPress={() => setShowPassword((prev) => !prev)}
                >
                  <FontAwesome
                    name={showPassword ? "eye" : "eye-slash"}
                    size={24}
                    color={colors.slate[400]}
                  />
                </TouchableOpacity>
              </View>
            )}
            name="password"
          />
        </View>
        <View className="ml-auto">
          <Anchor title="Forgot Password?" size="sm" />
        </View>
        <View className="pt-8">
          <Button title="Login" style="primary" />
        </View>
        <View className="py-14 pb-10">
          <Divider text="OR" />
        </View>
        <View className="flex-row gap-3 pt-4">
          <View className="flex-1">
            <Button style="secondary">
              <FontAwesome name="facebook" size={24} color="#1877F2" />
            </Button>
          </View>
          <View className="flex-1">
            <Button style="secondary">
              <GoogleLogo />
            </Button>
          </View>
          <View className="flex-1">
            <Button>
              <FontAwesome name="apple" size={24} />
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
