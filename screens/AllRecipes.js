import { SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebaseConfig";
import HomepageCard from "../components/HomepageCard";

export default function AllRecipes() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  function getData() {
    const db = database;
    const recipes = ref(db, "tarifler/");
    onValue(recipes, (snapshot) => {
      const conv = Object.values(snapshot.val());
      setData(conv);
    });
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      {isLoading ? null : (
        <FlatList
          className="px-2"
          numColumns={2}
          data={data}
          renderItem={(itemData) => {
            return (
              <HomepageCard
                key={itemData.item.id}
                ad={itemData.item.ad}
                gorsel={itemData.item.gorsel}
                kategori={itemData.item.kategori}
              />
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}

{
  /* <ScrollView contentContainerStyle={{ alignItems: "center" }}>
{isLoading
  ? null
  : data === null
  ? null
  : data.map((recipe) => {
      const { ad, id, gorsel, kategori } = recipe;
      return (
        <HomepageCard
          key={id}
          ad={ad}
          gorsel={gorsel}
          kategori={kategori}
        />
      );
    })}
</ScrollView> */
}
