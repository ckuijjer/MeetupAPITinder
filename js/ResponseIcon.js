import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ResponseIcon = ({ response }) => {
  let iconName = 'check';
  if (response === 'no') iconName = 'times';
  if (response === 'waitlist') iconName = 'clock-o';

  return <Icon name={iconName} size={16} color="#ccc" />;
};

export default ResponseIcon;
