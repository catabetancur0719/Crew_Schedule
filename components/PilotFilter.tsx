import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function PilotFilter({ onSelectPilot }) {
  const [pilotSelected, setPilotSelected] = useState("");

  const pilots = [
    { key:"Catalina Betancur", value: "Catalina Betancur" },
    { key:"Andres Betancur", value: "Andres Betancur" },
    { key:"Juliana Orozco", value: "Juliana Orozco" },
  ];

  const handleSelection = (value) => {
    setPilotSelected(value);
    onSelectPilot(value); 
  };

  return (
    <SelectList
      setSelected={handleSelection}
      data={pilots}
      placeholder="Select a Pilot"
      boxStyles={styles.listado}
    />
  );
}

const styles = StyleSheet.create({
  listado: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "white",
  },
});
