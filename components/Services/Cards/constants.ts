import { Card } from '../../../infrastructure/interfaces/Cards';

export const CARDS: Card[] = [
  {
    id: 'lorem-1-card', //TODO:  Set id based on card category
    titleKey: 'webApp',
    descriptionKey: 'webApp',
    path: '#contact',
    imageUrl: '/assets/webApps.svg',
  },
  {
    id: 'lorem-2-card',
    titleKey: 'design',
    descriptionKey: 'design',
    path: '#contact',
    imageUrl: '/assets/design.svg',
  },
  {
    id: 'lorem-3-card',
    titleKey: 'maintenance',
    descriptionKey: 'maintenance',
    path: '#contact',
    imageUrl: '/assets/maintenance.svg',
  },
  {
    id: 'lorem-4-card',
    titleKey: 'seo',
    descriptionKey: 'seo',
    path: '#contact',
    imageUrl: '/assets/seo.svg',
  },
];
