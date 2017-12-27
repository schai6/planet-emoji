import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import Game from './components/Game';

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}

const RootNavigator = StackNavigator({
  Main: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home',
      },
  },
  Game: {
    screen: Game,
    navigationOptions: {
      headerTitle: 'Planet Emoji'
    }
  }
});
