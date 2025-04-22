import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import Page, { PageMeta } from 'components/Layout/Page'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import SwapCard from 'components/SwapCard'

// Animated stars background effect
const twinkle = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 0.7; }
  100% { opacity: 0.2; }
`;

const moveUp = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-2000px); }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 24px 12px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 24px 0 0 0;
  }
`;

const Star = styled.div<{ size: number; top: string; left: string; delay: string }>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  animation: ${twinkle} 4s ease-in-out infinite, ${moveUp} 150s linear infinite;
  animation-delay: ${({ delay }) => delay};
  opacity: 0.2;
  z-index: 0;
`;

const RetroGlowText = styled.h1`
  font-family: 'Press Start 2P', monospace;
  font-size: 28px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}, 
               0 0 20px ${({ theme }) => theme.colors.primary}, 
               0 0 30px ${({ theme }) => theme.colors.primary};
  margin-bottom: 40px;
  letter-spacing: 2px;
`;

const WindowsTitle = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #000080, #1084d0);
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  height: 30px;
  width: 90%;
  max-width: 500px;
  margin: 0 auto 20px;
  padding: 0 10px;
`;

const WindowsText = styled.span`
  color: white;
  font-family: 'VT323', monospace;
  font-size: 18px;
  font-weight: bold;
`;

const WindowsCloseButton = styled.div`
  width: 18px;
  height: 18px;
  background: #c0c0c0;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  cursor: pointer;
  
  &:before {
    content: "×";
    font-size: 14px;
    font-weight: bold;
  }
  
  &:active {
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
`;

const RetroComputer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 50px;
  font-size: 40px;
  z-index: 1;
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const RetroPepe = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50px;
  font-size: 40px;
  z-index: 1;
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const Footer = styled.div`
  font-family: 'VT323', monospace;
  text-align: center;
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.textSubtle};
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${({ theme }) => 
    `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${theme.colors.primary.replace('#', '')}' fill-opacity='0.03'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  };
  opacity: 0.5;
  z-index: 0;
`;

const HelpIcon = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Press Start 2P', monospace;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  
  &:hover {
    filter: brightness(1.1);
  }
`;

// Create stars for the background
const renderStars = () => {
  const stars = [];
  for (let i = 0; i < 50; i++) {
    const size = Math.random() * 3 + 1;
    const top = `${Math.random() * 2000}px`;
    const left = `${Math.random() * 100}%`;
    const delay = `${Math.random() * 4}s`;
    
    stars.push(
      <Star 
        key={i} 
        size={size} 
        top={top} 
        left={left} 
        delay={delay} 
      />
    );
  }
  return stars;
};

export default function Swap() {
  const { isDark } = useTheme();
  
  return (
    <>
      <PageMeta />
      <Page>
        <ContentWrapper>
          {isDark && renderStars()}
          <BackgroundPattern />
          <RetroGlowText>SEPOLIA DEX</RetroGlowText>
          <div style={{ width: '100%', maxWidth: '500px' }}>
            {/* Placeholder for swap interface */}
            <div style={{ background: isDark ? '#333' : '#fff', padding: '20px', borderRadius: '12px', border: '3px solid #ccc' }}>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                Swap Interface Coming Soon
              </div>
            </div>
          </div>
          <Footer>
            <p>© 2023 Sepolia DEX | <a href="#">About</a> | <a href="#">Docs</a></p>
          </Footer>
        </ContentWrapper>
        <HelpIcon>?</HelpIcon>
      </Page>
    </>
  );
} 