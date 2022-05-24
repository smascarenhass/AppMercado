import * as React from 'react';
import { Button, Text, View } from 'react-native';
import {ScrollView, TouchableOpacity } from 'react-native-web';
import { styles } from '../../../styles';
import Titulo from '../../components/Titulo';
import Icons from 'react-native-vector-icons/AntDesign'
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Mercado from '../Mercado';

export default function Home({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
       <View>
 
 {/* Header */}
 
         <View>
           <Titulo />
 
           <View style={styles.painelNavegaçao}>
             <View style={styles.button}>
               <TouchableOpacity onPress={() => navigation.navigate('Promoçoes')}>
               <Icons name='wallet' size={30} color='orange'/>
               </TouchableOpacity>
             </View>
 
             <View style={styles.button}>
               <TouchableOpacity onPress={() => navigation.navigate('Mercado')}>
               <Icons name='isv' size={30} color='orange'/>
               </TouchableOpacity>
             </View>
 
             <View style={styles.button}>
               <TouchableOpacity onPress={() => navigation.navigate('Promoçoes')}>
               <Icons name='shoppingcart' size={30} color='orange'/>
               </TouchableOpacity>
             </View>
 
             <View style={styles.button}>
               <TouchableOpacity onPress={() => navigation.navigate('Promoçoes')}>
                   <Icons name='user' size={30} color='orange'/>
               </TouchableOpacity>
             </View>
 
           </View>
         </View>
 
 {/* Main  */}
 
                    <View style={styles.main}>
            
            <View style={styles.cardsPromoçoes}>
                <Card/>
                <Card/>
            </View>

            <View style={styles.cardsPromoçoes}>
                <Card/>
                <Card/>
            </View>

            <View style={styles.cardsPromoçoes}>
                <Card/>
                <Card/>
            </View>

            <View style={styles.cardsPromoçoes}>
                <Card/>
                <Card/>
            </View>

            <View style={styles.cardsPromoçoes}>
                <Card/>
                <Card/>
            </View>

            <View style={styles.cardsPromoçoes}>
                <Card/>
                <Card/>
            </View>

            </View>
 
     {/* Footer */}
 
           <View>
 
             <Footer/>
 
           </View>
 
         </View>
    </ScrollView>
  );
};
