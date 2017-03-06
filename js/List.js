import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  }
})

const List = ({ members }) => (
  <View style={styles.container}>
    { members.map(({ name, imageUrl }) => {
      return (
        <View style={styles.item}>
          <Text>{name}</Text>
        </View>
      );
    })}
  </View>

);

export default List;
