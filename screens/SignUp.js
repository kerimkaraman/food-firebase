import { View, Text, Image, TextInput, Pressable, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { AUTH } from "../firebaseConfig";

export default function Signup({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Signin");
  };

  const [inputs, setInputs] = useState({
    mail: "",
    password: "",
  });

  const handleSignUp = (inputs) => {
    const auth = AUTH;
    createUserWithEmailAndPassword(auth, inputs.mail, inputs.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return Alert.alert(errorCode, errorMessage);
      });
  };

  return (
    <View className="flex-1">
      <Image
        className="w-full h-[400px]"
        source={require("../assets/images/signup.jpg")}
      />
      <View className="rounded-tl-3xl flex-1 gap-y-5 rounded-tr-3xl mt-[-30px] bg-white p-6">
        <Text className="pl-2 text-2xl font-bold">Kaydol</Text>
        <TextInput
          onChangeText={(value) => {
            inputs.mail = value;
          }}
          className="text-xl p-4 bg-[#F6F6F6] rounded-xl"
          placeholder="Email"
        />
        <TextInput
          onChangeText={(value) => {
            inputs.password = value;
          }}
          className="text-xl p-4 bg-[#F6F6F6] rounded-xl"
          placeholder="Şifre"
        />
        <Pressable
          onPress={() => {
            handleSignUp(inputs);
          }}
          className="bg-pink-600 rounded-full"
        >
          <Text className="text-center text-xl font-medium text-white py-3">
            Kaydol
          </Text>
        </Pressable>
        <View className="items-center flex-row justify-center">
          <Text className="items-center justify-center">
            Hesabınız var mı ?{" "}
            <Text className="text-blue-500" onPress={pressHandler}>
              Giriş Yapın
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
