import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AUTH } from "../firebaseConfig";
import { useRef, useState } from "react";

export default function SignIn({ navigation }) {
  const textInputRef = useRef(null);
  const pressHandler = () => {
    navigation.navigate("Signup");
  };

  const [inputs, setInputs] = useState({
    mail: "",
    password: "",
  });

  const handleSignUp = (inputs) => {
    const auth = AUTH;
    signInWithEmailAndPassword(auth, inputs.mail, inputs.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Homepage");
        textInputRef.current.clear();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/invalid-login-credentials") {
          Alert.alert(
            "Hata",
            "Email veya şifre yanlıştır. Lütfen tekrar deneyiniz."
          );
        }
      });
  };

  return (
    <View className="flex-1">
      <KeyboardAvoidingView behavior="padding" className="flex-1">
        <Image
          className="w-full h-[400px]"
          source={require("../assets/images/signup.jpg")}
        />
      </KeyboardAvoidingView>
      <View className="rounded-tl-3xl flex-1 gap-y-8 rounded-tr-3xl mt-[-30px] bg-white p-6">
        <Text className="pl-2 text-2xl font-bold">Giriş Yap</Text>
        <TextInput
          autoCapitalize="none"
          ref={textInputRef}
          onChangeText={(value) => {
            inputs.mail = value;
          }}
          className="text-xl p-4 bg-[#F6F6F6] rounded-xl"
          placeholder="Email"
        />
        <TextInput
          secureTextEntry={true}
          ref={textInputRef}
          onChangeText={(value) => {
            inputs.password = value;
          }}
          className="text-xl p-4 bg-[#F6F6F6] rounded-xl"
          placeholder="Şifre"
        />
        <Pressable
          onPress={() => handleSignUp(inputs)}
          className="bg-pink-600 rounded-full"
        >
          <Text className="text-center text-xl font-medium text-white py-3">
            Giriş Yap
          </Text>
        </Pressable>
        <View className="items-center flex-row justify-center">
          <Text className="items-center justify-center">
            Hesabınız yok mu ?{" "}
            <Text className="text-blue-500" onPress={pressHandler}>
              Kaydol
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
