import styled, { DefaultTheme, css, keyframes } from "styled-components";
import { space, layout, variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { BaseButtonProps } from "./types";

const shimmerAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const glowPulse = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(0, 238, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 238, 255, 0.8), 0 0 30px rgba(255, 0, 178, 0.4);
  }
  100% {
    box-shadow: 0 0 5px rgba(0, 238, 255, 0.5);
  }
`;

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
}

const getDisabledStyles = ({ isLoading, theme }: ThemedButtonProps) => {
  if (isLoading === true) {
    return `
      &:disabled,
      &.pancake-button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.pancake-button--disabled {
      background: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
  `;
};

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? ".5" : "1";
};

const StyledButton = styled.button<BaseButtonProps>`
  position: relative;
  align-items: center;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: ${getOpacity};
  outline: 0;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  
  // Y2K style additions
  text-transform: uppercase;
  
  // Add pixel border
  border: 2px solid;
  border-color: ${({ theme, variant = "primary" }) => 
    variant === "primary" ? theme.colors.secondary : 
    variant === "secondary" ? theme.colors.primary : 
    variant === "tertiary" ? "transparent" : 
    theme.colors.primary};
  
  // Add inset highlight for 3D effect
  box-shadow: 
    inset -2px -2px 0 rgba(0,0,0,0.2),
    inset 2px 2px 0 rgba(255,255,255,0.3),
    0 0 0 2px rgba(0,0,0,0.05);
    
  // Cyber-style glow effect on hover
  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    transform: translateY(-2px);
    animation: ${glowPulse} 1.5s infinite;
  }
  
  // Add gradient shimmer on primary buttons
  ${({ variant = "primary" }) =>
    variant === "primary" &&
    css`
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent, 
          rgba(255, 255, 255, 0.3), 
          transparent
        );
        background-size: 200% 100%;
        border-radius: inherit;
        animation: ${shimmerAnimation} 3s infinite;
        pointer-events: none;
      }
    `}
  
  &:active {
    transform: translateY(2px);
    box-shadow: 
      inset 2px 2px 0 rgba(0,0,0,0.2),
      inset -2px -2px 0 rgba(255,255,255,0.1);
  }

  ${getDisabledStyles}
  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  ${layout}
  ${space}
  ${({ decorator, theme }) =>
    decorator &&
    css`
      &::before {
        content: "${decorator.text}";
        position: absolute;
        border-bottom: 20px solid ${decorator.backgroundColor ?? theme.colors.secondary};
        border-left: 34px solid transparent;
        border-right: 12px solid transparent;
        height: 0;
        top: -1px;
        right: -12px;
        width: 75px;
        text-align: center;
        padding-right: 30px;
        line-height: 20px;
        font-size: 12px;
        font-weight: 400;
        transform: rotate(31.17deg);
        color: ${decorator.color ?? "white"};
      }
    `}
`;

export default StyledButton;
