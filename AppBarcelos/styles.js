import {StyleSheet, TouchableOpacity} from 'react-native';

export const styles = StyleSheet.create({

// Header

   painelNavegaçao: {
       backgroundColor: 'black',
       alignItems: 'center',
       justifyContent: 'space-around',
       flexDirection:'row',

   },

   viewTitulo: {
       alignItems: 'center',
       backgroundColor: 'black',
   },

   titulo: {
       fontWeight: 'bold',
       fontSize: 50,
       alignItems: 'center',
       justifyContent:'center',
       color: 'orange',
       margin: 5,
   },

   menuMercado: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    },

    buttonMenuMercado: {
    backgroundColor: 'orange',
    width: 120,
    height: 20,
    alignItems: 'center',
    margin: 5,
    borderColor: 'red',
    },

    textMenuMercado: {
    fontWeight: 'bold',
    },

// Components

   button: {
       margin: 5,
   },

   textButton: {
       color: 'white',
       padding: 10,
   },

   card: {
       backgroundColor: 'orange',
       width: 150,
       height: 150,
       margin: 0,
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection: 'column',
   },

   // Main

   main: {
       backgroundColor: '#A9A9A9',
   },

   cardsPromoçoes: {
       flexDirection: 'row',
       justifyContent: 'space-evenly',
       marginTop: 20,
   },


    // Footer

   footer: {
       backgroundColor: 'black',
       padding: 5,
       alignItems: 'center',
       justifyContent: 'center',
   },

   textFooter: {
       color: 'white',

   },

})
