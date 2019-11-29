import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from "react-native";
import { NavigationContext } from 'react-navigation';

export function Home() {
    const navigation = useContext(NavigationContext);
    const [cep, setCep] = useState("");

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.top}>Consulte seu CEP</Text>
            </View>
            <TextInput value={cep} onChangeText={(e) => setCep(e)} placeholder="Informe o cep" />
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Details', {cep})}>
                <Text>Consultar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    button: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 10
    },
    top: {
        marginTop: 10,
        alignSelf: 'stretch',
        fontSize: 20
    },
    input: {
        
    }
});