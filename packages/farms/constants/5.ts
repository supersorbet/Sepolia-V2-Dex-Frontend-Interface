import { SerializedFarmConfig } from '@pancakeswap/farms'
import { goerliTestnetTokens } from '@pancakeswap/tokens'

const farms: SerializedFarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'COPE-ETH LP',
    lpAddress: '0x8594c5E7B456c21D0C909561db82A87f04258E39',
    token: goerliTestnetTokens.cake,
    quoteToken: goerliTestnetTokens.weth,
  },
  {
    pid: 2,
    lpSymbol: 'COPE-USDC LP',
    lpAddress: '0x6B53C7943751aD55FB273400a50E7f440b4e3d4D',
    token: goerliTestnetTokens.cake,
    quoteToken: goerliTestnetTokens.usdc,
  },
]

export default farms