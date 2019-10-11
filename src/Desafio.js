import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Animated,
  TouchableOpacity,
  Easing,
  Text,
  StatusBar,
} from 'react-native';

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

function Seleciona(props) {
  const scale = useRef(new Animated.Value(1)).current;

  const scalesInterpolate = scale.interpolate({
    inputRange: [1, 2],
    outputRange: [1, 2],
  });

  useEffect(() => {
    Animated.timing(scale, {
      toValue: !props.select ? 1 : 1.1,
      duration: 450,
      easing: Easing.elastic(5),
      useNativeDriver: true,
    }).start();
  }, [props.select]);

  function handlerClickButton() {
    props.setSelectAlternativa(props.id);
  }

  return (
    <AnimatedButton
      onPress={handlerClickButton}
      style={[
        styles.selectArea,
        {
          transform: [
            {
              scale: scalesInterpolate,
            },
          ],
        },
        {
          borderColor: props.select ? '#22ba36' : '#d5d5d5',
          borderWidth: props.select ? 2 : 1,
          backgroundColor: props.select ? '#d9ffde' : '#f5f5f5',
        },
      ]}>
      <Image source={props.imagem} style={styles.imagem} resizeMode="contain" />
    </AnimatedButton>
  );
}

function Desafio(props) {
  const [alert, setAlert] = useState(false);
  const desafio = props.navigation.state.params.desafios.desafios[0];

  const [alternativa1, setAlternativa1] = useState(
    desafio.alternativas[0].select,
  );
  const [alternativa2, setAlternativa2] = useState(
    desafio.alternativas[1].select,
  );
  const [alternativa3, setAlternativa3] = useState(
    desafio.alternativas[2].select,
  );
  const [alternativa4, setAlternativa4] = useState(
    desafio.alternativas[3].select,
  );

  function setSelectAlternativa(alternativa) {
    console.log(alternativa1);
    console.log(alternativa);
    if (alternativa === 0) {
      setAlternativa1(true);
      setAlternativa2(false);
      setAlternativa3(false);
      setAlternativa4(false);
    } else if (alternativa === 1) {
      setAlternativa1(false);
      setAlternativa2(true);
      setAlternativa3(false);
      setAlternativa4(false);
    } else if (alternativa === 2) {
      setAlternativa1(false);
      setAlternativa2(false);
      setAlternativa3(true);
      setAlternativa4(false);
    } else if (alternativa === 3) {
      setAlternativa1(false);
      setAlternativa2(false);
      setAlternativa3(false);
      setAlternativa4(true);
    }
  }

  const translate = useRef(new Animated.Value(0)).current;

  const translateInterpolate = translate.interpolate({
    inputRange: [1, 2],
    outputRange: [1, 2],
  });

  useEffect(() => {
    Animated.timing(translate, {
      toValue: alert ? -300 : 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [alert, translate]);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <View style={[styles.areaHeader, {flex: 1}]}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image
              source={require('./assets/close.png')}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.areaHeader}>
          <Text style={[styles.textNome, {color: '#eeff00', fontSize: 30}]}>
            {props.navigation.state.params.desafios.nome}
          </Text>
        </View>
        <View style={[styles.areaHeader, {flex: 1}]}>
          <Text style={styles.textNome}>1 de 5</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.perguntaArea}>
          <Text style={styles.pergunta}>{desafio.pegunta}</Text>
          <Text style={styles.perguntaLibras}>{desafio.palavraLibras}</Text>
        </View>
        <View style={styles.areaSelect}>
          <Seleciona
            id={0}
            imagem={desafio.alternativas[0].imagem}
            select={alternativa1}
            setSelectAlternativa={setSelectAlternativa}
          />
          <Seleciona
            id={1}
            imagem={desafio.alternativas[1].imagem}
            select={alternativa2}
            setSelectAlternativa={setSelectAlternativa}
          />
          <Seleciona
            id={2}
            imagem={desafio.alternativas[2].imagem}
            select={alternativa3}
            setSelectAlternativa={setSelectAlternativa}
          />
          <Seleciona
            id={3}
            imagem={desafio.alternativas[3].imagem}
            select={alternativa4}
            setSelectAlternativa={setSelectAlternativa}
          />
        </View>
        <View style={styles.areaButtonVerificar}>
          <TouchableOpacity
            onPress={() => setAlert(!alert)}
            style={styles.buttonVerificar}>
            <Text style={styles.textButtonVerificar}>VERIFICAR</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Animated.View
        style={[
          styles.areaAlerta,
          {transform: [{translateY: translateInterpolate}]},
        ]}>
        <TouchableOpacity
          onPress={() => setAlert(!alert)}
          style={styles.buttonVerificar}>
          <Text style={styles.textButtonVerificar}>VERIFICAR</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  header: {
    flexDirection: 'row',
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

  perguntaArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  pergunta: {
    fontSize: 25,
    color: '#555555',
    fontWeight: 'bold',
  },

  perguntaLibras: {
    fontSize: 60,
    marginTop: 15,
    color: '#555555',
    fontFamily: 'Libras',
  },

  selectArea: {
    height: 130,
    width: 130,
    borderWidth: 1,
    borderColor: '#d5d5d5',
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },

  areaHeader: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  areaSelect: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  imagem: {
    width: 90,
  },

  areaButtonVerificar: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonVerificar: {
    height: 50,
    borderRadius: 30,
    width: '70%',
    backgroundColor: '#704EE0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButtonVerificar: {
    color: '#FFFFFF',
    fontSize: 15,
  },

  areaAlerta: {
    left: '2.5%',
    width: '95%',
    height: 250,
    borderTopEndRadius: 300,
    borderTopStartRadius: 300,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: -300,
  },
});

export default Desafio;
