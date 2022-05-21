import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { styles } from '../../../../styles';

// import { Container } from './styles';

const ButtonMenuMercado = () => {
  return <View>

<View style={styles.buttonMenuMercado}>
              <TouchableOpacity>
                    <Text style={styles.textMenuMercado}>Frios</Text>
              </TouchableOpacity>
          </View>

  </View>;
}

export default ButtonMenuMercado;