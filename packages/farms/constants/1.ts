import { ethereumTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  {
    pid: 1,
    vaultPid: 0,
    lpSymbol: 'COPE-ETH LP',
    lpAddress: '0x8594c5E7B456c21D0C909561db82A87f04258E39',
    quoteToken: ethereumTokens.cake,
    token: ethereumTokens.weth,
  },
  {
    pid: 2,
    vaultPid: 0,
    lpSymbol: 'USDC-WETH LP',
    lpAddress: '0xCF11bFd14e36E21f7aE216AC207A875e44DF45E3',
    quoteToken: ethereumTokens.weth,
    token: ethereumTokens.usdc,
    boosted: false,
  },
/*  {
    pid: 3,
    vaultPid: 0,
    lpSymbol: 'WBTC-ETH LP',
    lpAddress: '0x4AB6702B3Ed3877e9b1f203f90cbEF13d663B0e8',
    quoteToken: ethereumTokens.weth,
    token: ethereumTokens.wbtc,
  }, */
]
export default farms
