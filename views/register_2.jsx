import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/header';
import Stepper from '../components/stepper';
import Upload from '../components/upload';

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
        marginTop: 10,
    },
    upload_container:{
        marginTop: 50
    },
    create:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4de389',
        borderRadius: 15,
        width: 180,
        height: 60,
    },
    create_text:{
        fontFamily: 'Gothic A1',
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    },
    footer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
})

const Register_2 = () => {
  return (
    <View>
        <Header/>
        <View style={styles.container}>
            <Text style={styles.top_title}>Inscrivez-vous gratuitement</Text>
            <Stepper/>
        </View>
        <View style={styles.upload_container}>
            <Upload content='Photo de face'/>
            <Upload content='Photo de profil gauche'/>
            <Upload content='Photo de profil droit'/>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.create}>
                    <Text style={styles.create_text}>Créer un compte</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

export default Register_2;