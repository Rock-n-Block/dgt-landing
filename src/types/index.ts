export type TNullable<T> = T | null;
export type TOptionable<T> = T | undefined;

export type TReferrals = {
  registerTime: number;
  memberCode: string;
  memberLiquidity: number;
};

// eslint-disable-next-line no-shadow
export enum RoundingModes {
  up,
  down,
}
