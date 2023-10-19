import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, SafeAreaView } from "react-native";
import AppNavigation from "./AppNavigation";
import "react-native-gesture-handler";

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
