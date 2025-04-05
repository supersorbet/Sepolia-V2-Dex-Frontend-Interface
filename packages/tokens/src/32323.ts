import { WETH9 } from '@pancakeswap/sdk'
import { ChainId } from '@pancakeswap/sdk'
import { Token } from '@pancakeswap/sdk'

export const basedTokens = {
  weth: WETH9[ChainId.BASED],
  wbased: new Token(
    ChainId.BASED,
    '0x7C57053Fd42FbA79E6fd43fB7499A0Ac4d342C78', // This is the WBASED address
    18,
    'WBASED',
    'Wrapped BASED',
    'https://based.org/'
  ),
  
  // Add these standard tokens when they become available
  cake: new Token(
    ChainId.BASED,
    '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', // Placeholder address
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://pancakeswap.finance/'
  ),
  
  usdc: new Token(
    ChainId.BASED,
    '0x7120e48E34166F96a422A39C18FB93A79c92B6B6', // Updated with actual USDC address
    6,
    'mUSDC',
    'mUSD Coin',
    'https://www.mock.io/usdc'
  ),
  
  usdt: new Token(
    ChainId.BASED,
    '0x55d398326f99059fF775485246999027B3197955', // Placeholder address
    18,
    'USDT',
    'Tether USD',
    'https://tether.to/'
  ),
  
  busd: new Token(
    ChainId.BASED,
    '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', // Placeholder address
    18,
    'BUSD',
    'Binance USD',
    'https://www.paxos.com/busd/'
  ),
}
