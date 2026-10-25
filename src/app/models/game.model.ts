export type CategoriaGame = 'Acció' | 'Aventura' | 'RPG' | 'Estratègia' | 'Esports';

export interface Game {
  id: number;
  titol: string;
  descripcio: string;
  categoria: CategoriaGame;
  dataLlancament: string; // Data ISO 8601 (YYYY-MM-DD)
  valoracio: number;      // Camp numèric (puntuació de 0 a 5)
  destacat?: boolean;     // Camp booleà opcional
}
