import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <View style={{ backgroundColor: '#e3ff75', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 35, color: 'red' }}>Login</Text>
            </View>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, marginTop: 15 }}>
                <TextInput
                    style={{ height: 40, width: 350, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                    placeholder="Email"
                    onChangeText={setUsername}
                    value={username}
                />
                <TextInput
                    style={{ height: 40, width: 350, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                />
                <Button
                    style={{ backgroundColor: '#e3ff75' }}
                    title={'Login'}
                    onPress={() => navigation.navigate('Home')}
                    disabled={loading}
                />
                <TouchableOpacity
                    style={{ alignItems: 'center', marginTop: 10 }} // Sử dụng style object để định dạng TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={{ color: 'red' }}>Register</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
