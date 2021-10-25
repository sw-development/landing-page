export interface Card {
  id: string;
  title: string;
  descriptionKey: string;
  path: string;
  imageUrl: string;
}

export interface MappedCard extends Card {
  description;
}
