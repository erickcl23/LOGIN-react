import React from "react";
import { View, Text, StyleSheet,TextInput, Button } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Bienvenido</Text>

      <Text style={styles.subtitulo}>ingresa tu cuenta</Text>

      <TextInput placeholder="correo@gmail.com" style={styles.inputs} />
      <TextInput placeholder="password" style={styles.inputs} />
     <Button
     title="Enviar"
     color="#7469B6"
     />
     
    </View>
  );
}
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    justifyContent: "center",
  },
  tittle: {
    fontFamily: "Courier",
    fontSize: 40,
    color: "#7469B6",
  },
  subtitulo: {
    fontFamily: "Courier",
    fontSize: 30,
    color: "#AD88C6",
  },
  inputs: {
    
    color: "#941e8f",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    width: "40%",
    margin: 10,
    borderRadius: 20,
  },
});
