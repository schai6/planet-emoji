import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { restartGame, handleChange, checkGuess } from '../utils/game';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: [],
      randomQuestion: 0,
      score: 0,
      guess: '',
      active: true
    };
    this.restartGame = restartGame.bind(this);
    this.handleChange = handleChange.bind(this);
    this.checkGuess = checkGuess.bind(this);
  }

  //componentDidMount lifecycle hook
  componentDidMount() {
    this.restartGame();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundView}>
          <Image style={styles.backgroundImage} source={require('../assets/globe.png')} />
        </View>
        <Text style={{ color: "white", fontSize: 30, margin: 20, marginTop: 60, backgroundColor: "transparent" }}>{this.state.gameMessage}</Text>
        <Text style={{ color: "white", backgroundColor: "transparent", fontSize: 20, margin: 15, marginTop: 50 }}>SCORE:
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {' ' + this.state.score}
          </Text>
        </Text>
        {this.state.active &&
          <View style={styles.gamePlay}>
            <Text style={styles.emoji}>
              {this.state.emojis.length && this.state.emojis[this.state.randomQuestion].question}
            </Text>
            <TextInput
              style={styles.mainText}
              onChangeText={(guess) => this.handleChange(guess)}
              value={this.state.guess}
              placeholderTextColor="white"
              placeholder="Guess the Phrase!"
            />
            <Button
              onPress={this.checkGuess}
              color="white"
              title="Make Guess!"
            />
          </View>}
        <View style={styles.gameManager}>
          <Button
            color="#FFFFFF"
            style={{ marginTop: 100 }}
            onPress={this.restartGame}
            title="Restart Game"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#AAA',
    justifyContent: 'center'
  },
  emoji: {
    color: "#FFF",
    fontSize: 25,
    marginBottom: 10,
    alignSelf: 'center'
  },
  gamePlay: {
    borderWidth: 2,
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'rgba(100, 100, 100, .6)'
  },
  gameManager: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    marginTop: 100,
    backgroundColor: 'rgba(30, 30, 30, .6)'
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
  mainText: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(30, 30, 30, .6)'
  }
});
