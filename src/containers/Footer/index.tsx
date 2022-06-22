import { Link } from 'react-router-dom';

import { ArrowLeftIcon, EmailIcon, LogoIcon, TelegramIcon, WhatsAppIcon } from '@/assets/img';
import { Typography } from '@/components';
import { socials, TAvailableSocials } from '@/consts/socials';

import s from './Footer.module.scss';

type TLink = {
  label: string;
  to: string;
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
  },
  {
    label: 'Terms of Service',
    to: '/terms',
  },
  {
    label: 'Company',
    to: '/company',
  },
];

const contactToIcon = {
  telegram: (
    <div className={s.icon}>
      <TelegramIcon />
    </div>
  ),
  whatsapp: (
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

const LinkComponent = ({ label, to }: TLink) => (
  <Link className={s.link} to={to}>
    <ArrowLeftIcon className={s.link_arrow} />
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
  return (
    <footer className={s.wrapper}>
      <div className={s.content}>
        <div className={s.logo}>
          <LogoIcon className={s.logo_icon} />
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
