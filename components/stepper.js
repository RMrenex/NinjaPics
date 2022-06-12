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
    },
    round:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        //backgroundColor: '#4de389',
        backgroundColor: '#caf6dc',
        borderRadius: 50,
        width: 35,
        height: 35,
    },
    number:{
        color: 'white'
    }
});

const Stepper = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.step_container}>
            <View style={[styles.round, styles.active]}>
                <Text style={styles.number}>1</Text>
            </View>
            <Text>Informations</Text>
        </View>

        <View style={styles.line_container}>
            <Text style={styles.line}> </Text>
        </View>

        <View style={styles.step_container}>
            <View style={styles.round}>
                <Text style={styles.number}>2</Text>
            </View>
            <Text>   Photos   </Text>
        </View>
    </View>
  );
}

export default Stepper;