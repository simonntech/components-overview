import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        onTouchStart={(event) => {
          Alert.alert('Foguete', 'Não dá ré! 🚀')
        }}
      >
        <Text style={styles.texto}>FOGUETE 🚀</Text>
      </View>
      <Text
        selectable={true}
      >Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
