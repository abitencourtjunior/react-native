import React from 'react';
import {View, Text} from 'react-native';

const font = {style: {fontSize: 30}};

const mountProps = (props) => {
  return React.Children.map(props.children, (son) =>
    React.cloneElement(son, {...props, ...son.props}),
  );
};

export const Childeren = (props) => (
  <View>
    <Text {...font}>
      Filho: {props.name} {props.lastName}
    </Text>
  </View>
);

export const Father = (props) => (
  <View>
    <Text {...font}>
      Pai: {props.name} {props.lastName}
    </Text>
    {/*props.children*/}
    {/*React.Children.map(props.children, (son) =>
      React.cloneElement(son, {...props, ...son.props}),
    )*/}
    {mountProps(props)}
  </View>
);

export const Grandfather = (props) => (
  <View>
    <Text {...font}>
      Pai: {props.name} {props.lastName}
    </Text>
    <Father name="João" lastName={props.lastName}>
      <Childeren name="Maria" />
      <Childeren name="José" />
      <Childeren name="Alfredo" />
      <Childeren name="Pedro" />
    </Father>
    <Father {...props} name="Ademar">
      <Childeren name="Odimar" />
      <Childeren name="Vera" />
      <Childeren name="Carla" />
      <Childeren name="Altamir" />
    </Father>
  </View>
);
