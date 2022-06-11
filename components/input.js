import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-web';


const Input = (props) => {

    const [isSecure, setIsSecure] = useState(true);

    const toggleVisibility = () => {
        setIsSecure(!isSecure);
    }

  return (
    <View style={[styles.container, styles.shadow]}>
        <Image style={styles.picture} source={{url: 'https://img-19.commentcamarche.net/iBYO1DOif2mcoMT7crnZ0Yy3XaU=/480x270/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg'}}/> 
        <TextInput style={styles.text} 
            value={props.value} 
            secureTextEntry={props.secure ? isSecure : props.secure} 
            placeholder={props.placeholder} 
            placeholderTextColor='#A1A8A6' 
            onChangeText={props.onChangeText}
        />
        {props.show && (
            <TouchableOpacity onPress={toggleVisibility}>
                <Image style={styles.show} source={require('../assets/pictures/show.png')}/>
            </TouchableOpacity>
        )}
    </View>
  );
}

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

export default Input;