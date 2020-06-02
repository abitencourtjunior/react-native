import React from 'react';
import {Button, Alert, ToastAndroid, Platform} from 'react-native';

export default (props) => {
  const notification = (msg) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.LONG);
    } else {
      Alert.alert('Information', msg);
    }
  };

  return (
    <Button
      title="Plataforma?"
      onPress={() => notification('Parabéns, primeira notificação!!!!')}
    />
  );
};
