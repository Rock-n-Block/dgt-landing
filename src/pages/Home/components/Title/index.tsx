import { FC } from 'react';

import { BgFirstImage, LogoIcon, RocketIcon } from '@/assets/img';
import { LinksBlock, Typography } from '@/components';

import s from './Title.module.scss';

export const Title: FC = () => (
  <div className={s.title}>
    <img className={s.bg_image} src={BgFirstImage} alt="background 1" />
    <Typography type="h1" className={s.title_text}>
      Efficient&nbsp;
      <Typography type="h2" color="red">
        Crypto&nbsp;
      </Typography>
      Marketing
    </Typography>
    <div className={s.subtitle_desktop}>
      <Typography type="body1">
        <LogoIcon className={s.subtitle_logo} />
        &nbsp;DGT agency provides smart&nbsp;<span className={s.subtitle_mark}>Web3</span>
        &nbsp;marketing
      </Typography>
      <Typography type="body1">
        solutions for&nbsp;<span className={s.subtitle_mark}>Blockchain</span>
        &nbsp;and&nbsp;<span className={s.subtitle_mark}>FinTech</span>
        &nbsp;projects.
      </Typography>
      <Typography type="body1">
        <RocketIcon />
        &nbsp;Launch your&nbsp;<span className={s.subtitle_mark}>Crypto&nbsp;&&nbsp;NFT</span>
        ,&nbsp;
        <span className={s.subtitle_mark}>GameFi</span>
        &nbsp;&
      </Typography>
      <Typography type="body1">
        <span className={s.subtitle_mark}>DeFi</span>
        &nbsp;<span className={s.subtitle_mark}>MetaVerse</span>
        &nbsp;and more!
      </Typography>
    </div>
    <Typography type="body1" className={s.subtitle_mobile}>
      DGT agency provides smart Web3 marketing solutions for Blockchain and FinTech projects.
      <br />
      <br />
      Launch your Crypto & Nft, Gamefi & Defi, Metaverse and more!
    </Typography>
    <LinksBlock />
  </div>
);
