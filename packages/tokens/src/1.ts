import { ChainId, WETH9 } from '@pancakeswap/sdk'
import { USDC, USDT, CAKE, USDT_ETH, USDC_ETH, CAKE_ETH } from '@pancakeswap/tokens'

export const ethereumTokens = {
  weth: WETH9[ChainId.ETHEREUM],
  usdt: USDT_ETH[ChainId.ETHEREUM],
  usdc: USDC_ETH[ChainId.ETHEREUM],
//  pepl: PEPL[ChainId.ETHEREUM],
  cake: CAKE_ETH[ChainId.ETHEREUM],
//  wbtc: WBTC_ETH,
}
