/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Slider,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Button
} from 'react-native';

class PelzTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Dave Pelz Tests/Handicap
        </Text>
        <ShortGameTestInput />
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

class ScoreSlider extends Component {
  render() {
    return (
      <Slider
        minimumValue={0}
        maximumValue={this.props.max}
        onValueChange={this.props.valueFunction}
        step={1}
        style={{height: 20, margin: 10, width: 300}}
      />
    )
  }
}

class ShortGameTestInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threeFourthWedgeScore: 0,
      halfWedgeScore: 0,
      longSandScore: 0,
      shortSandScore: 0,
      longChipScore: 0,
      shortChipScore: 0,
      pitchFairwayScore: 0,
      pitchRoughScore: 0,
      cutLobScore: 0,
      totalScore: 0
    };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollcontainer} >
        <Text style={styles.welcome}>
          Short Game Test Inputs
        </Text>
        <Text style={styles.welcome}>
          Total Score: {this.state.totalScore}
        </Text>

        <Button
          onPress={() => this.setState({totalScore: this.state.threeFourthWedgeScore +
            this.state.halfWedgeScore + this.state.longSandScore + this.state.shortSandScore +
            this.state.longChipScore + this.state.shortChipScore + this.state.pitchFairwayScore +
            this.state.pitchRoughScore + this.state.cutLobScore})}
          title="Add Scores"
        />

        <Text>3/4 Wedge</Text>
        <Text>{this.state.threeFourthWedgeScore}</Text>
        <ScoreSlider
          max={17}
          valueFunction={(value) => this.setState({threeFourthWedgeScore: value})}
        />

        <Text>1/2 Wedge</Text>
        <Text>{this.state.halfWedgeScore}</Text>
        <ScoreSlider
          max={16}
          valueFunction={(value) => this.setState({halfWedgeScore: value})}
        />

        <Text>Long Sand</Text>
        <Text>{this.state.longSandScore}</Text>
        <ScoreSlider
          max={12}
          valueFunction={(value) => this.setState({longSandScore: value})}
        />

        <Text>Short Sand</Text>
        <Text>{this.state.shortSandScore}</Text>
        <ScoreSlider
          max={16}
          valueFunction={(value) => this.setState({shortSandScore: value})}
        />

        <Text>Long Chip</Text>
        <Text>{this.state.longChipScore}</Text>
        <ScoreSlider
          max={20}
          valueFunction={(value) => this.setState({longChipScore: value})}
        />

        <Text>Short Chip</Text>
        <Text>{this.state.shortChipScore}</Text>
        <ScoreSlider
          max={24}
          valueFunction={(value) => this.setState({shortChipScore: value})}
        />

        <Text>Pitch Fairway</Text>
        <Text>{this.state.pitchFairwayScore}</Text>
        <ScoreSlider
          max={19}
          valueFunction={(value) => this.setState({pitchFairwayScore: value})}
        />

        <Text>Pitch Rough</Text>
        <Text>{this.state.pitchRoughScore}</Text>
        <ScoreSlider
          max={17}
          valueFunction={(value) => this.setState({pitchRoughScore: value})}
        />

        <Text>Cut Lob</Text>
        <Text>{this.state.cutLobScore}</Text>
        <ScoreSlider
          max={14}
          valueFunction={(value) => this.setState({cutLobScore: value})}
        />
      </ScrollView>
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
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollcontainer: {
    width: 400,
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
