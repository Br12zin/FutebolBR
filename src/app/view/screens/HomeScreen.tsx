import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GameList from '../../components/organisms/GameList';
import { GameListViewModel } from '../../controller/GameListViewModel';
import { JogoFutebol } from '../../models/JogoFutebolBR';

const HomePage: React.FC = () => {
  const [games, setGames] = useState<JogoFutebol[]>([]);
  const viewModel = new GameListViewModel();
  const router = useRouter();

  useEffect(() => {
    setGames(viewModel.getGames());
  }, []);

  const handlePressGame = (jogo: JogoFutebol) => {
    router.push(`/GameDetails/${jogo.timeA}-${jogo.timeB}`);
  };

  return (
    <View style={styles.container}>
      <GameList jogos={games} onPressGame={handlePressGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});

export default HomePage;
