import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_GOERLI_ARBI, USDT_GOERLI_ARBI, SWAPP_GOERLI_ARBI, BUSD_GOERLI_ARBI, PEPL_ETH} from './common'

export const goerliArbiTestnetTokens = {
  weth: WETH9[ChainId.GOERLI_ARBI],
  syrup: new Token(
    ChainId.GOERLI_ARBI,
    '0x7a902a993be6e62690cD5E9923d6efF87Bf78f58',
    18,
    'SYRUP',
    'SyrupBar Token',
    '',
  ),
  usdc: USDC_GOERLI_ARBI,
  usdt: USDT_GOERLI_ARBI,
  busd: BUSD_GOERLI_ARBI,
  cake: SWAPP_GOERLI_ARBI,
  pepl: PEPL_ETH
  
}


/* import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_GOERLI_ARBI, CAKE, USDC } from './common'

export const bscTestnetTokens = {
  weth: WETH9[ChainId.BSC_TESTNET],
  cake: CAKE,
  usdc: USDC,
  syrup: new Token(
    ChainId.GOER,
    '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://pancakeswap.finance/',
  ),
  bake: new Token(
    ChainId.BSC_TESTNET,
    '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    18,
    'BAKE',
    'Bakeryswap Token',
    'https://www.bakeryswap.org/',
  ),
  hbtc: new Token(ChainId.BSC_TESTNET, '0x3Fb6a6C06c7486BD194BB99a078B89B9ECaF4c82', 18, 'HBTC', 'Huobi BTC'),
  wbtc: new Token(ChainId.BSC_TESTNET, '0xfC8bFbe9644e1BC836b8821660593e7de711e564', 8, 'WBTC', 'Wrapped BTC'),
  usdc: new Token(
    ChainId.BSC_TESTNET,
    '0x2fB98DCc527c1403F92c6Bed05a50725d3005636',
    18,
    'USDC',
    'Binance-Peg USD Coin',
  ),
}
*/