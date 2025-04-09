import { SelectList } from "react-native-dropdown-select-list";
import { StyleSheet } from "react-native";

export default function AirplaneFilter({ onSelectAirplane, selectedAirplane }) {
  const airplanes = [
    { key: "HK-4522", value: "HK-4522" },
    { key: "HK-4775", value: "HK-4775" },
    { key: "HK-4521", value: "HK-4521" },
  ];

  return (
    <SelectList
      setSelected={onSelectAirplane} // ✅ Pasa directamente la función del padre
      data={airplanes}
      placeholder="Select an Airplane"
      boxStyles={styles.listado}
      save="value"
      defaultOption={
        selectedAirplane ? { key: selectedAirplane, value: selectedAirplane } : undefined
      }
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
