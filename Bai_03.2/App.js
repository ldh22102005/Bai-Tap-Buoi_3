import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import NotificationScreen from "./src/screens/NotificationScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NotificationScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
