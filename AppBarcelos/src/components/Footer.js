import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles';

const Footer = () => {

  return <View style={styles.footer}>

    <View>
        <Text style={styles.textFooter}>
            Feito por Otávio Mascarenhas
        </Text>
    </View>

  </View>;
}

export default Footer;