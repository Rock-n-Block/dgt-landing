import { FC } from 'react';

import {
  BeInCryptoLogo,
  BenzingaLogo,
  BitcoinistLogo,
  CoincodexLogo,
  CoingapeLogo,
  CoinpediaLogo,
  CoinTelegraphLogo,
  CryptoDailyLogo,
  CryptoModeLogo,
  FxStreetLogo,
  IHodlLogo,
  InvestingLogo,
  NewsBtcLogo,
  Publish0xLogo,
  SecuritiesLogo,
  SmartereumLogo,
  TechTimesLogo,
  YahooLogo,
} from '@/assets/img';
import { Typography } from '@/components';

import s from './OurPartners.module.scss';

export const OurPartners: FC = () => (
  <div className={s.partners}>
    <div className={s.title}>
      <Typography type="h3">Our</Typography>
      <Typography type="h3" color="red">
        Partners
      </Typography>
    </div>
    <div className={s.list}>
      <div className={s.list_item}>
        <img src={CoinTelegraphLogo} alt="cointelegraph" />
      </div>
      <div className={s.list_item}>
        <img src={YahooLogo} alt="yahoo" />
      </div>
      <div className={s.list_item}>
        <img src={BenzingaLogo} alt="benzinga" />
      </div>
      <div className={s.list_item}>
        <img src={BeInCryptoLogo} alt="be-in-crypto" />
      </div>
      <div className={s.list_item}>
        <img src={CoincodexLogo} alt="coincodex" />
      </div>
      <div className={s.list_item}>
        <img src={BitcoinistLogo} alt="bitcoinist" />
      </div>
      <div className={s.list_item}>
        <img src={SmartereumLogo} alt="smartereum" />
      </div>
      <div className={s.list_item}>
        <img src={CoinpediaLogo} alt="coinpedia" />
      </div>
      <div className={s.list_item}>
        <img src={NewsBtcLogo} alt="news-btc" />
      </div>
      <div className={s.list_item}>
        <img src={CryptoDailyLogo} alt="crypto-daily" />
      </div>
      <div className={s.list_item}>
        <img src={SecuritiesLogo} alt="securities" />
      </div>
      <div className={s.list_item}>
        <img src={CoingapeLogo} alt="coingape" />
      </div>
      <div className={s.list_item}>
        <img src={CryptoModeLogo} alt="cryptomode" />
      </div>
      <div className={s.list_item}>
        <img src={InvestingLogo} alt="investing" />
      </div>
      <div className={s.list_item}>
        <img src={FxStreetLogo} alt="fx-street" />
      </div>
      <div className={s.list_item}>
        <img src={Publish0xLogo} alt="publish-0x" />
      </div>
      <div className={s.list_item}>
        <img src={IHodlLogo} alt="ihodl" />
      </div>
      <div className={s.list_item}>
        <img src={TechTimesLogo} alt="tech-times" />
      </div>
    </div>
  </div>
);
