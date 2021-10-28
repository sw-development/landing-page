export interface Card {
  id: string;
  titleKey: string;
  descriptionKey: string;
  path: string;
  imageUrl: string;
}

export interface MappedCard extends Card {
  title: string;
  description: string;
}
