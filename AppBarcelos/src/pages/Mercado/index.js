import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { styles } from '../../../styles';
import Footer from '../../components/Footer';
import ButtonMenuMercado from './components/ButtonMenuMercado';


const Mercado = () => {
  return <View style={styles.main}>
      <View style={styles.painelNavegaçao}>
          <View style={{padding:20,}}>
              <View style={styles.menuMercado}>
                  <ButtonMenuMercado/>
                  <ButtonMenuMercado/>
                  <ButtonMenuMercado/>
              </View>
              <View style={styles.menuMercado}>
                  <ButtonMenuMercado/>
                  <ButtonMenuMercado/>
                  <ButtonMenuMercado/>
              </View>
          </View>
      </View>

        <View>
            <Text>
                Hello world!
            </Text>
        </View>

        <View>
            <Footer/>
        </View>

  </View>;
}

export default Mercado;