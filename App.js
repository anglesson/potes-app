/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';

const App: () => React$Node = () => {
  
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{backgroundColor: '#ffe6e6'}}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Técnica dos Potes</Text>
        </View>
        <View style={{paddingHorizontal: 30, marginBottom: 20 }}>
          <TextInput
            placeholder="Digite o valor aqui"
            placeholderTextColor="#FFF"
            style={{ 
              height: 60, 
              borderColor: '#6155a6', 
              backgroundColor: '#a685e2', 
              marginTop: 20, 
              borderRadius: 10, 
              paddingHorizontal: 20, 
              fontSize: 20, color: '#ffe6e6' }}
            keyboardType="numeric"
          />
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.mainContent}>

            <Pote name="Pote 1 - Gastos Essenciais" value={23.00} />
            <Pote name="Pote 2 - Futuro (Aposentadoria)" />
            <Pote name="Pote 3 - Lazer" value={0.00} />
            <Pote name="Pote 4 - Desenvolvimento Pessoal" value={0.00} />
            <Pote name="Pote 5 - Estilo de Vida" value={0.00} />
            <Pote name="Pote 6 - Doações" value={0.00} />

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const Pote = (props) => {
  const valor = !props.value ? 0.00 : props.value;
  return (
    <View style={styles.pote}>
      <Text style={styles.poteName}>{props.name}</Text>
      <Text style={styles.poteValue}>R$ {valor}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    backgroundColor: '#6155a6',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  textHeader: {
    color: '#FFF'
  },
  mainContent: {
    padding: 30
  },
  pote: {
    backgroundColor: '#ffabe1',
    justifyContent: 'space-around',
    height: 100,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  poteName: {
    fontSize: 22,
    color: '#6155a6'
  },
  poteValue: {
    fontSize: 18,
    color: '#FFF'
  }
});

export default App;
