import React from 'react';
import { Text, View } from 'react-native';
import styles from "./TeamLogo.styles";


type TeamLogoProps = {
teamName: string;
};


const TeamLogo: React.FC<TeamLogoProps> = ({ teamName }) => {
// Usamos apenas as iniciais como placeholder
const initials = teamName.split(' ').map(word => word[0]).join('');
return (
<View style={styles.container}>
<Text style={styles.text}>{initials}</Text>
</View>
);
};


export default TeamLogo;