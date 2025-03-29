import { SelectList } from "react-native-dropdown-select-list";
import { useState,  } from "react";
import { StyleSheet, } from "react-native"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function PilotFilter() {
  const [pilotSelected, setPilotSelected] = useState("");

  const pilots = [
    { key: "1", value: "Catalina Betancur" },
    { key: "2", value: "Andres Betancur" },
    { key: "3", value: "Juliana Orozco" },
  ];

  return (
    <SelectList
      setSelected={setPilotSelected} 
      data={pilots} 
      placeholder="Pilot"
      
      boxStyles={styles.listado} 
      />
  );
}

const styles = StyleSheet.create({
  listado: {
      margin:10,
      borderWidth: 2, 
      borderRadius: 8,         
      borderColor: "white", 
 
  
  },
});