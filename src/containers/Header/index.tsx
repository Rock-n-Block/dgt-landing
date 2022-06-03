import { FC, useState } from 'react';

import { BurgerIcon, CloseIcon, LogoIcon, TelegramIcon } from '@/assets/img';
import { Button, Typography } from '@/components';

import s from './Header.module.scss';

const Header: FC = () => {
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);

  const handleOpenNavModal = () => setIsNavModalOpen(true);

  const handleCloseNavModal = () => setIsNavModalOpen(false);

  return (
    <div className={s.headerWrapper}>
      <div className={s.logo}>
        <LogoIcon className={s.logo_icon} />
        <div>
          <Typography type="body1" className={s.logo_title}>
            DGT
          </Typography>
          <Typography type="body1" className={s.logo_subtitle}>
            by Rock&apos;n&apos;Block
          </Typography>
        </div>
      </div>
      <div className={s.nav}>
        <Button variant="text" href="#services" className={s.nav_link}>
          Services
        </Button>
        <Button variant="text" href="#packages" className={s.nav_link}>
          Packages
        </Button>
        <Button variant="text" href="#clients" className={s.nav_link}>
          Clients & Partners
        </Button>
        <Button variant="text" href="#contact-us" className={s.nav_link}>
          Contact us
        </Button>
        <Button variant="text" href="" className={s.nav_black}>
          <TelegramIcon />
        </Button>
      </div>
      <Button variant="text" className={s.nav_burger} onClick={handleOpenNavModal}>
        <BurgerIcon />
      </Button>
      {isNavModalOpen && (
        <div
          role="button"
          tabIndex={0}
          className={s.nav_modal}
          onKeyDown={handleCloseNavModal}
          onClick={handleCloseNavModal}
        >
          <Button variant="text" onClick={handleCloseNavModal} className={s.nav_close}>
            <CloseIcon />
          </Button>
          <Button variant="filled" href="#services" target="_self" className={s.black_link}>
            Services
          </Button>
          <Button variant="filled" href="#packages" target="_self" className={s.black_link}>
            Packages
          </Button>
          <Button variant="filled" href="#clients" target="_self" className={s.black_link}>
            Clients & Partners
          </Button>
          <Button variant="filled" href="#contact-us" target="_self" className={s.black_link}>
            Contact us
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
