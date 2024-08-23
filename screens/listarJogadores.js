import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, FlatList, ScrollView } from "react-native";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "../firebaseConfig";  // Verifique se o caminho está correto
import { format } from "date-fns";

const PaginaSimples = () => {
    const [jogadores, setJogadores] = useState([]);

    useEffect(() => {
        const fetchJogadores = async () => {
          const db = getFirestore(app);
          const jogadoresCollection = collection(db, "real-madrid");
          const jogadoresSnapshot = await getDocs(jogadoresCollection);
          const jogadoresList = jogadoresSnapshot.docs.map(doc => {
            const data = doc.data();
            const nascimento = data.nasciment?.toDate(); // Converte o Timestamp do Firestore para um objeto Date
            const formattedDate = nascimento ? format(nascimento, 'dd/MM/yyyy') : 'Data não disponível'; // Formata a data
            return {
              id: doc.id,
              nome: data.nome,
              altura: data.altura,
              camisa: data.camisa,
              nasciment: formattedDate
            };
          });
          setJogadores(jogadoresList);
        };
    
        fetchJogadores();
      }, []);

    return (
        <ImageBackground
            source={require('../image/foto.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.header}>Lista de Jogadores</Text>
                    <FlatList
                        data={jogadores}
                        keyExtractor={item => item.id} 
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <Text style={styles.texto}>Nome: {item.nome}</Text>
                                <Text style={styles.texto}>Altura: {item.altura} cm</Text>
                                <Text style={styles.texto}>Camisa: {item.camisa}</Text>
                                <Text style={styles.texto}>Nascimento: {item.nasciment}</Text>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
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
        padding: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        width: '100%',
    },
    header: {
        fontSize: 30,
        color: 'white',
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    card: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: '100%',
        maxWidth: 350,
        alignSelf: 'center',
    },
    texto: {
        fontSize: 18,
        color: 'white',
        marginBottom: 5,
    },
});

export default PaginaSimples;
