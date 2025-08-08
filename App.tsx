import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Image, TextInput, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';
import img from './assets/a.jpg'

export default function App() {

  const [usuario, setUsuario] = useState('')

  return (
    <ScrollView style={{flex:1}}>
      <View style={[styles.container, { backgroundColor: '#f0f0f0' }]}>
      <Image
        source={img}
        borderRadius={40}
        style={{ height: 300, width: 300 }}
      />
      <Image
        source={img}
        borderRadius={40}
        style={{ height: 300, width: 300 }}
      />
      <Image
        source={img}
        borderRadius={40}
        style={{ height: 300, width: 300 }}
      />
      <TextInput
        style={styles.input}
        placeholder='Exemplo de texto'
        onChange={(text) => setUsuario(text.nativeEvent.text)}
        value={usuario}
      />
      <Button
        title='Clique'
        onPress={()=>{Alert.alert('Valor atual', usuario)}}
      />
      <StatusBar style="auto" />

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderColor: 'red',
    borderWidth: 2
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
    padding: 12,
    margin: 20,
    borderRadius: 14
  },
  input: {
    lineHeight: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 14,
    textAlign: 'center'
  }
});
