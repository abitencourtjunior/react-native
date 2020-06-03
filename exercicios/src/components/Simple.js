import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Standard from '../style/Standard';

// Primeira forma

//export default props => {
//   return <Text style={Standard.ex}>{props.content}</Text>
//}

// Segunda Forma

//export default function(props) {
//    return <Text style={Standard.ex}>{props.content}</Text>
//}

// Terceira Forma

export default (props) => <Text style={Standard.ex}>{props.content}</Text>;
