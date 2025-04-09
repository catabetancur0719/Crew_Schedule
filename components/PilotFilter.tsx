import { SelectList } from "react-native-dropdown-select-list";
import { StyleSheet } from "react-native";

type PilotFilterProps = {
  onSelectPilot: (value: string) => void;
  selectedPilot: string | null;
};

export default function PilotFilter({ onSelectPilot, selectedPilot }: PilotFilterProps) {
  const pilots = [
    { key: "Catalina Betancur", value: "Catalina Betancur" },
    { key: "Andres Betancur", value: "Andres Betancur" },
    { key: "Juliana Orozco", value: "Juliana Orozco" },
  ];

  return (
    <SelectList
      setSelected={onSelectPilot}
      data={pilots}
      placeholder="Select a Pilot"
      boxStyles={styles.listado}
      defaultOption={selectedPilot ? { key: selectedPilot, value: selectedPilot } : undefined}
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
