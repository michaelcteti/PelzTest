/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class PelzTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Dave Pelz Tests/Handicap
        </Text>
        <ShortGameTestSummary />
        <ShortGameTestInput />
        <PuttingTestSummary />
      </View>
    );
  }
}

class ShortGameTestSummary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Short Game Test Summary
        </Text>
        <Text>3/4 Wedge (40-70 Yards)</Text>
        <Text>1/2 Wedge (20-40 Yards)</Text>
        <Text>Long Sand (16-35 Yards)</Text>
        <Text>Short Sand (7-15 Yards)</Text>
        <Text>Long Chip (15-30 Yards)</Text>
        <Text>Short Chip (8-14 Yards)</Text>
        <Text>Pitch Fwy (10-20 Yards)</Text>
        <Text>Pitch Rgh (10-20 Yards)</Text>
        <Text>Cut Lob R (10-20 Yards)</Text>
      </View>
    );
  }
}

class PuttingTestSummary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Putting Test Summary
        </Text>
        <Text>Lag Putting</Text>
        <Text>In-Between Putts</Text>
        <Text>Make-able Putts</Text>
        <Text>Short Putts (6ft)</Text>
        <Text>Short Putts (3ft)</Text>
        <Text>Big Breaking Putts</Text>
      </View>
    );
  }
}

class ShortGameTestInput extends Component {
  constructor(props) {
    super(props);
    this.state = {threeFourthWedgeScore: '0'};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Short Game Test Inputs
        </Text>
        <Text>3/4 Wedge</Text>
        <TextInput
          enum='numeric'
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="0"
          onChangeText={(threeFourthWedgeScore) => this.setState({threeFourthWedgeScore})}
          value={this.state.threeFourthWedgeScore}
        />
        <Text>{this.state.threeFourthWedgeScore}</Text>
      </View>
    )
  }
}

export class ShortGameHandicap extends Component {
  constructor(props) {
    super(props);
    this.state = {handicap: 40};
  }

  render() {
    return (
      <View>
        <Text>Your Short Game Handicap is: {this.state.handicap}.</Text>
      </View>
    )
  }
}

export class PuttingHandicap extends Component {
  constructor(props) {
    super(props);
    this.state = {handicap: 38};
  }

  render() {
    return (
      <View>
        <Text>Your Putting Handicap is: {this.state.handicap}.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PelzTest', () => PelzTest);
