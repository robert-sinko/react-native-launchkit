import { app } from "../../../app/firebaseConfig";
import Button from "../../../components/Button";
import ErrorText from "../../../components/ErrorText";
import Text from "../../../components/Text";
import TextInput from "../../../components/TextInput";
import BackButton from "../components/BackButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, View } from "react-native";
import * as yup from "yup";

const auth = getAuth(app);

const schema = yup
  .object({
    email: yup.string().label("Email").email().required(),
    password: yup
      .string()
      .required()
      .min(6, "Password is too short - should be 8 chars minimum.")
      .label("Password"),
    confirmPassword: yup
      .string()
      .required()
      .label("Confirm password")
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

export default function RegisterScreen() {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: any) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(
        (userCredential) => {
          // User signed up successfully.
          // The onAuthStateChanged listener will handle the login state.
        },
        (error) => {
          const errorCode = error.code;

          if (errorCode === "auth/email-already-in-use") {
            setError("email", {
              type: "manual",
              message: "Email already in use",
            });
          } else {
            setError("email", {
              type: "manual",
              message: "Error: " + errorCode,
            });
          }
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <SafeAreaView className="flex-1">
      <BackButton />
      <View className="p-6 pt-1">
        <Text className="text-4xl">Welcome!</Text>
        <View className="pb-1 pt-10">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Email"
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
        <View className="py-2">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
              />
            )}
            name="password"
          />
          {errors.password && (
            <ErrorText>{errors.password.message?.toString()}</ErrorText>
          )}
        </View>
        <View className="py-2">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Confirm password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
              />
            )}
            name="confirmPassword"
          />
          {errors.confirmPassword && (
            <ErrorText>{errors.confirmPassword.message?.toString()}</ErrorText>
          )}
        </View>
        <View className="pt-10">
          <Button
            title="Register"
            onPress={handleSubmit(onSubmit)}
            style="primary"
            loading={loading}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
