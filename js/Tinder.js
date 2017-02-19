import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

let Card = React.createClass({
  render() {
    return (
      <View style={[styles.card, {backgroundColor: '#f99'}]}>
        <Image
          style={{width: 200, height: 200, backgroundColor: '#99f'}}
          source={{ uri: this.props.imageUrl }}
        />
        <Text>{this.props.name}</Text>
      </View>
    )
  }
})


export default React.createClass({
  handleYup (card) {
    console.log(`Yup for ${card.text}`)
  },
  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  },
  render() {
    console.log(this.props.members);
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
})

const NoMoreCards = () => (
  <View style={[styles.card, {backgroundColor: '#f99'}]} />
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  }
})