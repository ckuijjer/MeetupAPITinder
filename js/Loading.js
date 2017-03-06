import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#ccc'
  }
})

const Loading = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Loading ...</Text>
  </View>
);

export default Loading;
