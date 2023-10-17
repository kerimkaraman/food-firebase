import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";

export default function Signup() {
  return (
    <View>
      <Image
        className="w-full h-[400px]"
        source={require("../assets/images/signup.jpg")}
      />
      <View className="rounded-tl-3xl gap-y-5 rounded-tr-3xl mt-[-30px] bg-white p-6">
        <Text className="text-xl">Kaydol</Text>
        <View className="justify-center bg-[#F6F6F6] p-4 rounded-xl">
          <TextInput className="text-lg" placeholder="Email" />
        </View>
        <View className="justify-center bg-[#F6F6F6] p-4 rounded-xl">
          <TextInput className="text-lg" placeholder="Şifre" />
        </View>
        <Pressable className="bg-pink-600 rounded-full">
          <Text className="text-center text-xl font-bold text-white py-3">
            Kaydol
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
