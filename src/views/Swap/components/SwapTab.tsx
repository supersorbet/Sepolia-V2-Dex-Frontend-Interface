import { useState } from 'react'
import { TabMenu, Tab } from '@pancakeswap/uikit'

export enum SwapType {
  SWAP,
//  STABLE_SWAP,
}

export default function SwapTab({ children }) {
  const [swapTypeState, setSwapType] = useState(SwapType.SWAP)

  return children(SwapType.SWAP)
}
