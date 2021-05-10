import React from 'react';

import {Text, Image, View} from 'react-native';
import styles from './styles';

const Header = ({nameUser}) => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../../res/img/alura.jpg')}
        style={styles.image}
      />
      <Text>{nameUser}</Text>
    </View>
  );
};

export default Header;
