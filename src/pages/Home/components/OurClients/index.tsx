import { FC } from 'react';

import { ArrowUpSingleIcon } from '@/assets/img';
import { Button, Typography } from '@/components';
import { clients } from '@/pages/Home/components/OurClients/OurClients.mock';

import s from './OurClients.module.scss';

export const OurClients: FC = () => (
  <div className={s.clients}>
    <div className={s.title}>
      <Typography type="h3">Our&nbsp;</Typography>
      <Typography type="h3" color="red">
        Clients
      </Typography>
    </div>
    <div className={s.list}>
      {clients.map((client) => (
        <Button key={client.name} variant="outlined" href={client.href} className={s.client}>
          <div className={s.client_logo}>{client.logo}</div>
          <div className={s.client_name}>
            <Typography type="h4">{client.name}</Typography>
            <ArrowUpSingleIcon className={s.arrow} />
          </div>
        </Button>
      ))}
    </div>
  </div>
);
