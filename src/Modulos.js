import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';

import desafios from './desafios';

function Modulo(props) {
  return (
    <TouchableWithoutFeedback
      style={styles.radius}
      onPress={() =>
        props.navigation.navigate({
          routeName: 'Desafio',
          params: {
            desafios: props.modulo,
          },
        })
      }>
      <View style={styles.moduloAreaBorder}>
        <View style={styles.moduloArea}>
          <View style={styles.textArea}>
            <Text style={styles.textModulo}>{props.modulo.nome}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

function Modulos(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <Text style={styles.textNome}>
          {props.navigation.state.params.nome}
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.containerModulo}>
          <Modulo modulo={desafios[0]} navigation={props.navigation} />
        </View>
        <View style={styles.containerModulo}>
          <Modulo modulo={desafios[1]} navigation={props.navigation} />
          <Modulo modulo={desafios[2]} navigation={props.navigation} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  header: {
    height: 70,
    width: '100%',
    elevation: 2,
    backgroundColor: '#704EE0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  radius: {
    borderRadius: 50,
  },

  containerModulo: {
    height: 150,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  textNome: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  moduloAreaBorder: {
    height: 110,
    width: 110,
    borderRadius: 55,
    backgroundColor: '#704EE0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  moduloArea: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },

  textArea: {
    height: 30,
    width: 110,
    borderRadius: 10,
    marginLeft: -5,
    backgroundColor: '#704EE0',
    position: 'absolute',
    marginTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textModulo: {
    fontSize: 15,
    color: '#FFFFFF',
  },
});

export default Modulos;
