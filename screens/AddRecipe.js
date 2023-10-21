import { View, Text, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { ref, set } from "firebase/database";
import { database } from "../firebaseConfig";
import "react-native-get-random-values";
import { nanoid } from "nanoid";

export default function AddRecipe() {
  const id = nanoid();
  const [data, setData] = useState({
    ad: "",
    gorsel: "",
    kategori: "",
    tarif: "",
    malzemeler: "",
  });
  const handleOnPress = () => {
    const db = database;
    set(ref(db, "tarifler/" + id), {
      id: id,
      ad: data.ad,
      kategori: data.kategori,
      gorsel: data.gorsel,
      yapılış: data.tarif,
      malzemeler: [data.malzemeler.split(",")],
    });
    Alert.alert();
  };
  return (
    <ScrollView style={{ flex: 1 }} className="bg-white gap-y-6 px-5  pt-10">
      <Text className="text-2xl font-bold">Tarif Ekle(Add Recipe)</Text>
      <View className="gap-y-5">
        <TextInput
          onChangeText={(val) => (data.ad = val)}
          className="text-xl p-4 bg-[#F6F6F6] rounded-xl"
          placeholder="Ad (Name)"
        />
        <TextInput
          onChangeText={(val) => (data.gorsel = val)}
          className="text-xl p-4 bg-[#F6F6F6] rounded-xl"
          placeholder="Görsel Linki (IMG Link)"
        />
        <TextInput
          onChangeText={(val) => (data.kategori = val)}
          className="text-xl p-4 bg-[#F6F6F6] rounded-xl"
          placeholder="Kategori (Category)"
        />
        <TextInput
          onChangeText={(val) => (data.tarif = val)}
          multiline={true}
          numberOfLines={6}
          className="text-xl h-[200px] p-4 bg-[#F6F6F6] rounded-xl"
          placeholder="Tarif (Recipe)"
        />
        <TextInput
          onChangeText={(val) => (data.malzemeler = val)}
          multiline={true}
          numberOfLines={6}
          className="text-xl h-[200px] p-4 bg-[#F6F6F6] rounded-xl"
          placeholder="Malzemeler (Ingredients)"
        />
      </View>
      <Pressable
        onPress={handleOnPress}
        className="bg-pink-600 rounded-full mb-20"
      >
        <Text className="text-center text-xl font-medium text-white py-3">
          Tarifi Ekle
        </Text>
      </Pressable>
    </ScrollView>
  );
}
