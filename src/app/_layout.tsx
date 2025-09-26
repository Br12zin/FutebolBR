// src/app/_layout.tsx - SUBSTITUA por este código
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index"  // Tela inicial (+html.tsx)
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="home"   // Sua HomePage
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="GameDetails/[id]"   // Tela de detalhes
        options={{ headerShown: false }}
      />
    </Stack>
  );
}