import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import axios from "axios";

import DataInput from "./DataInput";
import Button from "./Button";

export default function SearchProduct() {
    const [option, setOption] = useState('search');

    const [id, setId] = useState('');

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

    const reset = () => {
        setId('');
        setData({
            name: '', 
            description: '', 
            price: '', 
            stock: '' 
        });
        setOption('search');
    }

    const searchSubmit = async () => {
        axios.get('http://192.168.1.4:8000/api/products/'+id)
            .then(response => {
                console.log(response);
                console.log(response.data);
                setOption('modify');
                setData(response.data);
                console.log(data);
            })
            .catch(error => {
                alert('Producto no encontrado');
                console.error(error);
            });
    }
    
    const updateSubmit = async () => {
        axios.put('http://192.168.1.4:8000/api/products/'+id, data)
            .then(response => {
                console.log(response);
                alert('Producto modificado');
            })
            .catch(error => {
                console.error(error);
            });
    }

    const deleteSubmit = async () => {
        axios.delete('http://192.168.1.4:8000/api/products/'+id)
            .then(response => {
                console.log(response);
                alert('Producto eliminado');
                reset();
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <View style={styles.formContainer}>
            {   
                option === 'search'? 
                    <View style={styles.searchContainer}>
                        <DataInput label={"ID"} inputMode="numeric" value={id} onChangeText={(value) => setId(value)}/>
                        <Button title="Buscar producto" onPress={searchSubmit} />
                    </View>
                : option === 'modify'?
                    <View style={styles.modifyContainer}>
                        <Text style={styles.title}>Modificar un producto</Text>
                        <DataInput 
                            label="ID" inputMode="numeric" 
                            value={id} editable={false}
                        />
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
                            value={data.stock.toString()} onChangeText={(value) => inputChange('stock', value)}
                        />
                        <View style={styles.buttonContainer}>
                            <Button title="Buscar otro producto" onPress={reset}/>
                            <Button title="Modificar producto" onPress={updateSubmit}/>
                            <Button title="Eliminar producto" onPress={deleteSubmit}/>
                        </View>
                    </View>
                : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonContainer: {
        marginVertical: 8,
        paddingHorizontal: 10,
    },
    searchContainer: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
    },
    modifyContainer: {
        padding: 10,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
    }
});