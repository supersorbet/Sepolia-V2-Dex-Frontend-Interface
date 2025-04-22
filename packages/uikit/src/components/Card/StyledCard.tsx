import styled, { DefaultTheme, keyframes, css } from "styled-components";
import { space } from "styled-system";
import { Box } from "../Box";
import { CardProps } from "./types";

// Text flicker animation for headings
const textFlicker = keyframes`
  0% {
    opacity: 1;
  }
  10% {
    opacity: 0.8;
  }
  12% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  21% {
    opacity: 0.6;
  }
  23% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  83% {
    opacity: 0.8;
  }
  87% {
    opacity: 1;
  }
`;

// Dithering/Noise pattern for background
const DitherPattern = css`
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkYGD4D8SMQAwGcAY2BZGMAX4jCAMDAwAArcQG9wAAAABJRU5ErkJggg==");
  background-repeat: repeat;
`;

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBorderColor = ({ isActive, isSuccess, isWarning, borderBackground, theme }: StyledCardProps) => {
  if (borderBackground) {
    return borderBackground;
  }
  if (isWarning) {
    return theme.colors.warning;
  }

  if (isSuccess) {
    return theme.colors.success;
  }

  if (isActive) {
    return theme.colors.primary; // Simple primary color border for active state
  }

  return theme.colors.cardBorder; // Default border
};

export const StyledCard = styled.div<StyledCardProps>`
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  overflow: visible; // Allow potential decorative overflows
  border-radius: ${({ theme }) => theme.radii.card};
  
  // Simple thin border like ribo.zone
  border: 1px solid ${getBorderColor};
  
  // Optional: Add the dither pattern for texture
  ${({ theme }) => theme.isDark && DitherPattern}
  
  // Remove complex shadows for flatter look
  box-shadow: none;
  
  transition: border-color 0.2s;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryDark}; // Darker border on hover
  }

  ${space}
`;

export const StyledCardInner = styled(Box)<{ background?: string; hasCustomBorder?: boolean }>`
  width: 100%;
  height: 100%;
  overflow: hidden; // Keep inner content clipped
  background: ${({ theme, background }) => background ?? 'transparent'}; // Allow card background to show through
  border-radius: ${({ theme }) => theme.radii.card};
  padding: 16px; // Add standard padding
`;

// Heading style adjusted for ribo.zone feel
export const CardHeading = styled.div`
  font-family: 'Silkscreen', sans-serif;
  font-size: 1.0em;
  text-align: left;
  color: ${({ theme }) => theme.colors.textSubtle};
  padding-bottom: 6px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`;

// Simpler separator
export const RetroSeparator = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  margin: 16px 0;
`;

// Simpler button, less beveled
export const RetroButton = styled.button<{ primary?: boolean }>`
  background: ${({ theme, primary }) => primary ? theme.colors.primaryDark : theme.colors.tertiary};
  color: ${({ theme, primary }) => primary ? theme.colors.white : theme.colors.text};
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radii.default};
  cursor: pointer;
  text-align: center;
  transition: background-color 0.2s, border-color 0.2s;
  
  &:hover {
    background: ${({ theme, primary }) => primary ? theme.colors.primary : theme.colors.textDisabled};
    border-color: ${({ theme }) => theme.colors.primaryDark};
  }
  
  &:focus {
    outline: 1px dotted ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  
  &:disabled {
    background: ${({ theme }) => theme.colors.backgroundDisabled};
    border-color: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }
`;

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
};
