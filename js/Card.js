import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    height: 400,
    padding: 20,
    backgroundColor: '#fbfbfb',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: 10,
    shadowColor: '#666', // shadow doesn't work on Android, perhaps use https://github.com/879479119/react-native-shadow
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 8,
    shadowOpacity: 0.3
  },
  image: {
    flex: 1,
    height: 600,
  },
  text: {
    marginTop: 16,
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
  }
});

const Card = ({ name, imageUrl }) => {
  const { width } = Dimensions.get('window');
  const cardWidth = width - 40;

  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode="cover"
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

export default Card;
