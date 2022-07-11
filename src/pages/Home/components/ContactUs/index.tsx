import { FC } from 'react';

import { ArrowUpIcon, TelegramIcon, WhatsAppIcon } from '@/assets/img';
import { Button, Typography } from '@/components';
import { socials } from '@/consts/socials';
import { ContactUsForm } from '@/forms/ContactUsForm';

import s from './ContactUs.module.scss';

export const ContactUs: FC = () => (
  <div className={s.contact_us} id="contact-us">
    <div className={s.title}>
      <Typography type="h3">Get a special&nbsp;</Typography>
      <Typography type="h3" className={s.second_row}>
        offer!
      </Typography>
    </div>
    <Typography type="body1" className={s.subtitle}>
      Get free consultation and build marketing for your project with our highly qualified team!
    </Typography>
    <div className={s.links}>
      <Button variant="text" href={socials.telegram} className={s.link}>
        <div className={s.link_content}>
          <div className={s.link_logo}>
            <TelegramIcon className={s.telegram} />
          </div>
          <Typography type="h5">Telegram</Typography>
        </div>
        <ArrowUpIcon className={s.arrow} />
      </Button>
      <Button variant="text" href={socials.whatsApp} className={s.link}>
        <div className={s.link_content}>
          <div className={s.link_logo}>
            <WhatsAppIcon className={s.whatsapp} />
          </div>
          <Typography type="h5">WhatsApp</Typography>
        </div>
        <ArrowUpIcon className={s.arrow} />
      </Button>
    </div>
    <ContactUsForm />
  </div>
);
