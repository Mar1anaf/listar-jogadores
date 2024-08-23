import { getFirestore } from "firebase/firestore";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

const PaginaBemVindo = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../image/foto.jpg')} // Certifique-se de que o caminho para a imagem está correto
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.header}>Bem-vindo!</Text>
                <Text style={styles.paragraph}>Você está logado com sucesso.</Text>
                <TouchableOpacity onPress={() => navigation.navigate('listarJogadores')} style={styles.button}>
                    <Text style={styles.buttonText}>Verificar lista de jogadores</Text>
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
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
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

export default PaginaBemVindo;
