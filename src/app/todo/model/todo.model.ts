export class Todo {
  id: number;
  texto: string;
  completado: boolean;

  constructor(txt: string) {
    this.texto = txt;
    this.completado = false;
    this.id = Math.random();
  }
}
