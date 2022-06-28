import { FC, PropsWithChildren, useCallback, useMemo, useRef, useState } from 'react';
import cn from 'clsx';

import { ArrowLeftIcon, ArrowRightLongIcon } from '@/assets/img';
import { Button } from '@/components';
import { useWindowState } from '@/hooks/useWindowState';
import { cssVariable } from '@/utils';

import s from './styles.module.scss';

type ScrollbarProps = {
  className?: string;
  headerClassname?: string;
  navClassName?: string;
  scrollClassname?: string;
  isRevealed?: boolean;
  setIsRevealed?: (value: boolean) => void;
};

type TChildPosition = {
  left: number;
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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [childPosition, setChildPosition] = useState<TChildPosition>({ left: 0 });
  const { width } = useWindowState();

  const handleReveal = () => {
    if (setIsRevealed) setIsRevealed(!isRevealed);
  };

  const hasOverflow = useMemo(() => {
    if (containerRef.current && contentRef.current) {
      return containerRef.current.offsetWidth - contentRef.current.scrollWidth < 0;
    }
    return false;
  }, [width]);

  const handleScrollToEnd = useCallback(() => {
    if (containerRef.current && contentRef.current) {
      const toEndWidth = containerRef.current.offsetWidth - contentRef.current.scrollWidth;
      setChildPosition({ left: toEndWidth });
    }
  }, []);

  const handleScrollToStart = useCallback(() => {
    if (containerRef.current && contentRef.current) {
      setChildPosition({ left: 0 });
    }
  }, []);

  return (
    <div className={cn(s.scrollbar, typeof isRevealed === 'boolean' && s.scrollbar_packages)}>
      <div className={cn(s.scrollbar_header, headerClassname)}>
        {hasOverflow && (
          <div className={cn(s.scrollbar_nav, navClassName)}>
            <Button variant="text" onClick={handleScrollToStart}>
              <ArrowLeftIcon className={cn({ [s.disabled]: childPosition.left === 0 })} />
            </Button>
            <Button variant="text" onClick={handleScrollToEnd}>
              <ArrowRightLongIcon className={cn({ [s.disabled]: childPosition.left !== 0 })} />
            </Button>
          </div>
        )}
        {typeof isRevealed === 'boolean' && (
          <Button variant="text" className={s.scrollbar_reveal_btn} onClick={handleReveal}>
            {isRevealed ? 'Hide All' : 'Reveal All'}
          </Button>
        )}
      </div>
      <div className={cn(s.scrollbar_list, className)} ref={containerRef}>
        <div
          ref={contentRef}
          style={cssVariable({ left: childPosition.left })}
          className={cn(s.scrollbar_scroll, scrollClassname)}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
