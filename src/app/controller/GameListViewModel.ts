import { jogosMock } from '../data/JogosMock';
import { JogoFutebol } from '../models/JogoFutebolBR';

export class GameListViewModel {
  private jogos: JogoFutebol[] = jogosMock;

  // Retorna todos os jogos
  getGames(): JogoFutebol[] {
    return this.jogos;
  }

  // Retorna jogos apenas de um time específico
  getGamesByTeam(team: string): JogoFutebol[] {
    return this.jogos.filter(j => j.timeA === team || j.timeB === team);
  }

  // Futuro: você pode adicionar filtros por data, placar, vencedor, etc.
}
