// src/app/+html.tsx - Tela inicial estática
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  const onPressNextPage = () => {
    router.push('/Home');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚽ Placar Futebol BR</Text>
        <TouchableOpacity style={styles.button} onPress={onPressNextPage}>
          <Text style={styles.buttonText}>Ver Jogos</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 30 
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});