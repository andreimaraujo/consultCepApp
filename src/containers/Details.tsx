import React, { useContext, useEffect, useState } from 'react';
import { NavigationContext } from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { Local } from '../utils/types';
import { getFieldHelper } from '../utils/helpers';
import { FIELDS } from '../utils/variables';

export function Details() {
    const navigation = useContext(NavigationContext);
    const cep = navigation.getParam('cep');
    const [local, setLocal] = useState<Local>({});

    const fetchApi = async () => {
        try {
            const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (res) {
                setLocal(res.data);
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <View style={styles.container}>
            {
                local ?
                    <View>
                        {
                            FIELDS.map((field) => (
                                <Text key={field.value}>
                                    {field.label}: {getFieldHelper(local, field.value)}
                                </Text>
                            ))
                        }
                    </View>
                    :
                    <Text>Localização não encontrada</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});