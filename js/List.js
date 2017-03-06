import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

import { Actions } from 'react-native-router-flux';

import ResponseIcon from './ResponseIcon';

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    marginBottom: 48,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',    
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',        
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

const ListItem = ({ name, imageUrl, response, onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode="cover"
      />
      <Text style={styles.text}>{name}</Text>
      <ResponseIcon response={response} />
    </View>
  </TouchableHighlight>
);

const List = ({ members }) => (
  <ScrollView style={styles.container}>
    {
      members.map((member) => {
        const onPress = () => {
          Actions.card(member);
        }
        
        return <ListItem {...member} onPress={onPress} />
      })
    }
  </ScrollView>
);

export default List;
