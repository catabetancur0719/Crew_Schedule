import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import PilotFilter from "./PilotFilter";
import AirplaneFilter from "./AirplaneFilter";
import { routes } from "../data/routes"; 

export default function CalendarModal({ visible, selectedDate, onClose }) {
  // Estado para almacenar la información por fecha
  const [schedule, setSchedule] = useState({});
  
  const currentSchedule = schedule[selectedDate] || {
    flightNumbers: ["", "", "", "", ""],
    flightRoutes: [null, null, null, null, null],
    selectedPilot: null,
    selectedAirplane: null,
  };

  const [flightNumbers, setFlightNumbers] = useState(currentSchedule.flightNumbers);
  const [flightRoutes, setFlightRoutes] = useState(currentSchedule.flightRoutes);
  const [selectedPilot, setSelectedPilot] = useState(currentSchedule.selectedPilot);
  const [selectedAirplane, setSelectedAirplane] = useState(currentSchedule.selectedAirplane);

  useEffect(() => {
    setSchedule((prev) => ({
      ...prev,
      [selectedDate]: {
        flightNumbers,
        flightRoutes,
        selectedPilot,
        selectedAirplane,
      },
    }));
  }, [flightNumbers, flightRoutes, selectedPilot, selectedAirplane, selectedDate]);

  useEffect(() => {
    const newSchedule = schedule[selectedDate] || {
      flightNumbers: ["", "", "", "", ""],
      flightRoutes: [null, null, null, null, null],
      selectedPilot: null,
      selectedAirplane: null,
    };

    setFlightNumbers(newSchedule.flightNumbers);
    setFlightRoutes(newSchedule.flightRoutes);
    setSelectedPilot(newSchedule.selectedPilot);
    setSelectedAirplane(newSchedule.selectedAirplane);
  }, [selectedDate]);

  const handleFlightNumberChange = (text, index) => {
    const newFlightNumbers = [...flightNumbers];
    newFlightNumbers[index] = text;

    const newFlightRoutes = newFlightNumbers.map((num) =>
      routes.find((route) => route.id.toString() === num) || null
    );

    setFlightNumbers(newFlightNumbers);
    setFlightRoutes(newFlightRoutes);
  };

  const handlePilotChange = (pilot) => {
    console.log("Piloto seleccionado:", pilot);
    setSelectedPilot(pilot);
  };

  const handleAirplaneChange = (airplane) => {
    console.log("Avión seleccionado:", airplane);
    setSelectedAirplane(airplane);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <MaterialIcons name="close" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.modalTitle}>Schedule for {selectedDate}</Text>

          <View style={styles.filterContainer}>
            <Text style={styles.label}>Select Pilot:</Text>
            <PilotFilter onSelectPilot={handlePilotChange} />
          </View>

          <View style={styles.filterContainer}>
            <Text style={styles.label}>Select Aircraft:</Text>
            <AirplaneFilter onSelectAirplane={handleAirplaneChange} />
          </View>

          <Text style={styles.sectionTitle}>Flights</Text>
          {flightNumbers.map((flightNumber, index) => (
            <View key={index} style={styles.flightRow}>
              <TextInput
                style={styles.flightInput}
                placeholder="Flight #"
                value={flightNumber}
                onChangeText={(text) => handleFlightNumberChange(text, index)}
                keyboardType="numeric"
                maxLength={4}
              />
              {flightRoutes[index] && (
                <Text style={styles.flightInfo}>
                  {flightRoutes[index].origin} ➝ {flightRoutes[index].destination} ETD {flightRoutes[index].departureTime}
                </Text>
              )}
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  filterContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  flightRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  flightInput: {
    width: 80,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    fontSize: 14,
    marginRight: 10,
  },
  flightInfo: {
    fontSize: 16,
    fontWeight: "bold",
  },
});