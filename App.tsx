import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, {backgroundColor: '#f0f0f0'}]}>
      <View
        onTouchStart={(event) => {
          Alert.alert('Foguete', 'não dá ré! 🚀')
        }}
      >
        <Text style={[styles.texto, styles.border]}>FOGUETE 🚀</Text>
      </View>
      <Text
        selectable={false}
        onPress={()=> {
          Alert.alert('Pressionado')
        }}
        onLongPress={()=>{
          Alert.alert('Pressionado por mais tempo')
        }}
      >Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />

      <Text>
        <Text>One</Text>
        <Text> Piece</Text>
      </Text>

      <View>
        <Text>One</Text>
        <Text>Piece</Text>
      </View>
    </View>
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
  }
});
