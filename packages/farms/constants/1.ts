import { SerializedFarmConfig } from '@pancakeswap/farms'
import { goerliArbiTestnetTokens } from '@pancakeswap/tokens'

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'STEALINGFROMSTRIPPERS',
    lpAddress: '0x4E85579Ab75910b8CA409c7eDF2Ddfd88e994172',
    token: goerliArbiTestnetTokens.syrup,
    quoteToken: goerliArbiTestnetTokens.syrup,
  },
  {
    pid: 1,
    lpSymbol: 'youllcowards',
    lpAddress: '0x32B4ceA791E2C8de0D2E29B18188058bd7eD41Eb',
    token: goerliArbiTestnetTokens.syrup,
    quoteToken: goerliArbiTestnetTokens.syrup,
  },
  {
    pid: 2,
    lpSymbol: 'COPE-ETH LP',
    lpAddress: '0xccc2C601DAedF48BE6F5f022862abbD254c97EE7',
    token: goerliArbiTestnetTokens.weth,
    quoteToken: goerliArbiTestnetTokens.cake,
  },
  {
    pid: 3,
    lpSymbol: 'WETH-USDC LP',
    lpAddress: '0xCF11bFd14e36E21f7aE216AC207A875e44DF45E3',
    token: goerliArbiTestnetTokens.weth,
    quoteToken: goerliArbiTestnetTokens.usdc,
  },
//  {
//    pid: 3,
//    lpSymbol: 'BUSD-SWAPP LP',
//    lpAddress: '0x9B950389E452e56280A501Fd78D1c3D64902d3b2',
//    token: goerliArbiTestnetTokens.busd,
//    quoteToken: goerliArbiTestnetTokens.cake,
//  },
  
]

export default farms
