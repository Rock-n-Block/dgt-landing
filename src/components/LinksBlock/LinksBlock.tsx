import { FC } from 'react';

import { ArrowUpIcon } from '@/assets/img';
import { Button } from '@/components';
import { socials } from '@/consts/socials';

import s from './LinksBlock.module.scss';

export const LinksBlock: FC = () => (
  <div className={s.links}>
    <Button variant="text" className={s.mr} to="#contact-us">
      Book A Call
    </Button>
    <Button className={s.mr} variant="filled" href={`mailto:${socials.email}`}>
      Contact us
    </Button>
    <ArrowUpIcon />
  </div>
);
