import React from 'react';
import { StyleSheet, Text, View, TextInput,Button} from 'react-native';



const register = () => {
  return (
    <View style={styles.container}>

    <Text style={styles.tittle}>Cree su cuenta aqui</Text>

    <TextInput 
     placeholder='Nombre'
     style={styles.inputs}
     />

     <TextInput
     placeholder='Apellido'
     style={styles.inputs}
     />
    
     <TextInput 
     placeholder='correo@gmail.com'
     style={styles.inputs}
     />
    
     <TextInput
      placeholder='password'
      style={styles.inputs}
     />
     
      <TextInput
      placeholder='password confirm'
      style={styles.inputs}
     />
       <Button
     title="Enviar"
     color="#7469B6"
     />
    </View>
   
  );
}

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle:{
    fontFamily: "Courier",
    fontSize: 40,
    color:'#7469b6'

  },
  subtitulo:{
    fontSize: 30,
    fontFamily: "Courier", 
    color:'#ad88c6'
  },
  inputs:{
    color: '#941e8f',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
   width: '40%',
   margin: 10,
   borderRadius: 20,
  },
});
