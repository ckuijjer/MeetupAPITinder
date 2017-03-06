import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',    
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    marginLeft: 8,
    flex: 1,
  }
})

const List = ({ members }) => (
  <ScrollView style={styles.container}>
    { members.map(({ name, imageUrl }) => {
      return (
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{ uri: imageUrl }}
            resizeMode="cover"
          />
          <Text style={styles.text}>{name}</Text>
        </View>
      );
    })}
  </ScrollView>

);

export default List;
