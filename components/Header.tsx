import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import PilotFilter from "../components/PilotFilter";
import AirplaneFilter from "@/components/AirplaneFilter";

export default function Header() {
    return (
        <SafeAreaView style={styles.container}>  

            <Text style={styles.titleText}>Catarata Airways</Text>
            
        </SafeAreaView>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1/6,        
        alignItems: "center", 
        justifyContent:"center",
        backgroundColor:"#9c80f5"    
    },

    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },

    filters: {
        flexDirection: "row", 
        justifyContent: "space-around",
        alignItems:"center", 
        
    },

    button: {
        borderWidth: 2,
        borderColor: "#ff4500",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
      


});
