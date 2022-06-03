import { FC } from 'react';

import { OurClients, OurPartners, Packages, Title, WhatWeDoBest } from '@/pages/Home/components';

import s from './Home.module.scss';

const Home: FC = () => {
  return (
    <div className={s.homeWrapper}>
      <Title />
      <WhatWeDoBest />
      <Packages />
      <OurClients />
      <OurPartners />
    </div>
  );
};
export default Home;
