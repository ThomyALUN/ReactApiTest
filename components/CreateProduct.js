import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import axios from "axios";

import DataInput from "./DataInput";
import Button from "./Button";

export default function CreateProduct() {
    const [data, setData] = useState({ 
        name: '', 
        description: '', 
        price: '', 
        stock: '' 
    });

    const inputChange = (field, value) => {
        setData({
            ...data,
            [field]: value
        });
    }
    
    const inputSubmit = async () => {
        if (data.name === '' || data.description === '' || data.price === '' || data.stock === '') {
            alert('Todos los campos son requeridos');
            return;
        }
        axios.post('http://192.168.1.4:8000/api/products', data)
            .then(response => {
                console.log(response);
                alert('Producto creado');
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <View style={styles.formContainer}>
            <Text style={styles.title}>Crear un producto</Text>
            <DataInput 
                label="Nombre" inputMode="text" 
                value={data.name} onChangeText={(value) => inputChange('name', value)} 
            />
            <DataInput 
                label="Descripción" inputMode="text"
                value={data.description} onChangeText={(value) => inputChange('description', value)}
            />
            <DataInput 
                label="Precio" inputMode="decimal"
                value={data.price} onChangeText={(value) => inputChange('price', value)}
            />
            <DataInput 
                label="Stock" inputMode="numeric"
                value={data.stock} onChangeText={(value) => inputChange('stock', value)}
            />
            <Button title="Crear producto" onPress={inputSubmit}/>
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        padding: 10,
        flexDirection: 'column',
        alignContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});