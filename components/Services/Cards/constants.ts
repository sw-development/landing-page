import { Card } from '../../../infrastructure/interfaces/Cards';

export const CARDS: Card[] = [
  {
    id: 'lorem-1-card', //TODO:  Set id based on card category
    title: 'Web Applications',
    descriptionKey: 'webApp',
    path: '#contact',
    imageUrl: '/assets/webApps.svg',
  },
  {
    id: 'lorem-2-card',
    title: 'UI & UX Design',
    descriptionKey: 'design',
    path: '#contact',
    imageUrl: '/assets/design.svg',
  },
  {
    id: 'lorem-3-card',
    title: 'Maintenance',
    descriptionKey: 'maintenance',
    path: '#contact',
    imageUrl: '/assets/maintenance.svg',
  },
  {
    id: 'lorem-4-card',
    title: 'Seo',
    descriptionKey: 'seo',
    path: '#contact',
    imageUrl: '/assets/seo.svg',
  },
];
