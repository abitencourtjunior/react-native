import 'react-native-gesture-handler';
import {useWindowDimensions} from 'react-native';
import React from 'react';
import Simple from './components/Simple';
import ParAndImpar from './components/ParAndImpar';
import {Invert, MegaSena} from './components/Multi';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
import Plataforms from './components/Plataforms';
import ValidationProps from './components/ValidationProps';
import Events from './components/Events';
import EventsHooks from './components/EventsHooks';
import {Grandfather} from './components/ComunicationWithProps';
import {TextSync} from './components/ComunicationWithoutProps';
import ListFlex from './components/ListFlex';
import Flex from './components/Flex';

const SimpleComponent = () => <Simple content={'Menu Drawer com Swipe'} />;
const ParAndImparComponent = () => <ParAndImpar number={3} />;
const InvertComponent = () => <Invert text={'Altamir'} />;
const MegaSenaComponent = () => <MegaSena number={6} />;
const CounterComponent = () => <Counter initial={8} />;
const CounterHComponent = () => <CounterHooks />;
const PlataformComponent = () => <Plataforms />;
const ValidationPropsComponent = () => (
  <ValidationProps label={'Ano: '} year={18} />
);
const EventComponent = () => <Events />;
const EventHooksComponent = () => <EventsHooks />;
const ComunicationWithPropsComponent = () => (
  <Grandfather name="Altair" lastName="Bitencourt" />
);
const ComunicationWithoutPropsComponent = () => <TextSync />;
const ListFlexComponent = () => <ListFlex />;
const FlexComponent = () => <Flex />;

const Drawer = createDrawerNavigator();

const MenuExercicios = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}>
      <Drawer.Screen name="Flex Box" component={FlexComponent} />
      <Drawer.Screen
        name="Lista de Itens(Flex Box)"
        component={ListFlexComponent}
      />
      <Drawer.Screen
        name="Comunicação Indireta"
        component={ComunicationWithoutPropsComponent}
      />
      <Drawer.Screen
        name="Comunicação Direta"
        component={ComunicationWithPropsComponent}
      />
      <Drawer.Screen name="Eventos com Hooks" component={EventHooksComponent} />
      <Drawer.Screen name="Eventos" component={EventComponent} />
      <Drawer.Screen
        name="Validação de Props"
        component={ValidationPropsComponent}
      />
      <Drawer.Screen name="Notificação" component={PlataformComponent} />
      <Drawer.Screen name="Contador com Hooks" component={CounterHComponent} />
      <Drawer.Screen name="Contador com State" component={CounterComponent} />
      <Drawer.Screen name="Simples" component={SimpleComponent} />
      <Drawer.Screen name="Par e Ímpar" component={ParAndImparComponent} />
      <Drawer.Screen name="Inverter String" component={InvertComponent} />
      <Drawer.Screen name="Número da Mega" component={MegaSenaComponent} />
    </Drawer.Navigator>
  );
};

export default (Menu) => (
  <NavigationContainer>
    <MenuExercicios />
  </NavigationContainer>
);
