import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../../styles';

const Pesquisar = () => {
  return <View  style={styles.pesquisar}>
    <TextInput 
    style={{
      backgroundColor:'#D9D9D9',
       marginTop: 10,
        borderColor: 'orange',
         borderWidth: 3,
         marginBottom: 5,
        }}
     placeholder='O que está procurando?'/>
  </View>
}

export default Pesquisar;