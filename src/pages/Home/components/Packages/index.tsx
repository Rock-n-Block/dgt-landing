import { FC, useState } from 'react';

import { BgFourthImage, BgThirdImage } from '@/assets/img';
import { Button, LinksBlock, Scrollbar, Typography } from '@/components';
import { FeatureItem } from '@/pages/Home/components/Packages/components';
import { items } from '@/pages/Home/components/Packages/Packages.mock';

import s from './Packages.module.scss';

export const Packages: FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <>
      <div className={s.packages}>
        <div className={s.title}>
          <Typography type="h2">What&nbsp;</Typography>
          <Typography type="h2" className={s.title_second_row}>
            We <span className={s.red}>Offer</span>
          </Typography>
        </div>
        <img src={BgThirdImage} alt="background 3" className={s.bg_image} />
        <Typography type="body1" className={s.subtitle}>
          Our key advantage is total flexibility. We’re fully customizable, and our services are
          based on your needs.
        </Typography>
        <Scrollbar
          className={s.scrollbar_container}
          headerClassname={s.scrollbar_header}
          navClassName={s.scrollbar_nav}
          scrollClassname={s.scrollbar_scroll}
          isRevealed={isRevealed}
          setIsRevealed={setIsRevealed}
        >
          {items.map((item) => (
            <div key={item.title} className={s.list_item}>
              <Typography type="h5">{item.title}</Typography>
              <Typography type="h6" color="red" className={s.list_item_subtitle}>
                {item.subtitle}
              </Typography>
              <div className={s.list_item_content}>
                {item.features.map((feature) => (
                  <FeatureItem
                    key={feature.name}
                    isIncluded={feature.isIncluded}
                    name={feature.name}
                    description={feature.description}
                    isRevealed={isRevealed}
                  />
                ))}
              </div>
              <Button
                variant="outlined"
                className={s.get_started_button}
                href="#contact-us"
                target="_self"
              >
                Get Started
              </Button>
            </div>
          ))}
        </Scrollbar>
      </div>
      <div className={s.links}>
        <Typography type="h5" className={s.links_text}>
          Have a different custom package in mind?
          <br />
          Reach out and we’ll make sure it happens
        </Typography>
        <LinksBlock />
        <img src={BgFourthImage} alt="background 4" />
      </div>
    </>
  );
};
