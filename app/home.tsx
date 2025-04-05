import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import Header from "@/components/Header";  
import Footer from "@/components/Footer";  
import Schedule from "@/components/Calendar";  


export default function CrewSchedule() {
 
  return (
   <LinearGradient
      colors={['#7367f090', '#9c80f590', '#cd9ffc90']}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <Header />
        <Schedule />
        <Footer />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent", // Para que se vea el gradiente
  },
});
