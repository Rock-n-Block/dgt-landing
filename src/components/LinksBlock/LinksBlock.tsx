import { FC } from 'react';

import { ArrowUpIcon } from '@/assets/img';
import { Button } from '@/components';

import s from './LinksBlock.module.scss';

export const LinksBlock: FC = () => (
  <div className={s.links}>
    <Button variant="text">Book A Call</Button>
    <Button variant="filled">Contact us</Button>
    <ArrowUpIcon />
  </div>
);
