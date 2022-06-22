import { Scrollbar, Typography } from '@/components';

import { info } from './AboutUs.mock';
import { AboutUsCard } from './components';

import s from './AboutUs.module.scss';

export const AboutUs = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Typography type="h3" className={s.title_second_row}>
          About <span className={s.red}>Us</span>
        </Typography>
      </div>
      <div className={s.content}>
        <Scrollbar
          className={s.scrollbar_container}
          headerClassname={s.scrollbar_header}
          navClassName={s.scrollbar_nav}
          scrollClassname={s.scrollbar_scroll}
        >
          {info.map((card) => (
            <AboutUsCard key={card.paragraphs.length} card={card} />
          ))}
        </Scrollbar>
      </div>
    </div>
  );
};
