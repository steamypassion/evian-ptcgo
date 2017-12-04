export interface Card {
  cardName: string;
  expansion: string;
  cardNumber: number;
}

export interface DeckList {
  id: number;
  pokemons: Card[];
  trainers: Card[];
  energies: Card[];
}
