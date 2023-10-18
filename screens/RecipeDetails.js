import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebaseConfig";
import { Ionicons } from "@expo/vector-icons";

export default function RecipeDetails({ route, navigation }) {
  const { ad } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const db = database;
    const recipes = ref(db, "tarifler/");
    onValue(recipes, (snapshot) => {
      const value = snapshot.val().filter((recipe) => recipe.ad == ad);
      setData(value);
    });
    setIsLoading(false);
  }
  const handleBack = () => {
    navigation.goBack();
  };
  return isLoading
    ? null
    : data.map((recipe) => {
        const { id, ad, gorsel, yapılış, kategori, malzemeler } = recipe;
        return (
          <ScrollView className="gap-y-4" key={id}>
            <ImageBackground
              className="w-full h-[300px]"
              source={{ uri: gorsel }}
            >
              <Pressable
                onPress={handleBack}
                className="mt-16 ml-5 items-center rounded-full bg-black/[0.5] w-14 py-2"
              >
                <Ionicons name="chevron-back" size={36} color="#6BD094" />
              </Pressable>
            </ImageBackground>
            <View className="mt-[-30] rounded-tl-2xl rounded-tr-2xl">
              <View className="flex-col">
                <Text className="text-4xl font-bold text-center">{ad}</Text>
                <Text className="text-xl text-[#6BD094] mt-8 mx-auto">
                  {kategori}
                </Text>
              </View>
              <View className="px-4">
                <Text className="text-2xl font-bold">Yapılış:</Text>
                <Text>{yapılış}</Text>
              </View>
              <Text>
                {malzemeler.map((malzeme, index) => {
                  return <Text key={index}>{malzeme}</Text>;
                })}
              </Text>
            </View>
          </ScrollView>
        );
      });
}
