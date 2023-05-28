import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_GOERLI } from './common'

export const goerliTestnetTokens = {
  weth: WETH9[ChainId.GOERLI],
  cake: new Token(ChainId.GOERLI, '0x313914Cc58261FB4e6b62bdd4efF1B2F63aA10c4', 18, 'CELR', 'CelerToken', ''),
  leet: new Token(ChainId.GOERLI, '0xBd509651E6374c327d24b9d7E3Ea46704f6F31E8', 18, 'LEET', 'Leet Token', ''),
  usdc: USDC_GOERLI,
}
