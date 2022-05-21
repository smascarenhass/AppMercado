import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { styles } from '../../../styles';
import ButtonMenuMercado from './components/ButtonMenuMercado';


const Mercado = () => {
  return <View>
      <View style={styles.menuMercado}>

          <ButtonMenuMercado/> 
          <ButtonMenuMercado/> 
          <ButtonMenuMercado/> 

      </View>
  </View>;
}

export default Mercado;