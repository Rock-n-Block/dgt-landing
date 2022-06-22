export type TAvailableSocials = 'telegram' | 'whatsapp' | 'email';

type TSocials = {
  [key in TAvailableSocials]: string;
};

export const socials: TSocials = {
  telegram: 'https://t.me/Axeinos',
  whatsapp: 'https://wa.me/message/KKQJ2UYJOGL6J1',
  email: 'xenia@rocknblock.io',
};

export const helloSocials = {
  email: 'hello@rocknblock.io',
  phone: '+7 (812) 429-74-34',
};
