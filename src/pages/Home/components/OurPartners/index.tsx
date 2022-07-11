import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Button, Typography } from '@/components';
import { useBreakpoints } from '@/hooks';

import { partners } from './mock';

import s from './OurPartners.module.scss';

const onSinglePage = 6;
const maxPages = Math.ceil(partners.length / onSinglePage);

export const OurPartners: FC = () => {
  const topAnchor = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(1);

  const [isMobile] = useBreakpoints([541]);

  const slicedData = useMemo(() => {
    if (isMobile) {
      return partners.slice(0, page * onSinglePage);
    }
    return partners;
  }, [isMobile, page]);

  const revealHandleClick = useCallback(() => {
    if (page === maxPages) {
      setPage(1);
      if (topAnchor.current) {
        topAnchor.current.scrollIntoView({
          behavior: 'auto',
        });
      }
    } else {
      setPage((state) => state + 1);
    }
  }, [page]);

  useEffect(() => {
    if (!isMobile) {
      setPage(1);
    }
  }, [isMobile]);

  return (
    <div className={s.partners}>
      <div className={s.title} ref={topAnchor}>
        <Typography type="h3">Our</Typography>
        <Typography type="h3" color="red">
          Partners
        </Typography>
      </div>
      <div className={s.list}>
        {slicedData.map((partner) => (
          <div key={partner.src} className={s.list_item}>
            <img src={partner.src} alt={partner.alt} />
          </div>
        ))}
      </div>
      {isMobile && (
        <Button className={s.reveal_button} variant="text" onClick={revealHandleClick}>
          {page === maxPages ? 'Hide' : 'More'}
        </Button>
      )}
    </div>
  );
};
