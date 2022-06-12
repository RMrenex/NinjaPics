import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ToastAndroid, Platform} from 'react-native';
import Header from '../components/header';
import Stepper from '../components/stepper';
import Input from '../components/input';

const Register = ({navigation}) => {

    const [pseudo, setPseudo] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [city, setCity] = useState();


    const emailValidator = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase());
    }

    const toast = (message) => {
        if(Platform.OS === 'android'){
            ToastAndroid.show(message, ToastAndroid.CENTER, ToastAndroid.SHORT);
        }
    }

    const goToNextStep = () => {

        if(pseudo && email && password && confirmPassword && city){
            if(emailValidator(email)){
                if(password === confirmPassword){
                    navigation.navigate('Register2');

                } else {
                    toast('Passwords is not same');
                }

            } else {
                toast('Email format error')
            }
        } else {
            toast('One or any field is blank')
        } 
    }

    return (
        <ScrollView>
            <Header />
            <View style={styles.container}>
                <Text style={styles.top_title}>Inscrivez-vous gratuitement</Text>
                <Stepper active={true} />
            </View>
            <View style={styles.input_container}>
                <Input placeholder='Pseudo' secure={false} name='profile' onChangeText={(value) => setPseudo(value)} />
                <Input placeholder='E-mail' secure={false} name='message' onChangeText={(value) => setEmail(value)}/>
                <Input placeholder='Mot de passe' secure={true} name='lock' show={true} onChangeText={(value) => setPassword(value)} />
                <Input placeholder='Confirmation mot de passe' secure={true} name='lock' show={true} onChangeText={(value) => setConfirmPassword(value)}/>
                <Input placeholder='Ville' secure={false} name='location' onChangeText={(value) => setCity(value)} />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.next} onPress={goToNextStep}>
                    <Text style={styles.next_text}>Suivant</Text>
                </TouchableOpacity>
                <Text style={styles.already_account}>Dejà un compte ?</Text>
            </View>
        </ScrollView>
    );
}

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

export default Register;