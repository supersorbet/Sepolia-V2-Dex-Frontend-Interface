import { ChainId, WETH9 } from '@pancakeswap/sdk'
import { USDC, USDT, CAKE } from '@pancakeswap/tokens'

export const ethereumTokens = {
  weth: WETH9[ChainId.ETHEREUM],
  usdt: USDT[ChainId.ETHEREUM],
  usdc: USDC[ChainId.ETHEREUM],
//  pepl: PEPL[ChainId.ETHEREUM],
  cake: CAKE[ChainId.ETHEREUM],
//  wbtc: WBTC_ETH,
}
