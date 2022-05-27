import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { styles } from '../../styles';

function Card ({navigation}) {
  
  const [lista, setLista] = useState([
    {
      title: 'Frango',
      text: 'Promoção',
      release: 'terça',
      img: '',
    },
  ]);

  return <TouchableOpacity onPress={() => navigation.navigate('Promoçoes')} style={styles.card}>

    <View>
      
    </View>
  </TouchableOpacity>;
}

export default Card;