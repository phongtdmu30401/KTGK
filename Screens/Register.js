import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Register({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [name, setName] = useState('');

    const handleRegister = async () => {
        if (password !== repassword) {
            Alert.alert('Mật khẩu và mật khẩu nhập lại không khớp');
            return;
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <Text style={{
                fontSize: 40,
                fontWeight: "bold",
                alignSelf: "center",
                marginBottom: 30,
            }}>
                REGISTER
            </Text>

            <TextInput
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
                style={{
                    margin: 10
                }}
                keyboardType='email-address'
            />
            <TextInput
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
                style={{
                    margin: 10
                }}
            />
            <TextInput
                placeholder="RePassword"
                onChangeText={setRepassword}
                value={repassword}
                secureTextEntry={true}
                style={{
                    margin: 10
                }}
            />
            <TextInput
                placeholder="Full name"
                onChangeText={setName}
                value={name}
                style={{
                    margin: 10
                }}
            />

            <TouchableOpacity
                onPress={handleRegister}
                style={{
                    margin: 10,
                    padding: 10,
                    alignItems: 'center',
                    backgroundColor: 'blue',
                }}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ alignItems: 'center', marginTop: 20 }}
            >
                <Text style={{ color: 'blue' }}>Go Back</Text>
            </TouchableOpacity>


        </View>
    );
}
