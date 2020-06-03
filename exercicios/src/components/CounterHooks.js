import React from 'react';
import {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Standard from '../style/Standard';

export default (CounterHooks) => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text style={Standard.ex}>{count}</Text>
      <TouchableHighlight
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}>
        <Text>Incrementar/Zerar</Text>
      </TouchableHighlight>
    </View>
  );
};
