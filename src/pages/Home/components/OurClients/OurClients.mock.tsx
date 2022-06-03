import { ReactNode } from 'react';

import { AlgebraLogo, MyWishLogo, RnBLogo, RubicLogo } from '@/assets/img';

type ClientLink = {
  logo: ReactNode;
  name: string;
  href: string;
};

export const clients: ClientLink[] = [
  {
    logo: <RubicLogo />,
    name: 'Rubic',
    href: 'https://rubic.exchange/',
  },
  {
    logo: <AlgebraLogo />,
    name: 'Algebra',
    href: 'https://algebra.finance/',
  },
  {
    logo: <MyWishLogo />,
    name: 'MyWish',
    href: 'https://mywish.io/',
  },
  {
    logo: <RnBLogo />,
    name: "Rock'n'Block",
    href: 'https://rocknblock.io/',
  },
];
