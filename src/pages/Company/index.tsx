import { BgFifthImage, EmailIcon, PhoneIcon } from '@/assets/img';
import { Typography } from '@/components';
import { helloSocials } from '@/consts/socials';

import s from './Company.module.scss';

const info = {
  'Beneficiary': ['MANZONI LIMITED', 'LIABILITY COMPANY'],
  'Beneficiary account': ['40702840410000002761'],
  'KPP number': ['781301001'],
  'OGRN': ['1167847119901'],
  'Tax payer number': ['7813245218'],
  'Registered address': ['190031, RUSSIA, ST.PETERSBURG,', 'Gorokhovaya street, 47'],
};

interface BlockInfoProps {
  title: string;
  content: string[];
}

const BlockInfo = ({ title, content }: BlockInfoProps) => {
  return (
    <div className={s.block}>
      <Typography className={s.block_title} color="red" type="label2">
        {title}
      </Typography>
      <span className={s.block_line} />
      {content.map((item) => (
        <Typography className={s.block_text} key={item} type="label2">
          {item}
        </Typography>
      ))}
    </div>
  );
};

const contactToIcon = {
  phone: (
    <div className={s.icon}>
      <PhoneIcon />
    </div>
  ),
  email: (
    <div className={s.icon}>
      <EmailIcon />
    </div>
  ),
};

interface SocialInfoProps {
  social: string;
  href: string;
}

const LinkToSocial = ({ href, social }: SocialInfoProps) => (
  <a className={s.social_wrapper} href={href.includes('@') ? `mailto:${href}` : `tel:${href}`}>
    {contactToIcon[social as 'phone' | 'email']}{' '}
    <Typography className={s.social_name} type="label2">
      {href}
    </Typography>
  </a>
);

const Company = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <img className={s.detail} src={BgFifthImage} alt="bg" />
        <div className={s.company}>
          <Typography className={s.company_title} type="h4">
            Rock’n’Block
          </Typography>
          <div className={s.company_info}>
            {Object.entries(info).map(([title, content]) => (
              <BlockInfo key={title + content} title={title} content={content} />
            ))}
          </div>
        </div>
        <div className={s.contacts}>
          <Typography className={s.company_title} type="h4">
            Contacts
          </Typography>
          <div className={s.contacts_info}>
            {Object.entries(helloSocials).map(([social, value]) => (
              <LinkToSocial href={value} social={social} key={social} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
