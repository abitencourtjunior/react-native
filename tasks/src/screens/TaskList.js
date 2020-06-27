import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';

import commonStyles from '../commonStyles';
import todayImage from '../../src/assets/imgs/today.jpg';

import Task from '../components/Task.js';

import moment from 'moment';
import 'moment/locale/pt-br';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddTask from './AddTask';
Icon.loadFont();

export default class TaskList extends Component {
  state = {
    showAddTask: true,
    showDoneTasks: true,
    visibleTasks: [],
    tasks: [
      {
        id: Math.random(),
        desc: 'Iniciar TCC',
        estimateAt: new Date(),
        doneAt: new Date(),
      },
      {
        id: Math.random(),
        desc: 'Iniciar TCC',
        estimateAt: new Date(),
        doneAt: null,
      },
    ],
  };

  toogleTask = (taskId) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date();
      }
    });

    this.setState({tasks}, this.filterTasks);
  };

  toogleFilter = () => {
    this.setState({showDoneTasks: !this.state.showDoneTasks}, this.filterTasks);
  };

  filterTasks = () => {
    let visibleTasks = null;
    if (this.state.showDoneTasks) {
      visibleTasks = [...this.state.tasks];
    } else {
      const pending = (task) => task.doneAt === null;
      visibleTasks = this.state.tasks.filter(pending);
    }

    this.setState({visibleTasks});
  };

  componentDidMount = () => {
    this.filterTasks();
  };

  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
    return (
      <View style={styles.container}>
        <AddTask
          isVisible={this.state.showAddTask}
          onCancel={() => this.setState({showAddTask: false})}
        />
        <ImageBackground source={todayImage} style={styles.backgroud}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={this.toogleFilter}>
              <Icon
                name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                size={20}
                color={commonStyles.colors.secundary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subTitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <FlatList
            data={this.state.visibleTasks}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({item}) => (
              <Task {...item} toogleTask={this.toogleTask} />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroud: {
    flex: 3,
  },
  taskList: {
    flex: 7,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 50,
    color: commonStyles.colors.secundary,
    marginLeft: 20,
    marginBottom: 20,
  },
  subTitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secundary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
  iconBar: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'flex-end',
    marginTop: Platform.OS === 'ios' ? 40 : 10,
  },
});