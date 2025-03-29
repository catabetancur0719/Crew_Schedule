import React, { useState, useEffect } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import PilotFilter from "./PilotFilter";
import AirplaneFilter from "./AirplaneFilter";
import { routes } from "../data/routes"; 

export default function CalendarModal({ visible, selectedDate, onClose }) {
  const [flightNumbers, setFlightNumbers] = useState(["", "", "", "", ""]);
  const [flightRoutes, setFlightRoutes] = useState([null, null, null, null, null]);

  useEffect(() => {
    // Buscar la ruta correspondiente para cada número de vuelo ingresado
    const updatedRoutes = flightNumbers.map(num =>
      routes.find(route => route.id.toString() === num) || null
    );
    setFlightRoutes(updatedRoutes);
  }, [flightNumbers]);

  const handleFlightNumberChange = (text, index) => {
    const newFlightNumbers = [...flightNumbers];
    newFlightNumbers[index] = text;
    setFlightNumbers(newFlightNumbers);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <MaterialIcons name="close" size={24} color="white" />
          </TouchableOpacity>

          <Text style={styles.modalTitle}>Schedule for {selectedDate}</Text>

          <View style={styles.filterContainer}>
            <Text style={styles.label}>Select Pilot:</Text>
            <PilotFilter />
          </View>

          <View style={styles.filterContainer}>
            <Text style={styles.label}>Select Aircraft:</Text>
            <AirplaneFilter />
          </View>

          {/* Nueva sección: Flights */}
          <Text style={styles.sectionTitle}>Flights</Text>
          {flightNumbers.map((flightNumber, index) => (
            <View key={index} style={styles.flightRow}>
              <TextInput
                style={styles.flightInput}
                placeholder="Flight No."
                value={flightNumber}
                onChangeText={(text) => handleFlightNumberChange(text, index)}
                keyboardType="numeric"
                maxLength={4}
              />
              <Text style={styles.routeText}>
                {flightRoutes[index] ? `${flightRoutes[index].origin} ➝ ${flightRoutes[index].destination}` : ""}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    width: "90%",
    height: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "#ff4d4d",
    borderRadius: 15,
    padding: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  filterContainer: {
    width: "100%",
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
    color: "#333",
    marginBottom: 10,
    marginTop: 15,
    alignSelf: "flex-start",
  },
  flightRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
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
  routeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

