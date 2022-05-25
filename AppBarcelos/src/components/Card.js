import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { styles } from '../../styles';

function Card ({navigation}) {

  return <TouchableOpacity onPress={() => navigation.navigate('Promoçoes')} style={styles.card}>

    <View>
        <Text>
            Produto
        </Text>
    </View>

  </TouchableOpacity>;
}

export default Card;