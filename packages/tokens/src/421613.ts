import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_GOERLI_ARBI, USDT_GOERLI_ARBI, CAKE_GOERLI_ARBI, BUSD_GOERLI_ARBI, SWAPP_GOERLI_ARBI } from './common'

export const goerliArbiTestnetTokens = {
  weth: WETH9[ChainId.GOERLI_ARBI],
  syrup: new Token(
    ChainId.GOERLI_ARBI,
    '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
    18,
    'SYRUP',
    'SyrupBar Token',
    '',
  ),
  usdc: USDC_GOERLI_ARBI,
  usdt: USDT_GOERLI_ARBI,
  busd: BUSD_GOERLI_ARBI,
  cake: SWAPP_GOERLI_ARBI,
}
