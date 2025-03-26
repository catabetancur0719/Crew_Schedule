import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { StyleSheet, } from "react-native"

export default function AirplaneFilter () {
    const [airplaneSelected, setAirplaneSeleceted] = useState ("");
    
    const airplanes = [
        { key: "1", value: "HK-4522" },
        { key: "2", value: "HK-4775" },
        { key: "3", value: "HK-4521" },
    ]

return (

    <SelectList 
        setSelected={setAirplaneSeleceted}
        data={airplanes}
        placeholder="Select Airplane"
        boxStyles={styles.filter}
    
    />
)
}

const styles = StyleSheet.create({

    filter:{
        
        flexDirection:"row",


    },

})