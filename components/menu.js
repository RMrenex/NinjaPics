import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        /* position: 'fixed', crash app*/ 
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: '#252525',
        color: 'white',
        height: 60,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    icon:{
        width: 20,
        height: 20,
    }

});

const Menu = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.icon} source={require('../assets/pictures/home.png')}/>
        <Image style={styles.icon} source={require('../assets/pictures/home.png')}/>
        <Image style={styles.icon} source={require('../assets/pictures/home.png')}/>
        <Image style={styles.icon} source={require('../assets/pictures/home.png')}/>
    </View>
  );
}

export default Menu;