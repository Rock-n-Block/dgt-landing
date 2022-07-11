import { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { BoldArrowIcon, EmailIcon, LogoIcon, TelegramIcon, WhatsAppIcon } from '@/assets/img';
import { Typography } from '@/components';
import { socials, TAvailableSocials } from '@/consts/socials';

import s from './Footer.module.scss';

type TLink = {
  label: string;
  to: string;
  outer?: boolean;
};

type TSocialLink = {
  social: TAvailableSocials;
  href: string;
};

const links: TLink[] = [
  {
    label: 'Services',
    to: '/#services',
  },
  {
    label: 'Packages',
    to: '/#packages',
  },
  {
    label: 'Clients & Partners',
    to: '/#clients',
  },
  {
    label: 'Contact us',
    to: '/#contact-us',
  },
  {
    label: 'Privacy Policy',
    to: '/privacy-policy',
    outer: true,
  },
  {
    label: 'Terms of Service',
    to: '/terms',
    outer: true,
  },
  {
    label: 'Company',
    to: '/company',
    outer: true,
  },
];

const contactToIcon = {
  telegram: (
    <div className={s.icon}>
      <TelegramIcon />
    </div>
  ),
  whatsApp: (
    <div className={s.icon}>
      <WhatsAppIcon />
    </div>
  ),
  email: (
    <div className={s.icon}>
      <EmailIcon />
    </div>
  ),
};

const LinkComponent = ({ label, to, outer }: TLink) =>
  outer ? (
    <a href={to} className={s.link} target="_blank" rel="noreferrer">
      <BoldArrowIcon className={s.link_arrow} />
      <Typography className={s.link_label} type="label2">
        {label}
      </Typography>
    </a>
  ) : (
    <Link className={s.link} to={to}>
      <BoldArrowIcon className={s.link_arrow} />
      <Typography className={s.link_label} type="label2">
        {label}
      </Typography>
    </Link>
  );

const LinkToSocial = ({ href, social }: TSocialLink) => (
  <a className={s.social_wrapper} href={href.includes('@') ? `mailto:${href}` : href}>
    {contactToIcon[social]}{' '}
    <Typography className={s.social_name} type="label2">
      {social}
    </Typography>
  </a>
);

export const Footer = () => {
  const onLogoClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <footer className={s.wrapper}>
      <div className={s.content}>
        <div className={s.logo}>
          <LogoIcon onClick={onLogoClick} className={s.logo_icon} />
          <div className={s.logo_copyright}>
            <Typography className={s.copyright} type="label2">
              © Copyright DGT {new Date().getFullYear()}
            </Typography>
            <Typography className={s.rnb} color="grey" type="label3">
              by Rock’n’Block
            </Typography>
          </div>
        </div>
        <div className={s.info}>
          <div className={s.links}>
            {links.map((link) => (
              <LinkComponent key={link.to + link.label} {...link} />
            ))}
          </div>
          <div className={s.socials}>
            {Object.entries(socials).map(([social, value]) => (
              <LinkToSocial
                key={social + value}
                social={social as TAvailableSocials}
                href={value}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
