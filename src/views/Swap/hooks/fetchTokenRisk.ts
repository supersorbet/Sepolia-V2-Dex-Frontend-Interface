import { ChainId } from '@pancakeswap/sdk'
import { ACCESS_RISK_API } from 'config/constants/endpoints'

export enum TOKEN_RISK {
  'Low' = 'Low',
  'Medium' = 'Medium',
  'High' = 'High',
}

export const TokenRiskPhases = {
  0: TOKEN_RISK.Low,
  1: TOKEN_RISK.Medium,
  2: TOKEN_RISK.Medium,
  3: TOKEN_RISK.Medium,
  4: TOKEN_RISK.High,
  5: TOKEN_RISK.High,
}

export interface RiskTokenInfo {
  address: string
  chainId: ChainId
  isSuccess: boolean
  riskLevel: TOKEN_RISK
  riskResult: string
  scannedTs: number
  riskLevelDescription: string
}

const fetchRiskApi = async (address: string, chainId: number) => {
  const response = await fetch(ACCESS_RISK_API, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      address,
      chain_id: chainId,
    }),
  })

  const result = await response.json()
  return result
}

export const fetchRiskToken = async (address: string, chainId: number): Promise<RiskTokenInfo> => {
  try {
    const riskApi = await fetchRiskApi(address, chainId)
    // eslint-disable-next-line camelcase
    const { risk_result, scanned_ts, risk_level, risk_level_description } = riskApi.data

    return {
      isSuccess: true,
      address,
      chainId,
      riskLevel: TokenRiskPhases[risk_level],
      riskResult: risk_result,
      scannedTs: scanned_ts,
      riskLevelDescription: risk_level_description,
    }
  } catch (error) {
    console.error('Fetch Risk Token error: ', error)
    return {
      isSuccess: false,
      address: '',
      chainId: ChainId.GOERLI_ARBI,
      riskLevel: TokenRiskPhases[0],
      riskResult: '',
      scannedTs: 0,
      riskLevelDescription: '',
    }
  }
}

export const fetchRiskData = async ({ chainId, address }: { chainId: number; address: string }): Promise<RiskTokenInfo | null> => {
  // Use this switch once the BE supports token risk checks on other chains
  switch (chainId) {
    // case ChainId.ETHEREUM:
    // case ChainId.BSC:
    // case ChainId.BSC_TESTNET:
    case ChainId.BASED:
    case ChainId.GOERLI_ARBI:
      return fetchRiskToken(address, ChainId.GOERLI_ARBI)
    default:
      return null
  }
}
