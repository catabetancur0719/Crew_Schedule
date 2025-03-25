import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";


import PilotFilter from "../components/PilotFilter";
import AirplaneFilter from "@/components/AirplaneFilter";


export default function crewApp() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titleText}>Catarata Airways</Text>

      <View style={styles.filters}>
        <PilotFilter />
        <AirplaneFilter />
      </View>

</SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: { 
    flex: 1, 

  },

  titleText:{
    textAlign:"center",
    fontSize: 20,
    fontWeight:"bold",
  },


  filters:{
    marginTop:20,
    flexDirection:"row",
    justifyContent: "space-around",
    alignItems: "center",

  }
});
