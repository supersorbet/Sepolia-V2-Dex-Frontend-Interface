import { useState } from 'react'
import { TabMenu, Tab } from '@pancakeswap/uikit'


export enum SwapType {
  SWAP,
  STABLE_SWAP
}

export default function SwapTab({ children, showStable }) {
  const [swapTypeState, setSwapType] = useState(SwapType.SWAP)

  if (showStable) {
    return (
      <>
        
          <Tab>Swap</Tab>
       
        {children(swapTypeState)}
      </>
    )
  }

  return children(SwapType.SWAP)
}
