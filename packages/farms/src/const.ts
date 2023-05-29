import { FixedNumber, BigNumber } from '@ethersproject/bignumber'

export const FIXED_ZERO = FixedNumber.from(0)
export const FIXED_ONE = FixedNumber.from(1)
export const FIXED_TWO = FixedNumber.from(2)

export const BIG_TEN = BigNumber.from(10)

export const FIXED_TEN_IN_POWER_18 = FixedNumber.from(BIG_TEN.pow(18))

export const masterChefAddresses = {
  97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
  56: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
  421613: '0xba53A1aF0aeB5247A2eeF4098cC85b4B1C853E28',
  1: '0x3E20Df3d9b8e0229283efC96F326D9dFe9659A8F', 
}

export const nonBSCVaultAddresses = {
  5: '0x8CB958bBdb45597cc918147469eb650A9397aBDA',
}
