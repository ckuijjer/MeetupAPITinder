import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import Card from './Card';

class Attendance extends React.Component {
  handleYup (card) {
    console.log(`Is attending for ${card.name}`)
  }

  handleNope (card) {
    console.log(`Not attending for ${card.name}`)
  }

  render() {
    return (
      <SwipeCards
        cards={this.props.members}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />
    )
  }
}

export default Attendance;

const NoMoreCards = () => (
  <View style={[styles.card, {backgroundColor: '#f99'}]} />
);