import { INetwork, IProvider, ISettings } from '@amfi/connect-wallet/src/interface';

export enum Chains {
  Kovan = 'Kovan',
}
export type IChainType = 'testnet' | 'mainnet';

export interface IConnectWallet {
  wallets: string[];
  network: INetwork;
  provider: {
    [index: string]: IProvider;
  };
  settings: ISettings;
}

export interface IChainConfig {
  name: string;
  id: number;
  rpc: string;
  tx: {
    link: string;
  };
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  blockExp: string;
}

export interface IContracts {
  decimals: number;
  names: string[];
  contracts: {
    [index: string]: {
      testnet: {
        address: string;
        abi: any[];
      };
      mainnet: {
        address: string;
        abi: any[];
      };
    };
  };
}
