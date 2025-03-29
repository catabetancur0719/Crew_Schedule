import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { StyleSheet,  } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function AirplaneFilter() {
  const [airplaneSelected, setAirplaneSelected] = useState("");

  const airplanes = [
    { key: "1", value: "HK-4522" },
    { key: "2", value: "HK-4775" },
    { key: "3", value: "HK-4521" },
  ];

  return (
    <SelectList
      setSelected={setAirplaneSelected}
      data={airplanes}
      placeholder="Arplane" 
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
