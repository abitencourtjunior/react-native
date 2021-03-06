import React from 'react';
import {Text} from 'react-native';
import Standard from '../style/Standard';

export const Invert = (props) => {
  const inv = props.text.split('').reverse().join('');
  return <Text style={Standard.ex}>{inv}</Text>;
};

export const MegaSena = (props) => {
  const [min, max] = [1, 60];
  const numbers = Array(props.number || 6).fill(0);

  for (let i = 0; i < numbers.length; i++) {
    let novo = 0;
    while (numbers.includes(novo)) {
      novo = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    numbers[i] = novo;
  }

  numbers.sort((a, b) => a - b);
  return <Text style={Standard.ex}>{numbers.join(', ')}</Text>;
};
