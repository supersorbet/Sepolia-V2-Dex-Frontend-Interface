import { ChainId, Token } from '@pancakeswap/sdk'


export const PEPL_ETH = new Token(
  ChainId.ETHEREUM,
  '0x7DbF199731A3CCC3445b99c130171646314fcB44',
  9,
  'PEPL',
  'PepePal',
  'https://pepepal.com/',
)

export const PEPL_GOERLI = new Token(
  ChainId.GOERLI,
  '0x535Fe3CCD4b860a865d10fAa60305EdABdf1Dd62',
  9,
  'PEPL',
  'PepePal',
)

export const CAKE_MAINNET = new Token(
  ChainId.BSC,
  '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const CAKE_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xFa60D973F7642B748046464e165A65B7323b0DEE',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const CAKE_GOERLI_ARBI = new Token(
  ChainId.GOERLI_ARBI,
  '0x33d6f54e0C252623bc7541FE80860a88a1e4C40b',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const USDC_BSC = new Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_ETH = new Token(ChainId.ETHEREUM, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin')

export const USDC_RINKEBY = new Token(
  ChainId.RINKEBY,
  '0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b',
  6,
  'tUSDC',
  'test USD Coin',
)

export const USDC_GOERLI = new Token(
  ChainId.GOERLI,
  '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  6,
  'tUSDC',
  'test USD Coin',
)

export const USDC_GOERLI_ARBI = new Token(
  ChainId.GOERLI_ARBI,
  '0x206Fd4f2d9bA776BE7531fE654a08bBB36b4b5F1',
  6,
  'USDC',
  'USD Coin',
)

export const USDT_BSC = new Token(
  ChainId.BSC,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_ETH = new Token(
  ChainId.ETHEREUM,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_GOERLI_ARBI = new Token(
  ChainId.GOERLI_ARBI,
  '0xD5Fe27B151c0E10696fF31d56db4Dfd91ed487a1',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const BUSD_BSC = new Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_ETH = new Token(
  ChainId.ETHEREUM,
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_RINKEBY = new Token(
  ChainId.RINKEBY,
  '0x4e2442A6f7AeCE64Ca33d31756B5390860BF973E',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_GOERLI = new Token(
  ChainId.GOERLI,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_GOERLI_ARBI = new Token(
  ChainId.GOERLI_ARBI,
  '0x3B1Fdb2f0B835bdEdADE95EC8949CfbBcf8D85cf',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const WBTC_ETH = new Token(
  ChainId.GOERLI_ARBI,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC',
  
)
export const pepecoin = new Token(
  ChainId.GOERLI_ARBI,
  '0xA9E8aCf069C58aEc8825542845Fd754e41a9489A',
  18,
  'pepecoin',
  'pepecoin',
  'https://pepeco.in/',
)
export const WBAN = new Token(
  ChainId.GOERLI_ARBI,
  '0xe20B9e246db5a0d21BF9209E4858Bc9A3ff7A034',
  18,
  'WBAN',
  'Wrapped Banano',
  'https://banano.cc/',
)
export const BOBO = new Token(
  ChainId.GOERLI_ARBI,
  '0x5888641e3e6cBeA6D84Ba81EDb217bD691d3bE38',
  9,
  'BOBO',
  'Bobo',
  '',
)
export const PEPET = new Token(
  ChainId.GOERLI_ARBI,
  '0xe451D7c0d8a126175a9d10a3a9554D47C333Fb0F',
  18,
  'PEPET',
  'Pepetuals',
  '',
)
export const MIPEP = new Token(
  ChainId.GOERLI_ARBI,
  '0xFC0aF07FBD1bF89E076900fC8CFEf9BCD0E40aF3',
  9,
  'MIPEP',
  'Pepe The Milady',
  'https://pepemilady.com/',
)
export const BITCOIN = new Token(
  ChainId.GOERLI_ARBI,
  '0x72e4f9F808C49A2a61dE9C5896298920Dc4EEEa9',
  8,
  'BITCOIN',
  'HarryPotterObamaSonic10Inu',
  'https://hpos10i.shop/',
)

export const SEETHE = new Token(
  ChainId.GOERLI_ARBI,
  '0x196d485Fcc051F13e775ed8AB5ac42789747D462',
  18,
  'SEETHE',
  'Seethe',
  '',
)
export const SWAPP_GOERLI_ARBI = new Token(
  ChainId.ETHEREUM,
  '0x5cC486465A229308b1BD0b0F867B88a45B0c64DD',
  18,
  'SWAPP',
  'SWAPP',
  '',
)
export const SWAPP_ETH = new Token(
  ChainId.GOERLI_ARBI,
  '0x480C1DCcFF89b1b6E663c4b22B06e1d610e885a1',
  18,
  'COPE',
  'COPE',
  '',
)
export const CAKE_GOERLI = new Token(
  ChainId.GOERLI,
  '0x313914Cc58261FB4e6b62bdd4efF1B2F63aA10c4',
  18,
  'COPE',
  'COPE',
  '',
)
export const BUSD: Record<ChainId, Token> = {
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.RINKEBY]: BUSD_RINKEBY,
  [ChainId.GOERLI]: BUSD_GOERLI,
  [ChainId.BSC]: BUSD_BSC,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
  [ChainId.GOERLI_ARBI]: BUSD_GOERLI_ARBI,
}

export const CAKE = {
  [ChainId.BSC]: CAKE_MAINNET,
  [ChainId.BSC_TESTNET]: CAKE_TESTNET,
  [ChainId.GOERLI_ARBI]: SWAPP_ETH,
  [ChainId.ETHEREUM]: SWAPP_GOERLI_ARBI,
}

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.RINKEBY]: USDC_RINKEBY,
  [ChainId.GOERLI]: USDC_GOERLI,
  [ChainId.GOERLI_ARBI]: USDC_GOERLI_ARBI,
}

export const USDT = {
  [ChainId.BSC]: USDT_BSC,
  [ChainId.ETHEREUM]: USDT_ETH,
  [ChainId.GOERLI_ARBI]: USDT_GOERLI_ARBI,
}

export const PEPL = {
  [ChainId.GOERLI]: PEPL_GOERLI,
  [ChainId.GOERLI_ARBI]: PEPL_ETH,
  
}