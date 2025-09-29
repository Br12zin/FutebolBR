import { JogoFutebol } from '../models/JogoFutebolBR';

export const jogosMock: JogoFutebol[] = [
  new JogoFutebol(1,'São Paulo', 'Corinthians', 2, 1, '26/09/2025', 'Morumbis', 'São Paulo venceu com gol no final'),
  new JogoFutebol(2, 'Palmeiras', 'Flamengo', 1, 1, '27/09/2025', 'Allianz Parque', 'Empate emocionante'),
  new JogoFutebol(3, 'Botafogo', 'Santos', 0, 3, '28/09/2025', 'Engenhão', 'Santos dominou o jogo'),
  new JogoFutebol(4, 'Corinthians', 'Flamengo', 2, 2, '29/09/2025', 'Arena Corinthians', 'Jogo equilibrado'),
  new JogoFutebol(5, 'Palmeiras', 'Santos', 3, 0, '30/09/2025', 'Allianz Parque', 'Palmeiras fez uma partida impecável'),
  new JogoFutebol(6, 'São Paulo', 'Botafogo', 1, 0, '01/10/2025', 'Morumbi', 'Vitória apertada do São Paulo'),
];
