import React from 'react';
import { TextInput, StyleSheet, View, Image} from 'react-native';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#F4F4F4',
        height: 60,
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 15
    },
    picture:{
        width: 24,
        height: 24,
        marginRight: 10,
        marginLeft: 20,
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    shadow:{
        shadowColor: 'rgba(90, 108, 234, 0.7)',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.10,
        shadowRadius: 12,
        elevation: 4,
    },
    text:{
        display: 'flex',
        flex: 1
    },
    show:{
        width: 20,
        height: 16,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 10,
        marginRight: 10
    }
});

const Input = (props) => {
  return (
    <View style={[styles.container, styles.shadow]}>
        <Image style={styles.picture} source={require('../assets/pictures/' + props.name + '.png')}/> 
        <TextInput style={styles.text} secureTextEntry={props.secure} placeholder={props.placeholder} placeholderTextColor='#A1A8A6'/>
        {props.show && (
            <Image style={styles.show} source={require('../assets/pictures/show.png')}/>
        )}
    </View>
  );
}

export default Input;