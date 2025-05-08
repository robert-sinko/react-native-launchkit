import { app } from "../../../app/firebaseConfig";
import Anchor from "../../../components/Anchor";
import Button from "../../../components/Button";
import Divider from "../../../components/Divider";
import ErrorText from "../../../components/ErrorText";
import Text from "../../../components/Text";
import TextInput from "../../../components/TextInput";
import GoogleLogo from "../assets/google-logo";
import BackButton from "../components/BackButton";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { yupResolver } from "@hookform/resolvers/yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";
import * as yup from "yup";

const auth = getAuth(app);

const schema = yup
  .object({
    email: yup.string().label("Email").email().required(),
    password: yup.string().label("Password").required(),
  })
  .required();

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login = () => {
    const email = getValues("email");
    const password = getValues("password");
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // User signed in successfully.
        // The onAuthStateChanged listener will handle the login state.
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        if (errorCode === "auth/invalid-credential") {
          setError("email", {
            type: "manual",
            message: "Invalid email or password",
          });
        } else {
          setError("email", {
            type: "manual",
            message: "Error: " + errorCode,
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
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
          {errors.email && (
            <ErrorText>{errors.email.message?.toString()}</ErrorText>
          )}
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
          {errors.password && (
            <ErrorText>{errors.password.message?.toString()}</ErrorText>
          )}
        </View>
        <View className="ml-auto">
          <Anchor title="Forgot Password?" size="sm" />
        </View>
        <View className="pt-8">
          <Button
            title="Login"
            style="primary"
            onPress={handleSubmit(login)}
            loading={loading}
          />
        </View>
        <View className="py-14 pb-10">
          <Divider text="OR" />
        </View>
        <View className="flex-row gap-3 pt-4">
          <View className="flex-1">
            <Button onPress={() => alert("TODO: facebook login")}>
              <FontAwesome name="facebook" size={24} color="#1877F2" />
            </Button>
          </View>
          <View className="flex-1">
            <Button onPress={() => alert("TODO: google login")}>
              <GoogleLogo />
            </Button>
          </View>
          <View className="flex-1">
            <Button onPress={() => alert("TODO: apple login")}>
              <FontAwesome name="apple" size={24} />
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
