import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [numero, setNumero] = useState('');
  const [monto, setMonto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const enviar = () => {
    Alert.alert("Datos enviados", `Número: ${numero}\nMonto: S/ ${monto}\nMensaje: ${mensaje}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Número"
        keyboardType="number-pad"
        value={numero}
        onChangeText={setNumero}
      />
      <TextInput
        style={styles.input}
        placeholder="Monto S/"
        keyboardType="decimal-pad"
        value={monto}
        onChangeText={setMonto}
      />
      <TextInput
        style={styles.input}
        placeholder="Mensaje"
        value={mensaje}
        onChangeText={setMensaje}
      />
      <Button title="ENVIAR" onPress={enviar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
  },
  input: {
    width: '100%', height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10,
  },
});

export default App;

