import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";

export default function Table({ data, headers }) {  

    const renderHeader = () => {
        return (
            <View style={styles.headerRow}>
                {headers.map((header, index) => (
                    <Text key={index} 
                        style={
                            index === 0 ? styles.headerCellFirst 
                            : index === headers.length - 1 ? styles.headerCellLast
                            : styles.headerCell}>{header}
                    </Text>
                ))}
            </View>
        )
    }

    const renderRow = ({ item }) => (
            <View style={styles.row}>
                <Text style={styles.cellFirst}>{item.id}</Text>
                <Text style={styles.cell}>{item.name}</Text>
                <Text style={styles.cell}>{item.description}</Text>
                <Text style={styles.cell}>{item.price}</Text>
                <Text style={styles.cellLast}>{item.stock}</Text>
            </View>
    );

    return (
        <View style={styles.table}>
            {renderHeader()}
            <FlatList
                data={data}
                renderItem={renderRow}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    table: {
        margin: 10,
        width: Dimensions.get('window').width * 0.85,
    },
    headerRow: {
        flexDirection: 'row',
        backgroundColor: '#f8f8f8',
        borderWidth: 1,
        paddingLeft: 5,
    },
    headerCellFirst: {
        width: 30,
        padding: 5,
        fontWeight: 'bold',
        backgroundColor: '#f1f1f1',
        borderRightWidth: 1,
    },
    headerCellLast: {
        width: 50,
        padding: 5,
        fontWeight: 'bold',
        backgroundColor: '#f1f1f1',
        borderRightWidth: 1,
    },
    headerCell: {
        flex: 1,
        padding: 5,
        fontWeight: 'bold',
        backgroundColor: '#f1f1f1',
        borderRightWidth: 1,
    },
    row: {
        flexDirection: 'row',
        paddingLeft: 5,
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
    },
    cellFirst: {
        width: 30,
        padding: 5,
        borderRightWidth: 1,
    },
    cellLast: {
        width: 50,
        padding: 5,
        borderRightWidth: 1,
    },
    cell: {
        flex: 1,
        padding: 5,
        flexShrink: 1,
        flexGrow: 1,
        flexBasis: 0,
        borderRightWidth: 1,
    },
})