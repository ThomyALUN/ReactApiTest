import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import axios from "axios";

import Table from "./Table";
import Button from "./Button";

export default function ShowAll() {
    const [products, setProducts] = useState([]);

    const tableHeaders = [
        'ID',
        'Nombre',
        'Descripción',
        'Precio',
        'Stock',
    ];

    const retrieveData = async () => {
        axios.get('http://192.168.1.4:8000/api/products').then(response => {
            console.log(response);
            console.log(response.data);
            setProducts(response.data);
        }).catch(error => {
            console.error(error)
        });
    }

    return (
        <View style={styles.showAllContainer}>
            <Text style={styles.title}>Lista de productos</Text>
            {
                products.length > 0? 
                    <View style={styles.productsContainer}>
                        <Table data={products} headers={tableHeaders}/> 
                    </View>
                : null
            }
            <View style={styles.buttonContainer}>
                <Button title="Mostrar productos" onPress={retrieveData}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    showAllContainer: {
        paddingVertical: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    productsContainer: {
        marginVertical: 10,
    },
    buttonContainer: {
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});