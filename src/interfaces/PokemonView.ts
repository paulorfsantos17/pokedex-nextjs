export interface PokemonView {
  AboutBase: PokemonCardView;
  About: PokemonAbout;
  BaseStats: PokemonBaseStats;
  Evolutions: PokemonCardView[];
  Moves: CardViewMove[];
}

export interface PokemonAbout {
  species: string;
  height: number;
  weight: number;
  abilities: string[]
}

export interface PokemonBaseStats {
  hp: number;
  atk: number;
  def: number;
  satk: number;
  sdef: number;
  spd: number;
}

 export  interface CardViewMove {
  name:string;
  id:number;
  type: string;
  power: number | null;
  pp: number | null;
  accuracy: number | null;
}


export interface PokemonCardView {
  name: string,
  id: number,
  image: string | null | undefined
  types: string | string[]
}

export interface ICardUniquePokemon {
  aboutPokemonCard: PokemonCardView
}
