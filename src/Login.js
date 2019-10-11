import React, {useState} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

function Login(props) {
  const [nome, setNome] = useState('Felipe');

  function goModulos() {
    props.navigation.navigate({
      routeName: 'Modulos',
      params: {
        nome,
      },
    });
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar hidden={true} />
      <Image source={require('./assets/logo.jpg')} />
      <TextInput
        style={styles.input}
        textAlignVertical="center"
        underlineColorAndroid="transparent"
        onChangeText={setNome}
        value={nome}
      />
      <TouchableOpacity style={styles.botao} onPress={goModulos}>
        <Text style={styles.text}>Conectar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: '80%',
    height: 55,
    borderRadius: 5,
    padding: 0,
    backgroundColor: '#D4D4D3',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
  },

  botao: {
    width: '80%',
    height: 55,
    borderRadius: 5,
    padding: 0,
    backgroundColor: '#6893CC',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  text: {
    fontSize: 17,
    color: '#ffffff',
  },
});

export default Login;
