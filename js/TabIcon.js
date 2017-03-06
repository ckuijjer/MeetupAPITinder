import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 16,
    color: '#999',
    marginBottom: 4,
  },
  text: {
    color: '#999'
  },
  selected: {
    color: '#000'
  }
});

const TabIcon = ({ title, selected, iconName = 'question' }) => (
  <View style={styles.container}>
    <Icon name={iconName} style={[ styles.icon, selected ? styles.selected : null ]} />
    <Text style={[ styles.text, selected ? styles.selected : null ]}>
      {title}
    </Text>
  </View>
)

export default TabIcon;
