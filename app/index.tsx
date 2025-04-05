// app/index.tsx
import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, SafeAreaView } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { router } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
      router.replace("/home");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (

  
    <View style={styles.container}>
      <Text style={styles.title}>¡Welcome!</Text>
      <Text >Login</Text>
  
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
 
  
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
  
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  title:{
  position: "absolute",
  top: 100,
  fontSize: 28,
  fontWeight: "bold",
  color:"#7367f090",  
  paddingHorizontal: 16,
  paddingVertical: 8,
  
  },

  input: { 
    width:200,
    borderWidth: 1,
    marginBottom: 10, 
    padding: 8
  },

  error: { 
    color: "red", 
    marginBottom: 10 
  },
});

