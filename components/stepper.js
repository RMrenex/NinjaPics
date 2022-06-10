import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
         display: 'flex',
         flexDirection: 'row',
         marginTop: 40
    },
    step_container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    step:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#4de389',
        backgroundColor: '#caf6dc',
        borderRadius: 50,
        width: 35,
        height: 35,
        color: 'white'
    },
    active:{
        backgroundColor: '#4de389',
    },
    line_container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line:{
        width: 60,
        height: 2,
        backgroundColor: '#DFDFDF',
    }
});

const Stepper = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.step_container}>
            <Text style={[styles.step, styles.active]}>1</Text>
            <Text>Informations</Text>
        </View>

        <View style={styles.line_container}>
            <Text style={styles.line}> </Text>
        </View>

        <View style={styles.step_container}>
            <Text style={styles.step}>2</Text>
            <Text>   Photos   </Text>
        </View>
    </View>
  );
}

export default Stepper;