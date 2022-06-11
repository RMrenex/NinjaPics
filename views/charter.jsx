import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Modal, TouchableOpacity } from 'react-native-web';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        fontFamily: 'Gothic A1',
        fontSize: 13,
        fontWeight: '300',
        marginRight: 30,
        marginLeft: 30,
        marginTop: 90
    },
    underline:{
        textDecorationLine: 'underline',
    },
    accept:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50
    },
    check:{
        backgroundColor: 'white',
        width: 15,
        height: 15,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#4de389',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 5
    },
    accept_text:{
        fontFamily: 'Gothic A1',
        fontSize: 12,
        fontWeight: '300',
        color: '#afafaf'
    },
    button:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4de389',
        borderRadius: 15,
        width: 140,
        height: 60,
        marginTop: 40
    },
    button_text:{
        fontFamily: 'Gothic A1',
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    },
    modal_container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
    dialog_container:{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        height: 200,
    },
    dialog_title:{
        fontFamily: 'Gothic A1',
        fontSize: 18,
        fontWeight: '700',
    },
    dialog_sub_container:{
        maxWidth: '90%',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    dialog_content:{
        fontFamily: 'Gothic A1',
        fontSize: 12,
        fontWeight: '300',
        marginTop: 20,
        marginBottom: 20
    },
    ok_button:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4de389',
        borderRadius: 15,
        height: 40,
    },
    ok_text:{

    }
});

const Charter = () => {
  return (
    <View style={styles.container}>
        <Modal
            animationType='fade'
            transparent={true}
            visible={false}
        >
            <View style={styles.modal_container}>
                <View style={styles.dialog_container}>
                    <View style={styles.dialog_sub_container}>
                        <Text style={styles.dialog_title}>Il manque un petit truc là ...</Text>
                        <Text style={styles.dialog_content}>Tu dois accepter les conditions d’utilisation pour pouvoir t’inscrire</Text>
                        <TouchableOpacity style={styles.ok_button}>
                            <Text style={styles.ok_text}>Se connecter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
        <Text style={styles.content}>
            Bienvenue sur Ninja Pics !
            {'\n\n'}
            Avant d’utiliser l’application, il est important que tu sois informé de tes droits en matière de données personnelles. En utilisant Ninja Pics,  tu nous fournis ton nom, ta date de naissance, ton numéro de téléphone et tes données de position. Tout cela, nous l’utilisons pour que tu puisses utiliser Ninja Pics.
            {'\n\n'}
            Notre <Text style={styles.underline}>politique de protection des données</Text> explique en détail l’usage de tes données. Prends le temps de la lire attentivement, nous l’avont rendue la plus claire possible, et en sommes fiers !
            {'\n\n'}
            Si une question reste cependant sans réponses, tu peux toujours nous contacter sur <Text style={styles.underline}>love@ninjapics.fr</Text> !
        </Text>
        <View style={styles.accept}>
            <Text style={styles.check}> </Text>
            <Text style={styles.accept_text}>J’accepte <Text style={styles.underline}>les conditions d’utilisation du service</Text></Text>
        </View>
        <TouchableOpacity style={styles.button}>
                <Text style={styles.button_text}>Continuer</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Charter;