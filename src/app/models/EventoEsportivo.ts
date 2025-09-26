export default abstract class EventoEsportivo {
  // Método abstrato para retornar o título do evento
  abstract getTitulo(): string;

  // Método abstrato para retornar detalhes do evento (placar, resultado, etc)
  abstract getDetalhes(): string;

  // Aqui você pode adicionar outros métodos que todos eventos esportivos terão
  // Exemplo: calcular vencedor, duração, estatísticas, etc
}
