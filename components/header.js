import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 65
  },
  title: {
    fontSize: 40,
    color: '#4de389',
    fontWeight: '400',
    marginTop: 20,
    fontFamily: 'Viga',
    letterSpacing: 0.5
  },
  logo:{
    width: 124,
    height: 124
  }
});

const Header = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <Text style={styles.title}>Ninja Pics</Text>
    </View>
  );
}

export default Header;