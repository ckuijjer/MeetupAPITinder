import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Card from './Card';

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    marginBottom: 48,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const CardScene = (props) => (
  <View style={styles.container}>
    <Card {...props} />
  </View>
);

export default CardScene;