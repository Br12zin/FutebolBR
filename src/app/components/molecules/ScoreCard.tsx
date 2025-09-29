import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import TeamLogo from '../atoms/TeamLogo';
import styles from './ScoreCard.styles';


type ScoreCardProps = {
id?: string;
timeA: string;
timeB: string;
placarA: number;
placarB: number;
};


const ScoreCard: React.FC<ScoreCardProps> = ({id, timeA, timeB, placarA, placarB }) => {
return (
<TouchableOpacity style={styles.container} onPress={() => router.push(`/Home/GameDetails/${id}`)}>
<View style={styles.teamContainer}>
<TeamLogo teamName={timeA} />
<Text style={styles.teamName}>{timeA}</Text>
</View>


<Text style={styles.score}>{placarA} - {placarB}</Text>


<View style={styles.teamContainer}>
<TeamLogo teamName={timeB} />
<Text style={styles.teamName}>{timeB}</Text>
</View>
</TouchableOpacity>
);
};


export default ScoreCard;