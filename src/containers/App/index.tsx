import { FC } from 'react';

import { Header, RouterManager } from '@/containers';

import s from './App.module.scss';

const App: FC = () => {
  return (
    <div className={s.mainWrapper}>
      <div className={s.pageWrapper}>
        <Header />
        <RouterManager />
      </div>
    </div>
  );
};
export default App;
