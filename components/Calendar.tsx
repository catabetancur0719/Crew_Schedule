import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import CalendarModal from "./CalendarModal";

LocaleConfig.locales["en"] = {
  monthNames: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ],
  monthNamesShort: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ],
  dayNames: [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  today: "Today",
};
LocaleConfig.defaultLocale = "en";

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [scheduledData, setScheduledData] = useState({}); // ⬅️ AQUÍ GUARDAMOS TODO

  const handleOpenModal = (day) => {
    setSelectedDate(day.dateString);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSaveSchedule = (date, newData) => {
    setScheduledData((prev) => ({
      ...prev,
      [date]: newData,
    }));
  };

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        onDayPress={handleOpenModal}
        markedDates={{
          [selectedDate]: { selected: true, disableTouchEvent: true, selectedDotColor: "#7367f090" },
        }}
      />

      <CalendarModal
      key={selectedDate}
        visible={modalVisible}
        selectedDate={selectedDate}
        onClose={handleCloseModal}
        onSave={handleSaveSchedule}
        existingData={scheduledData[selectedDate]} // 👈 Asegúrate que sea esto
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    width: "100%",
    justifyContent: "center",
    marginTop: -150,
  },
  calendar: {
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: "100%",
  },
});
