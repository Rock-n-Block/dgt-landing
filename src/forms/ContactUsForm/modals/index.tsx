import { FC, PropsWithChildren } from 'react';
import cn from 'clsx';

import { ArrowUpIcon, CloseIcon } from '@/assets/img';
import { Button, Typography } from '@/components';
import { helloSocials } from '@/consts/socials';

import s from './modals.module.scss';

interface IAbstractModal {
  isOpen: boolean;
  close: () => void;
  closeOnOutsideClick?: boolean;
}

export const AbstractModal: FC<PropsWithChildren<IAbstractModal>> = ({
  isOpen,
  children,
  close,
  closeOnOutsideClick = true,
}) => {
  return (
    <div
      role="button"
      onKeyDown={() => {}}
      tabIndex={0}
      className={cn(s.abstract_wrapper, { [s.active]: isOpen })}
      onClick={closeOnOutsideClick ? close : () => {}}
    >
      <div
        className={s.abstract_content}
        role="button"
        onKeyDown={() => {}}
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
      >
        <Button className={s.close} onClick={close}>
          <CloseIcon />
        </Button>
        <div className={s.body}>{children}</div>
      </div>
    </div>
  );
};

interface IModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

export const SuccessBookModal: FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <AbstractModal isOpen={isOpen} close={() => setIsOpen(false)}>
      <div className={s.success_wrapper}>
        <Typography color="red" type="h4">
          Thanks!
        </Typography>
        <Typography type="h4">You’re Booked.</Typography>
        <Typography align="center" className={s.success_wrapper_subtitle} type="label2">
          We’re looking forward to your demo. If you have any questions prior to your demo feel free
          to contact us.
        </Typography>
        <div className={s.success_wrapper_button}>
          <Button className={s.mr} variant="filled" href={`mailto:${helloSocials.email}`}>
            {helloSocials.email}
          </Button>
          <ArrowUpIcon className={s.arrow} />
        </div>
      </div>
    </AbstractModal>
  );
};
