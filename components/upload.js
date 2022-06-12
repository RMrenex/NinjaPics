import React from 'react';
import { Text, View, StyleSheet, Image, PermissionsAndroid, Platform} from 'react-native';

const Upload = (props) => {

    const requestCameraPermission = async() => {
        if(Platform.OS === 'android'){
            try{
                const granted =  await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: "Cool Photo App Camera Permission",
                        message:
                          "Cool Photo App needs access to your camera " +
                          "so you can take awesome pictures.",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK"  
                    }
                );
                if(granted === PermissionsAndroid.RESULTS.GRANTED){
                    console.log("You can use the camera");
                } else {
                    console.log("Camera permission denied");
                }
            }catch(err){
                console.warn(err);
            }
        }
    }

  return (
    <View style={[styles.container, styles.shadow]}>
        <View style={styles.sub_container}>
            <Image style={styles.icon} source={require('../assets/pictures/plus.png')}/>
        </View>
        <Text style={styles.text}>{props.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 60,
        borderWidth: 1,
        borderColor: '#F4F4F4',
        marginRight: 32,
        marginLeft: 32,
        marginBottom: 10,
        borderRadius: 24
    },
    sub_container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: 20,
        backgroundColor: '#4de389',
        borderRadius: 20,
        margin: 5
    },
    icon:{
        width: 24,
        height: 24,
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    text:{
        display: 'flex',
        flex: 3,
        fontFamily: 'Gothic A1',
        fontSize: 15,
        fontWeight: '800',
        color: '#09051C',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 15
    },
    shadow:{
        shadowColor: 'rgba(90, 108, 234, 0.7)',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 4,
    },
});

export default Upload;