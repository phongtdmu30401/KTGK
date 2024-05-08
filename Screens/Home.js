import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export function TodoListApp() {
    const navigation = useNavigation();
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
    }, []);



    const renderItem = ({ item, index }) => (
        <View style={styles.todoItem}>
            <TouchableOpacity onPress={() => {}}>
                <Icon name="times" size={20} color="red" />
            </TouchableOpacity>
            <Text>{`${index + 1}. ${item.title}`}</Text>
        </View>
    );


    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder="Add Todo..."
                value={text}
                onChangeText={setText}
            />
            <TouchableOpacity style={styles.addButton} onPress={() => {}}>
                <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.list}
            />
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ alignItems: 'center', marginTop: 20 }}
            >
                <Text style={{ color: 'blue' }}>Log out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    backButton: {
        marginBottom: 10,
    },
    backButtonText: {
        color: '#007bff',
        fontSize: 16,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    addButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    list: {
        flex: 1,
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
});
export default TodoListApp;
