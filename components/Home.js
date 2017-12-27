import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundView}>
          <Image style={styles.backgroundImage} source={require('../assets/globe.png')} />
        </View>
        <View style={styles.box}>
          <Text style={{ fontSize: 20, color: '#FFFFFF' }}>🌎 Welcome to Planet Emoji 🌎</Text>
          <Button color="#FF0000" style={{ fontSize: 40, fontWeight: 'bold' }} onPress={() => this.props.navigation.navigate('Game')} title="Start Game">Start Game</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(185, 185, 185, .5)'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  backgroundView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  box: {
    borderWidth: 3,
    borderColor: '#111',
    backgroundColor: 'rgba(30, 30, 30, .6)'
  }
});
