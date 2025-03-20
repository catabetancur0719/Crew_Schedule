import React from "react";
import { View, StyleSheet } from "react-native";


export default function crewApp() {
  return (
    <View style={styles.container}>
      <PilotFilter /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" },
});
