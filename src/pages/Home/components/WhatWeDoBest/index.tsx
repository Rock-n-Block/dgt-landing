import { FC } from 'react';

import { BgSecondImage } from '@/assets/img';
import { Scrollbar, Typography } from '@/components';
import { items } from '@/pages/Home/components/WhatWeDoBest/WhatWeDoBest.mock';

import s from './WhatWeDoBest.module.scss';

export const WhatWeDoBest: FC = () => (
  <div className={s.what_best}>
    <img className={s.bg_image} src={BgSecondImage} alt="background 2" />
    <Typography type="h2">What We</Typography>
    <Typography type="h2">
      Do&nbsp;
      <span className={s.red_title}>Best</span>
    </Typography>
    <div className={s.subtitle}>
      <Typography type="body1" className={s.subtitle_text}>
        DGT provides the full turn-key marketing solutions for your project.
        <br />
        <br />
        We know how to make marketing campaigns work simultaneously across all channels. Here are
        the most popular requests we receive regularly:
      </Typography>
    </div>
    <Scrollbar className={s.scroll_container} scrollClassname={s.scroll_list}>
      <>
        {items.map((item) => (
          <div key={item.title} className={s.list_item}>
            <div className={s.icon}>{item.icon}</div>
            <Typography type="h5">{item.title}</Typography>
            <Typography type="sub1">{item.text}</Typography>
          </div>
        ))}
      </>
    </Scrollbar>
  </div>
);
