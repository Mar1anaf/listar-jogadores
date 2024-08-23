import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebaseConfig';

const RealizarLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const tentarLogar = () => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.navigate('PaginaPrincipal');
            })
            .catch(error => {
                console.error('Login failed:', error);
            });
    };
    
    return (
        <ImageBackground
            source={require('../image/foto.jpg')} // Certifique-se de que o caminho para a imagem está correto
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.header}>Login</Text>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    placeholderTextColor="#aaa"
                />
                <TextInput
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                    placeholderTextColor="#aaa"
                />
                <TouchableOpacity onPress={tentarLogar} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1, // Garante que o ImageBackground cubra toda a tela
        justifyContent: 'center',
        width: '100%', // Ocupa toda a largura
        height: '100%', // Ocupa toda a altura
    },
    container: {
        marginHorizontal: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        borderRadius: 10,
    },
    header: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderBottomColor: '#ECCEED',
        borderBottomWidth: 2,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: '#fff', // Adicionei essa linha para garantir que o texto digitado seja visível
    },
    button: {
        backgroundColor: '#ECCEED',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default RealizarLogin;
