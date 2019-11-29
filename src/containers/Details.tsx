import React, { useContext, useEffect, useState } from 'react';
import { NavigationContext, FlatList } from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { Local } from '../utils/types';
import { getFieldHelper } from '../utils/helpers';
import { FIELDS } from '../utils/variables';

export function Details() {
    const navigation = useContext(NavigationContext);
    const cep = navigation.getParam('cep');
    const [local, setLocal] = useState<Local>({});
    const [error, setError] = useState(false);

    const fetchApi = async () => {
        try {
            const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (res) {
                setLocal(res.data);
            }
        } catch (e) {
            console.log(e);
            setError(true);
        }
    }

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Exibindo resultados do CEP: {cep}</Text>
                {
                    !error ?
                        <FlatList
                            data={FIELDS}
                            renderItem={({ item }) =>
                                <View style={styles.box}>
                                    <Text style={styles.text}>{item.label}:  </Text>
                                    <Text style={styles.text}>{getFieldHelper(local, item.value)}</Text>
                                </View>
                            }
                        />
                        :
                        <View>
                            <Text style={styles.error}>Ocorreu algum problema, mas já estamos solucionando</Text>
                        </View>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#FFC600",
        fontFamily: "Verdana",
    },
    box: {
        flexDirection: "row",
        padding: 20,
        borderColor: "black",
        borderWidth: 1,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 20,
        marginBottom: 40,
        marginTop: 30,
        fontWeight: "600",
        textAlign: "center",
        color: "black"
    },
    text: {
        fontWeight: "600",
        fontSize: 18,
        color: "black"
    }, 
    error: {
        fontWeight: "600",
        fontSize: 18,
        color: "black",
        justifyContent: "center",
        textAlign: "center"
    }
});