import React, { useState, useEffect } from "react";
import {  View,  Text, TextInput, TouchableOpacity, StyleSheet, Modal, Keyboard } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import PilotFilter from "./PilotFilter";
import AirplaneFilter from "./AirplaneFilter";
import { routes } from "../data/routes";

export default function CalendarModal({
  visible,
  selectedDate,
  onClose,
  onSave,
  existingData, 
}) {

  const [flightNumbers, setFlightNumbers] = useState(["", "", "", "", ""]);
  const [flightRoutes, setFlightRoutes] = useState([null, null, null, null, null]);
  const [selectedPilot, setSelectedPilot] = useState(null);
  const [selectedAirplane, setSelectedAirplane] = useState(null);

  // ✅ Carga los datos guardados si existen, o limpia si no hay nada
  useEffect(() => {
    if (existingData) {
      setFlightNumbers(existingData.flightNumbers || ["", "", "", "", ""]);
      setFlightRoutes(existingData.flightRoutes || [null, null, null, null, null]);
      setSelectedPilot(existingData.selectedPilot || null);
      setSelectedAirplane(existingData.selectedAirplane || null);
    } else {
      setFlightNumbers(["", "", "", "", ""]);
      setFlightRoutes([null, null, null, null, null]);
      setSelectedPilot(null);
      setSelectedAirplane(null);
    }
  }, [selectedDate, existingData]);

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
    setSelectedPilot(pilot);
  };

  const handleAirplaneChange = (airplane) => {
    setSelectedAirplane(airplane);
  };

  const handleSave = () => {
    const newScheduleData = {
      flightNumbers,
      flightRoutes,
      selectedPilot,
      selectedAirplane,
    };

    if (typeof onSave === "function") {
      onSave(selectedDate, newScheduleData);
    }

    onClose();
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
            <PilotFilter
              onSelectPilot={handlePilotChange}
              selectedPilot={selectedPilot}
            />
          </View>

       
          <View style={styles.filterContainer}>
            <Text style={styles.label}>Select Aircraft:</Text>
           <AirplaneFilter
              onSelectAirplane={handleAirplaneChange}
              selectedAirplane={selectedAirplane}
            />
          </View>

          {/* Números de vuelo */}
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
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss} 
              />
              {flightRoutes[index] && (
                <Text style={styles.flightInfo}>
                  {flightRoutes[index].origin} ➝ {flightRoutes[index].destination} ETD{" "}
                  {flightRoutes[index].departureTime}
                </Text>
              )}
            </View>
          ))}

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
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
  saveButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
