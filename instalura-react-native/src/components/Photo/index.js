import React from 'react';
import {Image, Text} from 'react-native';

import styles from './styles';

const Photo = () => {
  return (
    <>
      <Image
        source={require('../../../res/img/alura.jpg')}
        style={styles.image}
      />
      <Text>Descrição da Foto</Text>
    </>
  );
};

export default Photo;
