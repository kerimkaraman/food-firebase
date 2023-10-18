import { ScrollView, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebaseConfig";
import HomepageCard from "../components/HomepageCard";

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  function getData() {
    const db = database;
    const recipes = ref(db, "tarifler/");
    onValue(recipes, (snapshot) => {
      setData(snapshot.val());
    });
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        {isLoading
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
      </ScrollView>
    </SafeAreaView>
  );
}

/*  */
