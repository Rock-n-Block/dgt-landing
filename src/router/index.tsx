import { Company, Home, PrivacyPolicy, Terms } from '@/pages';

export const routes = [
  {
    name: 'Home',
    path: '/',
    component: <Home />,
    isMenu: true,
  },
  {
    name: 'PrivacyPolicy',
    path: '/privacy-policy',
    component: <PrivacyPolicy />,
    isMenu: true,
  },
  {
    name: 'Terms',
    path: '/terms',
    component: <Terms />,
    isMenu: true,
  },
  {
    name: 'Company',
    path: '/company',
    component: <Company />,
    isMenu: true,
  },
];
