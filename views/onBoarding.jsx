import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


const OnBoarding = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
                <Text style={styles.title}>Ninja Pics</Text>
            </View>
            <View style={styles.button_container}>
                <TouchableOpacity
                    style={styles.touchable_container}
                >
                    <Text style={styles.button_text}>C'est parti !</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const styles = StyleSheet.create({
        container: {
            marginTop: 'auto',
            marginBottom: 'auto'
        },
        top_container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            fontSize: 40,
            color: '#4de389',
            fontWeight: '400',
            marginTop: 20,
            fontFamily: 'Viga'
        },
        button_container: {
            alignItems: 'center',
            marginTop: 137
        },
        touchable_container: {
            backgroundColor: '#4de389',
            borderRadius: 15,
            width: 140,
            height: 60
        },
        button_text: {
            fontFamily: 'Gothic A1',
            fontSize: 16,
            fontWeight: '700',
            color: 'white',
            textAlign: 'center',
            marginTop: 'auto',
            marginBottom: 'auto'
        },
        logo:{
            width: 165,
            height: 165
        }
    });
}

export default OnBoarding;