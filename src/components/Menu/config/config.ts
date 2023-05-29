 import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
import { SUPPORT_ONLY_BSC } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
      //  {
      //    label: t('Limit'),
      //    href: '/limit-orders',
      //    supportChainIds: SUPPORT_ONLY_BSC,
      //    image: '/images/decorations/3d-coin.png',
      //  },
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },
      //  {
      //    label: t('Perpetual'),
      //    href: `https://perp.pancakeswap.finance/${perpLangMap(languageCode)}/futures/BTCUSDT?theme=${perpTheme(
      //      isDark,
      //    )}`,
      //    type: DropdownMenuItemType.EXTERNAL_LINK,
      //  },
      //  {
      //    label: t('Bridge'),
      //    href: 'https://bridge.pancakeswap.finance/',
      //    type: DropdownMenuItemType.EXTERNAL_LINK,
      //  },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Earn'),
      href: '/farms',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      supportChainIds: SUPPORT_ONLY_BSC,
      items: [
        {
          label: t('Farms'),
          href: '/farms',
        },
        {
          label: t('Pools'),
          href: '/pools',
          supportChainIds: SUPPORT_ONLY_BSC,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Win'),
      href: '/prediction',
      icon: TrophyIcon,
      fillIcon: TrophyFillIcon,
      supportChainIds: SUPPORT_ONLY_BSC,
      items: [
  //      {
  //        label: t('Trading Competition'),
  //        href: '/competition',
  //        image: '/images/decorations/tc.png',
  //        hideSubNav: true,
  //      },
  //      {
  //        label: t('Prediction (BETA)'),
  //        href: '/prediction',
  //        image: '/images/decorations/prediction.png',
  //      },
        {
          label: t('Lottery'),
          href: '/lottery',
          image: '/images/decorations/lottery.png',
        },
    //    {
    //      label: t('Pottery (BETA)'),
    //      href: '/pottery',
    //      image: '/images/decorations/lottery.png',
    //    },
      ],
    },
    {
      label: t('NFT Amm'),
      href: `${nftsBaseUrl}`,
      icon: NftIcon,
      fillIcon: NftFillIcon,
      supportChainIds: SUPPORT_ONLY_BSC,
      image: '/images/decorations/nft.png',
      items: [
        {
          label: t('Overview'),
          href: `${nftsBaseUrl}`,
        },
        {
          label: t('Collections'),
          href: `${nftsBaseUrl}/collections`,
        },
        {
          label: t('Activity'),
          href: `${nftsBaseUrl}/activity`,
        },
      ],
    },
    {
      label: 'More',
      href: '/info',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        {
          label: t('Info(Coming Soon)'),
          href: '/info',
        },
      //  {
      //    label: t('Voting(Coming Soon)'),
      //    href: '/voting',
      //    supportChainIds: chainId,
      //    image: '/images/voting/voting-bunny.png',
      //  },
        {
          label: t('Frendao'),
          href: 'http://ciety.xyz/frendao',
          type: DropdownMenuItemType.EXTERNAL_LINK
        //  supportChainIds: CHAIN_IDS,
        //  image: '/images/voting/voting-bunny.png',
        },

        {
          label: t('Buy With Fiat on Flooz!'),
          href: 'https://flooz.trade/trade/0x7dbf199731a3ccc3445b99c130171646314fcb44?refId=cB0iCi&network=eth',
          type: DropdownMenuItemType.EXTERNAL_LINK
        //  supportChainIds: SUPPORT_ONLY_BSC,
        //  image: '/images/voting/voting-bunny.png',
        },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: t('Blog'),
          href: 'https://medium.com/@WutHonker',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Docs'),
          href: 'https://whitepaper.pepepal.com',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('LinkTree'),
          href: 'https://linktr.ee/pepepalofficial',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config

/*
import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
//  TrophyIcon,
//  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'

import { ContextApi } from '@pancakeswap/localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
// import { CHAIN_IDS } from 'config/constants/supportChains'
import { CHAIN_IDS } from 'utils/wagmi'
import { SUPPORT_ONLY_BSC } from 'config/constants/supportChains'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
      //  {
      //    label: t('Limit'),
      //    href: '/limit-orders',
      //    supportChainIds: SUPPORT_ONLY_BSC,
      //    image: '/images/decorations/3d-coin.png',
      //  },
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },
      //  {
        //  label: t('Trade PEPL On P2B Exchange'),
        //  href: 'https://p2pb2b.com/trade/PEPL_USDT/referral=26dc8e2e/',
        //  type: DropdownMenuItemType.EXTERNAL_LINK,
      //  },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Earn'),
      href: '/farms',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      items: [
        {
          label: t('Farms'),
          href: '/farms',
        },
        {
          label: t('Pools'),
          href: '/pools',
          supportChainIds: CHAIN_IDS,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
   // {
   //   label: t('Frendao'),
   //   href: 'https://ciety.xyz/frendao',
   //   icon: EarnIcon,
   //   fillIcon: EarnFillIcon,
   //   image: '/images/decorations/pe2.png',
   //   items: [
    //    {
    //      label: t('Farms'),
    //      href: '/farms',
    //    },
    //    {
    //      label: t('Pools'),
    //      href: '/pools',
    //      supportChainIds: SUPPORT_ONLY_BSC,
    //    },
    //  ].map((item) => addMenuItemSupported(item, chainId)),
  //  },
      {
      label: t('NFT'),
      href: `${nftsBaseUrl}`,
      icon: NftIcon,
      fillIcon: NftFillIcon,
      supportChainIds: SUPPORT_ONLY_BSC,
      image: '/images/decorations/nft.png',
      items: [
        {
          label: t('Overview'),
          href: `${nftsBaseUrl}`,
        },
        {
          label: t('Collections'),
          href: `${nftsBaseUrl}/collections`,
        },
        {
          label: t('Activity'),
          href: `${nftsBaseUrl}/activity`,
        },
      ],
    },
    {
      label: 'More',
      href: '/info',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        {
          label: t('Info(Coming Soon)'),
          href: '/info',
        },
        {
          label: t('Voting(Coming Soon)'),
          href: '/voting',
          supportChainIds: CHAIN_IDS,
          image: '/images/voting/voting-bunny.png',
        },
        {
          label: t('Frendao'),
          href: 'http://ciety.xyz/frendao',
          type: DropdownMenuItemType.EXTERNAL_LINK
        //  supportChainIds: CHAIN_IDS,
        //  image: '/images/voting/voting-bunny.png',
        },

        {
          label: t('Buy With Fiat on Flooz!'),
          href: 'https://flooz.trade/trade/0x7dbf199731a3ccc3445b99c130171646314fcb44?refId=cB0iCi&network=eth',
          type: DropdownMenuItemType.EXTERNAL_LINK
        //  supportChainIds: SUPPORT_ONLY_BSC,
        //  image: '/images/voting/voting-bunny.png',
        },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: t('Blog'),
          href: 'https://medium.com/@WutHonker',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Docs'),
          href: 'https://whitepaper.pepepal.com',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('LinkTree'),
          href: 'https://linktr.ee/pepepalofficial',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
*/