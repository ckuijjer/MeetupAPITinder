import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import Card from './Card';

const styles = StyleSheet.create({
  container: {
    marginBottom: 48,
    marginTop: 64,
    flex: 1,
  }
})

class Attendance extends React.Component {
  handleYup(card) {
    console.log(`Is attending for ${card.name}`)
  }

  handleNope(card) {
    console.log(`Not attending for ${card.name}`)
  }

  render() {
    return (
      <View style={styles.container}>
        <SwipeCards
          cards={this.props.members}

          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}

          handleYup={this.handleYup}
          handleNope={this.handleNope}
        />
      </View>
    )
  }
}

export default Attendance;

const NoMoreCards = () => (
  <View style={[styles.card, { backgroundColor: '#f99' }]} />
);