import { View, Pressable, Text, StyleSheet } from "react-native";

export default function Button({ title, onPress, disabled }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable 
                style={styles.button} onPress={onPress}
                disabled={disabled ? disabled : false}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});