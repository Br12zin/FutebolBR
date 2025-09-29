
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React from 'react';
// import GameDetailsScreen from '../view/screens/GameDetailsScreen';
// import HomeScreen from '../view/screens/HomeScreen';

// export type RootStackParamList = {
//   Home: undefined;
//   GameDetails: { jogo: any }; // pode usar JogoFutebol como tipo
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// export const AppNavigator: React.FC = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ title: 'Jogos do Campeonato' }}
//       />
//       <Stack.Screen
//         name="GameDetails"
//         component={GameDetailsScreen}
//         options={{ title: 'Detalhes do Jogo' }}
//       />
//     </Stack.Navigator>
//   );
// };
