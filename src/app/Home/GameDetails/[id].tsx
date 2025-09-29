import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { jogosMock } from '../../data/JogosMock';

export default function GameDetailsPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  if (!id) return <Text>Jogo não encontrado</Text>;

  const jogo = jogosMock.find(j => `${j.id}` === id);

  if (!jogo) return <Text>Jogo</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{jogo.getTitulo()}</Text>
      <Text style={styles.score}>{jogo.getDetalhes()}</Text>
      <Text>Data: {jogo.data}</Text>
      <Text>Local: {jogo.local}</Text>
      <Text>Comentário: {jogo.comentario}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  score: { fontSize: 20, fontWeight: '600', marginBottom: 12 },
});