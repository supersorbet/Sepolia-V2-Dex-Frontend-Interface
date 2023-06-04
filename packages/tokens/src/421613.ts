import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_GOERLI_ARBI, USDT_GOERLI_ARBI, CAKE_GOERLI_ARBI, BUSD_GOERLI_ARBI, SWAPP_GOERLI_ARBI, USDC_ETH, USDT_ETH, SWAPP_ETH } from './common'

export const goerliArbiTestnetTokens = {
  weth: WETH9[ChainId.GOERLI_ARBI],
  syrup: new Token(
    ChainId.ETHEREUM,
    '0x4E85579Ab75910b8CA409c7eDF2Ddfd88e994172',
    18,
    'StealingFromStrippersAtThaSyrupBar',
    'SyrupBar Token',
    '',
  ),
  
  usdc: USDC_ETH,
  usdt: USDT_ETH,
  busd: BUSD_GOERLI_ARBI,
  cake: SWAPP_ETH,
}

/*

import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_GOERLI_ARBI, USDT_GOERLI_ARBI, CAKE_GOERLI_ARBI, BUSD_GOERLI_ARBI, SWAPP_GOERLI_ARBI } from './common'

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
}
*/