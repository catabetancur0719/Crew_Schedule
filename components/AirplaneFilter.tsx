import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function AirplaneFilter({ onSelectAirplane }) {
  const [airplaneSelected, setAirplaneSelected] = useState("");

  const airplanes = [
    { key: "HK-4522", value: "HK-4522" },
    { key:  "HK-4775" , value: "HK-4775" },
    { key: "HK-4521", value: "HK-4521" },
  ];

  const handleSelection = (value) => {
    setAirplaneSelected(value);
    onSelectAirplane(value); // Enviar el avión seleccionado al componente padre
  };

  return (
    <SelectList
      setSelected={handleSelection}
      data={airplanes}
      placeholder="Select an Airplane"
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
