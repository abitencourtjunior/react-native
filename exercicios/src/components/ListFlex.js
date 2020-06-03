import React from 'react';
import {View, Text, FlatList} from 'react-native';

const students = [
  {id: 1, nome: 'Altamir', nota: 7.9},
  {id: 2, nome: 'Joana', nota: 5.9},
  {id: 3, nome: 'Denis', nota: 4.9},
  {id: 4, nome: 'Nathalia', nota: 6.9},
  {id: 5, nome: 'Marcelo', nota: 8.9},
  {id: 6, nome: 'Jessy', nota: 9},
  {id: 7, nome: 'Bia', nota: 10},
  {id: 8, nome: 'Vicka', nota: 2},
  {id: 9, nome: 'Jair', nota: 10},

  {id: 11, nome: 'Altamir', nota: 7.9},
  {id: 12, nome: 'Joana', nota: 5.9},
  {id: 13, nome: 'Denis', nota: 4.9},
  {id: 14, nome: 'Nathalia', nota: 6.9},
  {id: 15, nome: 'Marcelo', nota: 8.9},
  {id: 16, nome: 'Jessy', nota: 9},
  {id: 17, nome: 'Bia', nota: 10},
  {id: 18, nome: 'Vicka', nota: 2},
  {id: 19, nome: 'Jair', nota: 10},
];

const itemStyle = {
  paddingHorizontal: 15,
  height: 50,
  backgroundColor: '#DDD',
  borderWidth: 0.5,
  borderColor: '#222',

  // Flex box

  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export const Student = (props) => (
  <View style={itemStyle}>
    <Text>Nome: {props.nome}</Text>
    <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
  </View>
);

export default (props) => {
  const renderItem = ({item}) => {
    return <Student {...item} />;
  };

  return (
    <FlatList
      data={students}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};
