import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
  Image,
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
      const conv = Object.values(snapshot.val());

      setData(conv.filter((re) => re.ad === ad));
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
          <ScrollView className="gap-y-4 mb-10" key={id}>
            <ImageBackground
              className="w-full h-[300px]"
              source={{ uri: gorsel }}
            >
              <Pressable
                onPress={handleBack}
                className="mt-16 ml-5 items-center rounded-full bg-white/[0.5] w-14 py-2"
              >
                <Ionicons name="chevron-back" size={36} color="black" />
              </Pressable>
            </ImageBackground>
            <View className="flex-col mt-[-30] rounded-tl-2xl rounded-tr-2xl">
              <Text className="text-4xl font-bold text-center">{ad}</Text>
              <Text className="text-xl text-[#6BD094] mt-8 mx-auto">
                {kategori}
              </Text>
            </View>
            <View className="px-4 gap-y-2">
              <View className="flex-row items-center gap-x-2">
                <Image
                  className="w-[24px] h-[24px] object-cover"
                  source={require("../assets/images/recipe.png")}
                />
                <Text className="text-xl font-semibold">Tarif</Text>
              </View>
              <Text>{yapılış}</Text>
            </View>
            <View className="px-4 gap-y-2">
              <View className="flex-row items-center gap-x-2">
                <Image
                  className="w-[24px] h-[24px] object-cover"
                  source={require("../assets/images/ingredients.png")}
                />
                <Text className="text-xl font-semibold">Malzemeler</Text>
              </View>
              <View>
                {malzemeler.map((malzeme, index) => {
                  return <Text key={index}>{malzeme}</Text>;
                })}
              </View>
            </View>
          </ScrollView>
        );
      });
}
