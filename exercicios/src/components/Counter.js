import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Standard from '../style/Standard';

export default class Counter extends Component {
  state = {
    number: this.props.initial,
  };

  counterPlus = () => {
    this.setState({number: this.state.number + 1});
  };

  clearCounter = () => {
    this.setState({number: 0});
  };

  render() {
    return (
      <View>
        <Text style={Standard.ex}>{this.state.number}</Text>
        <TouchableHighlight
          onPress={this.counterPlus}
          onLongPress={this.clearCounter}>
          <Text>Incrementar/Zerar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
