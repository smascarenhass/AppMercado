import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { styles } from '../../../../styles';

const ButtonMenuMercado = (props) => {
  return (
      <TouchableOpacity onPress={() => {}} style={styles.buttonMenuMercado}>
            <Text style={styles.textMenuMercado}>{props.name}</Text>
      </TouchableOpacity>
      );
}

export default ButtonMenuMercado;