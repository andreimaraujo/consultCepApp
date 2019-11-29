import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Image } from "react-native";
import { NavigationContext } from 'react-navigation';
import { isValidCep } from "@brazilian-utils/validators";

export function Home() {
    const navigation = useContext(NavigationContext);
    const [cep, setCep] = useState("");
    
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/icon/logo.png")} />
            <View style={styles.boxConsult}>
                <TextInput
                    style={[styles.input, !isValidCep(cep) ? styles.borderValid : styles.errorBorder]}
                    value={cep}
                    onChangeText={(e) => setCep(e)}
                    placeholder="Informe o CEP"
                    maxLength={8}
                    keyboardType="numeric"
                />
                { 
                    isValidCep(cep) &&
                    <Text style={styles.error}>
                        CEP inválido
                    </Text> 
                } 
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Details', { cep })}
                    disabled={cep.length < 8 || isValidCep(cep)}>
                    <Text style={styles.textButton}>Consultar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFC600"
    },
    button: {
        width: 300,
        backgroundColor: "#3498db",
        padding: 10,
        borderRadius: 3,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    textButton: {
        fontSize: 16,
        color: "#fff"
    },
    logo: {
        marginTop: 150,
        width: 150,
        height: 150
    },
    input: {
        backgroundColor: "#fff",
        fontSize: 16,
        borderRadius: 3,
        padding: 10,
        width: 300,
        borderWidth: 1
    },
    boxConsult: {
        justifyContent: "center",
        height: "35%"
    },
    error: {
        color: "red"
    },
    borderValid: {
        borderColor: "black"
    },
    errorBorder: {
        borderColor: "red"
    }
});