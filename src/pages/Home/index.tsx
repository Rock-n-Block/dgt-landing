import { FC } from 'react';

import {
  ContactUs,
  OurClients,
  OurPartners,
  Packages,
  Title,
  WhatWeDoBest,
} from '@/pages/Home/components';

import s from './Home.module.scss';

const Home: FC = () => {
  return (
    <div className={s.homeWrapper}>
      <Title />
      <WhatWeDoBest />
      <Packages />
      <OurClients />
      <OurPartners />
      <ContactUs />
    </div>
  );
};
export default Home;
