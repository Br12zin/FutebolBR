import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { JogoFutebol } from '../../models/JogoFutebolBR';
import ScoreCard from '../molecules/ScoreCard';


type GameListProps = {
jogos: JogoFutebol[];
onPressGame?: (jogo: JogoFutebol) => void;
};


const GameList: React.FC<GameListProps> = ({ jogos }) => {
const renderItem: ListRenderItem<JogoFutebol> = ({ item }) => (
<ScoreCard
id={item.id?.toString()}
timeA={item.timeA}
timeB={item.timeB}
placarA={item.placarA}
placarB={item.placarB}
/>
);


return (
<FlatList
data={jogos}
keyExtractor={(item, index) => `${item.timeA}-${item.timeB}-${index}`}
renderItem={renderItem}
contentContainerStyle={{ padding: 12 }}
/>
);
};


export default GameList;