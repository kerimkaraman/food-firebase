import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebaseConfig";
import { FlatList } from "react-native";

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  async function getData() {
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

  return <View>{isLoading ? null : <FlatList data={data} />}</View>;
}
