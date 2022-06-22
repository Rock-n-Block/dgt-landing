import cn from 'clsx';

import { Typography } from '@/components';

import { TInfo } from '../../AboutUs.mock';

import s from './Card.module.scss';

interface AboutUsCardProps {
  card: TInfo;
  className?: string;
}

export const AboutUsCard = ({ card, className }: AboutUsCardProps) => {
  const { paragraphs, theme } = card;
  return (
    <div className={cn(s.wrapper, className)}>
      {paragraphs.map((paragraph) => (
        <Typography
          weight="normal"
          className={cn(s.paragraph, s[theme || 'common'])}
          type="label3"
          key={paragraph}
        >
          {paragraph}
        </Typography>
      ))}
    </div>
  );
};
