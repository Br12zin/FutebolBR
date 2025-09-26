import EventoEsportivo from "./EventoEsportivo";


export class JogoFutebol extends EventoEsportivo {
  timeA: string;
  timeB: string;
  placarA: number;
  placarB: number;
  data?: string;
  local?: string;
  comentario?: string;

  constructor(
    timeA: string,
    timeB: string,
    placarA: number,
    placarB: number,
    data?: string,
    local?: string,
    comentario?: string
  ) {
    super();
    this.timeA = timeA;
    this.timeB = timeB;
    this.placarA = placarA;
    this.placarB = placarB;
    this.data = data;
    this.local = local;
    this.comentario = comentario;
  }

  getTitulo(): string {
    return `${this.timeA} x ${this.timeB}`;
  }

  getDetalhes(): string {
    return `${this.timeA} ${this.placarA} - ${this.placarB} ${this.timeB}`;
  }
}
