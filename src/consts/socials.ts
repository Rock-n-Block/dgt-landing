export type TAvailableSocials = 'telegram' | 'whatsApp' | 'email';

type TSocials = {
  [key in TAvailableSocials]: string;
};

export const socials: TSocials = {
  telegram: 'https://t.me/Axeinos',
  whatsApp: 'https://wa.me/message/KKQJ2UYJOGL6J1',
  email: 'xenia@rocknblock.io',
};

export const helloSocials = {
  email: 'xenia@rocknblock.io',
  phone: '+7 (812) 429-74-34',
};
