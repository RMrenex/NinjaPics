import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Header from '../components/header';
import Stepper from '../components/stepper';
import Input from '../components/input';

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
    input_container:{
        marginTop: 30
    },
    footer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    next:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4de389',
        borderRadius: 15,
        width: 180,
        height: 60,
    },
    next_text:{
        fontFamily: 'Gothic A1',
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    },
    already_account:{
        fontFamily: 'Gothic A1',
        fontSize: 12,
        fontWeight: '500',
        color: '#4de389',
        marginTop: 24,
        marginBottom: 24
    }
});

const Register = () => {
  return (
    <ScrollView>
        <Header/>
        <View style={styles.container}>
            <Text style={styles.top_title}>Inscrivez-vous gratuitement</Text>
            <Stepper active={true}/>
        </View>
        <View style={styles.input_container}>
            <Input placeholder='Pseudo' secure={false} name='profile'/>
            <Input placeholder='E-mail' secure={false} name='message'/>
            <Input placeholder='Mot de passe' secure={true} name='lock' show={true}/>
            <Input placeholder='Confirmation mot de passe' secure={true} name='lock' show={true}/>
            <Input placeholder='Ville' secure={false} name='location'/>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.next}>
                <Text style={styles.next_text}>Suivant</Text>
            </TouchableOpacity>
            <Text style={styles.already_account}>Dejà un compte ?</Text>
        </View>
    </ScrollView>
  );
}

export default Register;