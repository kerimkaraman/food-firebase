import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomepageCard({ ad, gorsel, kategori }) {
  const nav = useNavigation();
  const handleOnPress = () => {
    nav.navigate("RecipeDetails", { ad: ad });
  };

  return (
    <Pressable
      onPress={handleOnPress}
      className="box-border rounded-xl border w-[45%] border-gray-500 pb-3 m-2"
    >
      <Image
        className="rounded-tl-xl w-[100%] h-[100px] rounded-tr-xl mx-auto"
        source={{ uri: gorsel }}
      />
      <View className="gap-y-3">
        <Text className="text-center text-lg font-bold">{ad}</Text>
        <Text className="text-center tetx-sm text-[#6BD094]">{kategori}</Text>
      </View>
    </Pressable>
  );
}
