import React from 'react';
import {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Standard from '../style/Standard';

export default (props) => {
  const [text, setText] = useState('');

  return (
    <View>
      <Text style={Standard.font40}>{text}</Text>
      <TextInput
        value={text}
        style={Standard.input}
        onChangeText={(value) => setText(value)}
      />
    </View>
  );
};
