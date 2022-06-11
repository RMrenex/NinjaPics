import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Header from '../components/header';
import Input from '../components/input';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const checkLogin = () => {
        if(email !== undefined && password !== undefined){
            if(emailValidator(email)){
                console.log('good');
            }else {
                console.log('email format error');
            }
        }
    }
    
    const emailValidator = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase());
    }

  return (
    <View onLayout={props.layout}>
        <Header/>
        <Text style={styles.top_title}>Connectez-vous à votre compte</Text>
        <View>
            <Input placeholder='E-mail' name='message' onChangeText={(value) => setEmail(value)}/>
            <Input placeholder='Mot de passe' name='lock' secure={true} show={true} onChangeText={(value) => setPassword(value)}/>
        </View>
        <View style={styles.auth_container}>
            <Text style={styles.continue}>Ou continuer avec</Text>
            <View style={styles.buttons_container}>
                <TouchableOpacity style={styles.button}>
                    <View style={styles.button_sub_container}>
                        <Image style={styles.brand_logo} source={require('../assets/pictures/google.png')}/>
                        <Text style={styles.button_text}>Google</Text>
                    </View>
                </TouchableOpacity>
                    <>&nbsp;&nbsp;&nbsp;&nbsp;</>
                <TouchableOpacity style={styles.button}>
                    <View style={styles.button_sub_container}>
                        <Image style={styles.brand_logo} source={require('../assets/pictures/facebook.png')}/>
                        <Text  style={styles.button_text}>Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.password_forget}>Mot de passe oublié ?</Text>
            <TouchableOpacity style={styles.connection_button} onPress={checkLogin}>
                <Text style={styles.connection_text}>Se connecter</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    top_title:{
        fontFamily: 'Gothic A1',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 35
    },
    auth_container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    continue:{
        fontFamily: 'Gothic A1',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 10,
        marginBottom: 30
    },
    buttons_container:{
        display: 'flex',
        flexDirection: 'row',
    },
    button:{
        backgroundColor: '#e8f0e5',
        borderRadius: 15,
        height: 60,
        width: 160
    },
    button_text:{
        fontFamily: 'Gothic A1',
        fontSize: 14,
        fontWeight: '400',
        color: '#09051C',
    },
    brand_logo:{
        width: 24,
        height: 24,
        marginRight: 10
    },
    button_sub_container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        alignItems: 'end',
    },
    password_forget:{
        fontFamily: 'Gothic A1',
        fontSize: 14,
        fontWeight: '500',
        color: '#4de389',
        marginTop: 24,
        marginBottom: 24,
        textDecorationLine: 'underline',
    },
    connection_button:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4de389',
        borderRadius: 15,
        width: 140,
        height: 60,
    },
    connection_text:{
        fontFamily: 'Gothic A1',
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    }
});

export default Login;