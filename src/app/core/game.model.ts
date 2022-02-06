export class Game {
  name: string;
  category: string;
  level: number;
  cardsCount: number;
  questions: [];
  dares: [];
}

export enum GameCategory{
  F = 'ZABAWNE',
  S = 'SZKOLNE',
  A = 'POWAŻNE'
}
