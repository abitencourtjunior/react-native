import React, {Component} from 'react';
import {
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import commonStyles from '../commonStyles';

const initState = {desc: ''};

export default class AddTask extends Component {
  state = {...initState};

  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}
        animationType="slide">
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.background}></View>
        </TouchableWithoutFeedback>

        <View style={styles.container}>
          <Text style={styles.header}>Nova Tarefa: </Text>
          <TextInput
            style={styles.input}
            placeholder="Informe a descrição ..."
            onChangeText={(desc) => this.setState({desc})}
            value={this.state.desc}></TextInput>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}>
              <Text>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={this.props.onCancel}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.background}></View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  container: {
    backgroundColor: '#FFF',
  },
  header: {
    fontFamily: commonStyles.fontFamily,
    backgroundColor: commonStyles.colors.today,
    color: commonStyles.colors.secundary,
    fontSize: 16,
    textAlign: 'center',
    padding: 15,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: commonStyles.colors.today,
  },
  input: {
    fontFamily: commonStyles.fontFamily,
    height: 40,
    margin: 15,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 6,
  },
});
