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
        <img src={CoinTelegraphLogo} alt="Our partners - CoinTelegraph" />
      </div>
      <div className={s.list_item}>
        <img src={YahooLogo} alt="Our partners - Yahoo" />
      </div>
      <div className={s.list_item}>
        <img src={BenzingaLogo} alt="Our partners - Benzinga" />
      </div>
      <div className={s.list_item}>
        <img src={BeInCryptoLogo} alt="Our partners - be-in-crypto" />
      </div>
      <div className={s.list_item}>
        <img src={CoincodexLogo} alt="Our partners - CoinCodex" />
      </div>
      <div className={s.list_item}>
        <img src={BitcoinistLogo} alt="Our partners - Bitcoinist" />
      </div>
      <div className={s.list_item}>
        <img src={SmartereumLogo} alt="Our partners - Smartereum" />
      </div>
      <div className={s.list_item}>
        <img src={CoinpediaLogo} alt="Our partners - Coinpedia" />
      </div>
      <div className={s.list_item}>
        <img src={NewsBtcLogo} alt="Our partners - News-BTC" />
      </div>
      <div className={s.list_item}>
        <img src={CryptoDailyLogo} alt="Our partners - Crypto-daily" />
      </div>
      <div className={s.list_item}>
        <img src={SecuritiesLogo} alt="Our partners - Securities" />
      </div>
      <div className={s.list_item}>
        <img src={CoingapeLogo} alt="Our partners - Coingape" />
      </div>
      <div className={s.list_item}>
        <img src={CryptoModeLogo} alt="Our partners - Cryptomode" />
      </div>
      <div className={s.list_item}>
        <img src={InvestingLogo} alt="Our partners - Investing" />
      </div>
      <div className={s.list_item}>
        <img src={FxStreetLogo} alt="Our partners - FX-Street" />
      </div>
      <div className={s.list_item}>
        <img src={Publish0xLogo} alt="Our partners - Publish-0x" />
      </div>
      <div className={s.list_item}>
        <img src={IHodlLogo} alt="Our partners - Ihodl" />
      </div>
      <div className={s.list_item}>
        <img src={TechTimesLogo} alt="Our partners - Tech-times" />
      </div>
    </div>
  </div>
);
