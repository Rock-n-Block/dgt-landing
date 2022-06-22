import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
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
  const [localRevealed, setLocalRevealed] = useState(false);

  useEffect(() => {
    setLocalRevealed(isRevealed);
  }, [isRevealed]);

  const revealedClickHandler = useCallback(() => {
    if (isIncluded) {
      setLocalRevealed((state) => !state);
    }
  }, [isIncluded]);

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
        <Button
          disabled={!isIncluded}
          onClick={revealedClickHandler}
          variant="text"
          className={s.feature_name}
        >
          {name}
        </Button>
        {localRevealed && isIncluded && (
          <Typography type="label3" className={s.feature_description}>
            {description}
          </Typography>
        )}
      </div>
    </div>
  );
};
