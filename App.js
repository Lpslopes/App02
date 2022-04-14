import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Picker from './src/componets/Picker';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Selecione sua Moeda:</Text>
        <Picker/>  
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#101215',
    paddingTop: 40,
  },
});
