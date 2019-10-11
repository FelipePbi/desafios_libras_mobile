import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login';
import Modulos from './Modulos';
import Desafio from './Desafio';

const Rotas = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Modulos: {
    screen: Modulos,
    navigationOptions: {
      header: null,
    },
  },
  Desafio: {
    screen: Desafio,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(Rotas);
