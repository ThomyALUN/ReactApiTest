import { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

export default function DataInput({ label, inputMode, value, editable, onChangeText }) {

    return (
        <View style={styles.inputContainer}>
            <Text>{label}</Text>
            <TextInput 
                style={styles.input} 
                inputMode={inputMode}
                value={value}
                editable={ editable ? editable : true}
                onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
    },
    inputContainer: {
        marginVertical: 3,
        padding: 5,
    },
});