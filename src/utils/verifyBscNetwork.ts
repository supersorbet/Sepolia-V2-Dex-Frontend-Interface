import { ChainId } from '@pancakeswap/sdk'

export const verifyBscNetwork = (chainId: number) => {
  return chainId === ChainId.BSC || chainId === ChainId.BSC_TESTNET || chainId === ChainId.GOERLI_ARBI || chainId === ChainId.ETHEREUM || chainId === ChainId.GOERLI
}
