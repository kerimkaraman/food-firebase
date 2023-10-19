import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebaseConfig";

export default function deneme() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = database;
    const recipe = ref(db, "tarifler/");
    onValue(recipe, (snapshot) => {
      setData(value);
    });
  }, []);
  return (
    <View>
      <Text>deneme</Text>
      {console.log(data)}
    </View>
  );
}

const styles = StyleSheet.create({});
