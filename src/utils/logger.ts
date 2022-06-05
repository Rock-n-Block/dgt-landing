import { IS_PRODUCTION } from '@/config';

export const clog = (str: string) => {
  if (!IS_PRODUCTION) console.log(str);
};

export const clogData = (str: string, data: any) => {
  if (!IS_PRODUCTION) console.log(str, data);
};
