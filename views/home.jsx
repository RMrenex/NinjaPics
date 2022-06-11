import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import Menu from '../components/menu';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    top_title:{
        fontFamily: 'Gothic A1',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 100,
        marginBottom: 65
    },
    alone_icon:{
        width: 72,
        height: 70,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    group_icon:{
        width: 255,
        height: 72,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 130
    },
    touchable_container:{
        backgroundColor: '#4de389',
        borderRadius: 15,
        width: 230,
        height: 60,
        marginTop: 45,
    },
    button_text:{
        fontFamily: 'Gothic A1',
        fontSize: 20,
        fontWeight: '800',
        color: 'white',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    }
});

const Home = () => {
  return (
      <>
          <View style={styles.container}>
              <Text style={styles.top_title}>Choisissez votre mode de jeu</Text>
              <View style={styles.alone}>
                  <Image style={styles.alone_icon} source={require('../assets/pictures/solo.png')} />
                  <TouchableOpacity
                      style={styles.touchable_container}
                  >
                      <Text style={styles.button_text}>En solo</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.team}>
                  <Image style={styles.group_icon} source={require('../assets/pictures/group.png')} />
                  <TouchableOpacity
                      style={styles.touchable_container}
                  >
                      <Text style={styles.button_text}>En groupe</Text>
                  </TouchableOpacity>
              </View>
          </View>
          <Menu/>
      </>
  );
}

export default Home;