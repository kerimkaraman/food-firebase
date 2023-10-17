import { View, Text, Image, TextInput, Pressable } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AUTH } from "../firebaseConfig";

export default function SignIn({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Signup");
  };

  const [inputs, setInputs] = useState({
    mail: "",
    password: "",
  });

  return (
    <View className="flex-1">
      <Image
        className="w-full h-[400px]"
        source={require("../assets/images/signup.jpg")}
      />
      <View className="rounded-tl-3xl flex-1 gap-y-8 rounded-tr-3xl mt-[-30px] bg-white p-6">
        <Text className="pl-2 text-2xl font-bold">Giriş Yap</Text>
        <View className="justify-center bg-[#F6F6F6] p-4 rounded-xl">
          <TextInput className="text-lg" placeholder="Email" />
        </View>
        <View className="justify-center bg-[#F6F6F6] p-4 rounded-xl">
          <TextInput className="text-lg" placeholder="Şifre" />
        </View>
        <Pressable className="bg-pink-600 rounded-full">
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
