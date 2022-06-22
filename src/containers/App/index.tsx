import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Header, RouterManager } from '@/containers';

import { Footer } from '../Footer';

import s from './App.module.scss';

const App: FC = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.querySelector(`[name=${id}]`) || document.querySelector(`#${id}`);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change
  return (
    <div className={s.mainWrapper}>
      <div className={s.pageWrapper}>
        <Header />
        <RouterManager />
        <Footer />
      </div>
    </div>
  );
};
export default App;
