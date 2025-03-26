import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import PilotFilter from "../components/PilotFilter";
import AirplaneFilter from "@/components/AirplaneFilter";

export default function Header() {
    return (
        <SafeAreaView style={styles.container}>  

            <Text style={styles.titleText}>Catarata Airways</Text>

            <View style={styles.filters}>
                <PilotFilter />
                <AirplaneFilter />
            </View>

        </SafeAreaView>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex:0.1,        
        alignItems: "center", 
        justifyContent:"center",
        backgroundColor:"#9c80f5"    
    },

    titleText: {
        fontSize: 20,
        fontWeight: "bold",
    },

    filters: {
        flexDirection: "row", 
        justifyContent: "space-around",
        alignItems:"center",
    },


});
