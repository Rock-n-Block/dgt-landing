import { FC, PropsWithChildren, useRef, useState } from 'react';
import cn from 'clsx';

import { ArrowLeftIcon, ArrowRightLongIcon } from '@/assets/img';
import { Button } from '@/components';

import s from './styles.module.scss';

type ScrollbarProps = {
  className?: string;
  headerClassname?: string;
  navClassName?: string;
  scrollClassname?: string;
  isRevealed?: boolean;
  setIsRevealed?: (value: boolean) => void;
};

export const Scrollbar: FC<PropsWithChildren<ScrollbarProps>> = ({
  className,
  headerClassname,
  navClassName,
  scrollClassname,
  isRevealed,
  setIsRevealed,
  children,
}) => {
  const end = useRef(null);
  const [isScrollOnStart, setIsScrollOnStart] = useState(true);

  const handleToStart = () => {
    if (!isScrollOnStart) setIsScrollOnStart(true);
  };

  const handleToEnd = () => {
    if (isScrollOnStart) setIsScrollOnStart(false);
  };

  const handleReveal = () => {
    if (setIsRevealed) setIsRevealed(!isRevealed);
  };

  return (
    <div className={cn(s.scrollbar, typeof isRevealed === 'boolean' && s.scrollbar_packages)}>
      <div className={cn(s.scrollbar_header, headerClassname)}>
        <div className={cn(s.scrollbar_nav, navClassName)}>
          <Button variant="text" onClick={handleToStart}>
            <ArrowLeftIcon className={cn(isScrollOnStart && s.disabled)} />
          </Button>
          <Button variant="text" onClick={handleToEnd}>
            <ArrowRightLongIcon className={cn(!isScrollOnStart && s.disabled)} />
          </Button>
        </div>
        {typeof isRevealed === 'boolean' && (
          <Button variant="text" className={s.scrollbar_reveal_btn} onClick={handleReveal}>
            {isRevealed ? 'Hide All' : 'Reveal All'}
          </Button>
        )}
      </div>
      <div className={cn(s.scrollbar_list, className)}>
        <div
          ref={end}
          className={cn(
            s.scrollbar_scroll,
            scrollClassname,
            !isScrollOnStart && typeof isRevealed === 'undefined' && s.scroll_to_end,
            !isScrollOnStart && typeof isRevealed !== 'undefined' && s.scroll_to_end_packages,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
