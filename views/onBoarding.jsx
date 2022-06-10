import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

const OnBoarding = () => {

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
        },
        button_container: {
            alignItems: 'center',
            marginTop: 137
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
                <Text style={styles.title}>Ninja Pics</Text>
            </View>
            <View style={styles.button_container}>
                <Button
                    title="C'est parti !"
                    color='#4de389'
                    style={styles.button}
                />
            </View>
        </View>
    );
}

export default OnBoarding;