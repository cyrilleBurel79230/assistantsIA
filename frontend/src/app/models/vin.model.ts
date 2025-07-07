export interface Vin {
  nom: string;
  annee: number;
  type: 'Rouge' | 'Blanc' | 'Rosé';  // typage fort possible ici
  quantite: number;
}