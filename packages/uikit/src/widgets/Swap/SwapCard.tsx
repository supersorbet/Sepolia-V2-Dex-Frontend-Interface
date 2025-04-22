import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { StyledCard, StyledCardInner, CardHeading, RetroSeparator, RetroButton } from '../../components/Card/StyledCard';
import Box from '../../components/Box/Box';
import Text from '../../components/Text/Text';
import { ChevronDownIcon, RefreshIcon } from '../../components/Svg';
import { Flex } from '../../components/Box';

const SwapCardWrapper = styled(StyledCard)`
  max-width: 420px;
  width: 100%;
  margin: 2rem auto;
  position: relative;
  z-index: 1;
`;

const SwapCardInner = styled(StyledCardInner)`
  padding: 1rem;
`;

const TokenSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 0.75rem;
  margin-bottom: 0.5rem;
`;

const TokenSelectButton = styled.button`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 6px 10px;
  cursor: pointer;
  width: auto;
  align-self: flex-start;
  transition: background-color 0.2s, border-color 0.2s;
  
  font-family: 'Pixelify Sans', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryDark};
    background: ${({ theme }) => theme.colors.background};
  }
  
  &:focus {
    outline: 1px dotted ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const TokenIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-right: 6px;
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
`;

const TokenName = styled.span`
  margin-right: 6px;
  font-weight: normal;
  font-size: 14px;
  font-family: 'Pixelify Sans', sans-serif;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  font-size: 16px;
  padding: 8px 0;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  font-family: 'Pixelify Sans', monospace;
  text-align: right;
  margin-right: 8px;
`;

const MaxButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 2px 6px;
  border-radius: ${({ theme }) => theme.radii.small};
  cursor: pointer;
  font-size: 12px;
  font-family: 'Pixelify Sans', sans-serif;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.backgroundAlt};
  }
`;

const SwapButton = styled(RetroButton)`
  width: 100%;
  margin-top: 1rem;
  font-size: 14px;
`;

const SwapIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -16px auto;
  position: relative;
  z-index: 2;
  cursor: pointer;
  transition: transform 0.3s;
  
  &:hover {
    transform: rotate(90deg);
  }
`;

const SwapCard: React.FC<{onSwap?: () => void}> = ({ onSwap }) => {
  const [isTokensReversed, setIsTokensReversed] = React.useState(false);
  
  const handleSwapClick = () => {
    setIsTokensReversed(!isTokensReversed);
  };
  
  return (
    <SwapCardWrapper>
      <SwapCardInner hasCustomBorder={false}>
        <CardHeading>Exchange</CardHeading>
        
        <TokenSelectWrapper>
          <Text fontSize="12px" color="textSubtle" mb="4px">From:</Text>
          <Flex justifyContent="space-between" alignItems="center">
            <TokenSelectButton>
              <TokenIcon />
              <TokenName>{isTokensReversed ? 'USDC' : 'ETH'}</TokenName>
              <ChevronDownIcon width="10px" />
            </TokenSelectButton>
            <Input placeholder="0.0" />
          </Flex>
          <Flex justifyContent="flex-end" alignItems="center" mt="4px">
            <MaxButton>MAX</MaxButton>
          </Flex>
        </TokenSelectWrapper>
        
        <SwapIconWrapper onClick={handleSwapClick}>
           <RefreshIcon width="16px" />
        </SwapIconWrapper>
        
        <TokenSelectWrapper>
          <Text fontSize="12px" color="textSubtle" mb="4px">To:</Text>
           <Flex justifyContent="space-between" alignItems="center">
            <TokenSelectButton>
              <TokenIcon />
              <TokenName>{isTokensReversed ? 'ETH' : 'USDC'}</TokenName>
              <ChevronDownIcon width="10px" />
            </TokenSelectButton>
            <Input placeholder="0.0" readOnly />
          </Flex>
        </TokenSelectWrapper>
        
        <RetroSeparator />
        
        <Flex justifyContent="space-between" mb={1}>
          <Text fontSize="12px" color="textSubtle">Rate:</Text>
          <Text fontSize="12px" bold>1 ETH = 3000 USDC</Text>
        </Flex>
        <Flex justifyContent="space-between" mb={2}>
          <Text fontSize="12px" color="textSubtle">Slippage:</Text>
          <Text fontSize="12px" bold>0.5%</Text>
        </Flex>
        
        <SwapButton primary onClick={onSwap}>Swap</SwapButton>
      </SwapCardInner>
    </SwapCardWrapper>
  );
};

export default SwapCard; 