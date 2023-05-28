import { SerializedFarmConfig } from '@pancakeswap/farms'
import { goerliArbiTestnetTokens } from '@pancakeswap/tokens'

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'WETH-USDT LP',
    lpAddress: '0xCF71B33E5F85868d495A2Ea8CD7a11a45AF833e8',
    token: goerliArbiTestnetTokens.weth,
    quoteToken: goerliArbiTestnetTokens.usdt,
  },
  {
    pid: 1,
    lpSymbol: 'WETH-SWAPP LP',
    lpAddress: '0x07FFD9A8b90A92dfD60Ef87324Fa3e65C1A2dC77',
    token: goerliArbiTestnetTokens.weth,
    quoteToken: goerliArbiTestnetTokens.cake,
  },
  {
    pid: 2,
    lpSymbol: 'WETH-BUSD LP',
    lpAddress: '0x21e8A6339eEdD1559221d6d9D44Af6d81e999E4B',
    token: goerliArbiTestnetTokens.weth,
    quoteToken: goerliArbiTestnetTokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-SWAPP LP',
    lpAddress: '0x9B950389E452e56280A501Fd78D1c3D64902d3b2',
    token: goerliArbiTestnetTokens.busd,
    quoteToken: goerliArbiTestnetTokens.cake,
  },
]

export default farms
