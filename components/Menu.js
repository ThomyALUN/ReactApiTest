import { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import CreateProduct from "./CreateProduct";
import SearchProduct from "./SearchProduct";
import Button from "./Button";
import ShowAll from "./ShowAll";

export default function Menu() {
    const [route, setRoute] = useState('create');

    return (
        <View style={styles.menuContainer}>
            <View style={styles.routeContainer}>
                {   
                    route === 'create' ? 
                        <CreateProduct /> 
                    : route === 'list' ?
                        <ShowAll /> 
                    : route === 'search'? 
                        <SearchProduct /> 
                    : null
                }
            </View>
            <Text style={styles.menuTitle}>Menu</Text>
            <View style={styles.buttonContainer}>
                <Button 
                    title={"Crear\nproducto"} 
                    onPress={() => setRoute('create')}
                    disabled={route === 'create'}
                />
                <Button 
                    title={"Listar\nproductos"} 
                    onPress={() => setRoute('list')}
                    disabled={route === 'list'}
                />
                <Button 
                    title={"Buscar\nproducto"}
                    onPress={() => setRoute('search')}
                    disabled={route === 'search'}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuTitle: {
        fontSize: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    routeContainer: {
        backgroundColor: 'lightgreen',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
});