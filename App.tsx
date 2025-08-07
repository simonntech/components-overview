import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        onTouchStart={(event) => {
          Alert.alert('Começou a clicar', 'Clique iniciado')
        }}
        onTouchEnd={(event) => {
          Alert.alert('Toque', 'toque finalizado')
        }}
      >
        <Text>Clique aqui</Text>
      </View>
      <Text>Open up App.tsx to start working on your app!</Text>
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
});
