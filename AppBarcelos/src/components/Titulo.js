import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles';

const Titulo = () => {
  return <View style={styles.viewTitulo}>
      <Text style={styles.titulo}>
          Barcelos
      </Text>
  </View>;
}

export default Titulo;