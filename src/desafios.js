const desafios = [
  {
    nome: 'Frutas',
    imagem: 'url',
    desafios: [
      {
        tipo: 'selecione',
        pegunta: 'Selecione a fruta:',
        palavraLibras: 'Morango',
        respostaCorreta: 4,
        alternativas: [
          {
            id: 1,
            imagem: require('./assets/Abacate.png'),
            select: false,
          },
          {
            id: 2,
            imagem: require('./assets/Maca.png'),
            select: false,
          },
          {
            id: 3,
            imagem: require('./assets/Melancia.png'),
            select: false,
          },
          {
            id: 4,
            imagem: require('./assets/Morango.png'),
            select: false,
          },
        ],
      },
    ],
  },
  {
    nome: 'Animais',
    imagem: 'url',
    desafios: [
      {
        tipo: 'selecione',
        pegunta: 'Selecione a fruta $libras$',
        palavraLibras: 'Banana',
        respostaCorreta: 1,
        alternativas: [
          {
            id: 1,
            imagem: 'url',
          },
          {
            id: 1,
            imagem: 'url',
          },
          {
            id: 1,
            imagem: 'url',
          },
          {
            id: 1,
            imagem: 'url',
          },
        ],
      },
    ],
  },
  {
    nome: 'Objetos',
    imagem: 'url',
    desafios: [
      {
        tipo: 'selecione',
        pegunta: 'Selecione a fruta $libras$',
        palavraLibras: 'Banana',
        respostaCorreta: 1,
        alternativas: [
          {
            id: 1,
            imagem: 'url',
          },
          {
            id: 1,
            imagem: 'url',
          },
          {
            id: 1,
            imagem: 'url',
          },
          {
            id: 1,
            imagem: 'url',
          },
        ],
      },
    ],
  },
];

export default desafios;
