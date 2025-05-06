import { app } from "../../../app/firebaseConfig";
import Button from "../../../components/Button";
import ErrorText from "../../../components/ErrorText";
import Text from "../../../components/Text";
import TextInput from "../../../components/TextInput";
import BackButton from "../components/BackButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, View } from "react-native";
import * as yup from "yup";

const auth = getAuth(app);

const schema = yup
  .object({
    email: yup.string().label("Email").email().required(),
    password: yup.string().label("Password").required(),
    confirmPassword: yup
      .string()
      .required()
      .label("Confirm password")
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

export default function RegisterScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);

    createUserWithEmailAndPassword(auth, data.email, data.password).then(
      (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User registered:", user);
      },
      (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error registering user:", errorCode, errorMessage);
      },
    );
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
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
