import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import ResponseIcon from './ResponseIcon';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',    
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  text: {
    marginLeft: 8,
    flex: 1,
  }
})

const ListItem = ({ name, imageUrl, response }) => (
  <View style={styles.item}>
    <Image
      style={styles.image}
      source={{ uri: imageUrl }}
      resizeMode="cover"
    />
    <Text style={styles.text}>{name}</Text>
    <ResponseIcon response={response} />
  </View>
);

const List = ({ members }) => (
  <ScrollView style={styles.container}>
    { members.map((props) => <ListItem {...props} />) }
  </ScrollView>
);

export default List;
