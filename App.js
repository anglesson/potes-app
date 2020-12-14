/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TextInput, Button
} from 'react-native';
import Pote from './components/Pote/Pote';

const App: () => React$Node = () => {
  const [valor, setValor] = useState(0);
  const [valorPote1, setValorPote1] = useState(0);
  const [valorPote2, setValorPote2] = useState(0);
  const [valorPote3, setValorPote3] = useState(0);
  const [valorPote4, setValorPote4] = useState(0);
  const [valorPote5, setValorPote5] = useState(0);
  const [valorPote6, setValorPote6] = useState(0);

  function handleChange(text) {
    setValor(text)
    calcular()
  }

  function calcular(valorDigitado) {
    setValorPote1(valor*0.55)
    setValorPote2(valor*0.05)
    setValorPote3(valor*0.10)
    setValorPote4(valor*0.10)
    setValorPote5(valor*0.15)
    setValorPote6(valor*0.05)
  }

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{ backgroundColor: '#ffe6e6' }}>
        <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
          <TextInput
            placeholder="Digite o Valor"
            placeholderTextColor="#FFF"
            style={styles.inputMain}
            keyboardType="numeric"
            textContentType="password"
            value={+valor}
            onChangeText={text => handleChange(+text)}
          />
        </View>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.mainContent}>

            <Pote name="Pote 1 - Gastos Essenciais" value={valorPote1} />
            <Pote name="Pote 2 - Futuro (Aposentadoria)" value={valorPote2}/>
            <Pote name="Pote 3 - Lazer" value={valorPote3} />
            <Pote name="Pote 4 - Desenvolvimento Pessoal" value={valorPote4} />
            <Pote name="Pote 5 - Estilo de Vida" value={valorPote5} />
            <Pote name="Pote 6 - Doações" value={valorPote6} />

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

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
    paddingHorizontal: 30
  },
  scrollView: {
    marginBottom: 120
  },
  inputMain: {
    height: 60,
    borderColor: '#6155a6',
    backgroundColor: '#a685e2',
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 20, color: '#ffe6e6'
  }
});

export default App;
