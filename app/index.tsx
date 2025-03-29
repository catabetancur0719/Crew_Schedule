import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schedule from "@/components/Calendar";

export default function crewApp() {
  return (
    <SafeAreaView style={styles.container}>

      <Header/>

      <Schedule/>
      
      <Footer/>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: { 
    flex: 1, 

  },

});
