import {  StyleSheet, SafeAreaView, Text } from "react-native";


export default function Header() {
    return (
        <SafeAreaView style={styles.container}>  

            <Text style={styles.titleText}>Catarata Airways</Text>
            <Text style={styles.subtitle}>Crew Schedule</Text>
            
        </SafeAreaView>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1/6,        
        alignItems: "center", 
        justifyContent:"center",

    },

    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textShadowColor: "rgba(0, 0, 0, 0.5)", 
        textShadowOffset: { width: 0, height: 2 }, // Solo hacia abajo
        textShadowRadius: 4, 
    },

    subtitle:{
        color:"white",
        marginTop:20,
        fontSize:20,
        textShadowColor: "rgba(0, 0, 0, 0.5)", // Color de la sombra
        textShadowOffset: { width: 0, height: 2 }, // Solo hacia abajo
        textShadowRadius: 4, // Difuminado
    },




});
