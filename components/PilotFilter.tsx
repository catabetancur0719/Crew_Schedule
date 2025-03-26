import { SelectList } from "react-native-dropdown-select-list";
import { useState,  } from "react";
import { StyleSheet, } from "react-native"

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
      placeholder="select Pilot"
      boxStyles={{ margin: 10 }}
    />
  );
}


const styles = StyleSheet.create({

  lista:{},


})