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
      className="box-border rounded-xl border w-[352px]  border-gray-500 pb-3 m-2"
    >
      <Image
        className="w-[350px] rounded-xl h-[300px] mx-auto"
        source={{ uri: gorsel }}
      />
      <View className="gap-y-3">
        <Text className="text-center text-2xl font-bold">{ad}</Text>
        <Text className="text-center text-[#6BD094]">{kategori}</Text>
      </View>
    </Pressable>
  );
}
