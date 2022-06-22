import { FC } from 'react';

import {
  AboutUs,
  ContactUs,
  FAQ,
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
      <AboutUs />
      <Packages />
      <OurClients />
      <OurPartners />
      <FAQ />
      <ContactUs />
    </div>
  );
};
export default Home;
