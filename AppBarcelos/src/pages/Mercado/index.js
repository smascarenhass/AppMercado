import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../../styles';
import Footer from '../../components/Footer';
import Pesquisar from '../../components/Pesquisar';
import ButtonMenuMercado from './components/ButtonMenuMercado';


const Mercado = () => {
  return <View style={styles.main}>
      <View style={styles.painelNavegaçao}>
          <View style={{padding:20,}}>
              <View style={styles.menuMercado}>
                  <ButtonMenuMercado name='Frios'/>
                  <ButtonMenuMercado name='Açougue'/>
                  <ButtonMenuMercado name='Padaria'/>
              </View>
              <View style={styles.menuMercado}>
                  <ButtonMenuMercado name='Limpeza'/>
                  <ButtonMenuMercado name='Hortifruti'/>
                  <ButtonMenuMercado name='Bebidas'/>
              </View>
          </View>
      </View>

 {/* Main */}

        <Pesquisar />

        <View>
            <Text>
                Hello world!
            </Text>
        </View>

 {/* Footer */}

        <View>
            <Footer/>
        </View>

  </View>;
}

export default Mercado;