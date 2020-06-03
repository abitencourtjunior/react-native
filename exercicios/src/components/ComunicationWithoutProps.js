import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import Standard from '../style/Standard';

export const InputData = (props) => (
  <View>
    <TextInput
      value={props.text}
      style={Standard.input}
      onChangeText={props.callWhenChange}
    />
  </View>
);

export class TextSync extends Component {
  state = {
    text: '',
  };

  changeText = (text) => {
    this.setState({text});
  };

  render() {
    return (
      <View>
        <Text style={Standard.font40}>{this.state.text}</Text>
        <InputData text={this.state.text} callWhenChange={this.changeText} />
      </View>
    );
  }
}
