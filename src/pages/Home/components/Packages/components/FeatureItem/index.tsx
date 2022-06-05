import { FC, ReactNode } from 'react';
import cn from 'clsx';

import { ExcludeIcon, IncludeIcon } from '@/assets/img';
import { Button, Typography } from '@/components';

import s from './FeatureItem.module.scss';

export type FeatureItemProps = {
  isIncluded: boolean;
  name: string;
  description: ReactNode;
  isRevealed: boolean;
};

export const FeatureItem: FC<FeatureItemProps> = ({
  isIncluded,
  name,
  description,
  isRevealed,
}) => {
  return (
    <div className={s.feature}>
      {isIncluded ? (
        <div className={cn(s.include, s.feature_icon)}>
          <IncludeIcon />
        </div>
      ) : (
        <ExcludeIcon className={s.feature_icon} />
      )}
      <div>
        <Button variant="text" className={s.feature_name}>
          {name}
        </Button>
        {isRevealed && (
          <Typography type="label3" className={s.feature_description}>
            {description}
          </Typography>
        )}
      </div>
    </div>
  );
};
