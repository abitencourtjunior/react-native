import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import Standard from '../style/Standard';

export default class Events extends Component {
  state = {
    text: '',
  };

  changeText = (text) => this.setState({text});

  render() {
    return (
      <View>
        <Text style={Standard.font40}>{this.state.text}</Text>
        <TextInput
          value={this.state.text}
          style={Standard.input}
          onChangeText={this.changeText}
        />
      </View>
    );
  }
}
