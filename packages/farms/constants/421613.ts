import { SerializedFarmConfig } from '@pancakeswap/farms'
import { goerliArbiTestnetTokens } from '@pancakeswap/tokens'

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'WETH-DAI LP',
    lpAddress: '0xFf805Ce15A1078CdAFC9126cF3Ec9CCDB4311026',
    token: goerliArbiTestnetTokens.weth,
    quoteToken: goerliArbiTestnetTokens.usdt,
  },
  {
    pid: 1,
    lpSymbol: 'WETH-COPE LP',
    lpAddress: '0x6b1F8A0a75891cBf225D668a6AbEA8a53dC58F79',
    token: goerliArbiTestnetTokens.weth,
    quoteToken: goerliArbiTestnetTokens.cake,
  },
  {
    pid: 2,
    lpSymbol: 'WETH-USDC LP',
    lpAddress: '0x2943b2562Bc7aA86211B8225e69E51ed1EE854a7',
    token: goerliArbiTestnetTokens.weth,
    quoteToken: goerliArbiTestnetTokens.usdc,
  },
  {
    pid: 3,
    lpSymbol: 'USDC-COPE LP',
    lpAddress: '0xBec5B8Da64B7361C87b07162F8826FBE7F485A14',
    token: goerliArbiTestnetTokens.usdc,
    quoteToken: goerliArbiTestnetTokens.cake,
  },
]

export default farms
