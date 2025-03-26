import {  StyleSheet, SafeAreaView, Text } from "react-native";

export default function Footer() {
    return (
        <SafeAreaView style={styles.container}>  

        <Text style={styles.footerText}>code by Cata Betancur</Text>

        </SafeAreaView>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex:0.1,        
        alignItems: "center", 
        justifyContent:"center", 
        backgroundColor:"#cd9ffc",        
    },

    footerText:{
        color: "white",
    },    
});
