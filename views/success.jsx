import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width: 230,
        height: 215,
        marginTop: 120
    },
    succes_text_container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontFamily: 'Gothic A1',
        fontSize: 30,
        fontWeight: '700',
        color: '#4de389',
        marginTop: 50
    },
    sub_title:{
        fontFamily: 'Gothic A1',
        fontSize: 20,
        fontWeight: '700',
    },
    button_container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4de389',
        borderRadius: 15,
        width: 220,
        height: 60,
        marginTop: 115
    },
    button_text:{
        fontFamily: 'Gothic A1',
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    }

});

const Success = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.icon} source={require('../assets/pictures/success.png')} />
        <View style={styles.succes_text_container}>
            <Text style={styles.title}>Félicitation !</Text>
            <Text style={styles.sub_title}>Vous avez débusqué Romain</Text>
        </View>
        <TouchableOpacity style={styles.button_container}>
                <Text style={styles.button_text}>Revenir à l'accueil</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Success;