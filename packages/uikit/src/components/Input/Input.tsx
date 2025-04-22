import React from "react";
import styled, { keyframes } from "styled-components";
import { SpaceProps } from "styled-system";
import Box from "../Box/Box";
import StyledInput from "./StyledInput";
import InputGroup from "./InputGroup";
import { InputProps, scales, Scales } from "./types";

const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  50%, 100% {
    transform: translateY(200%);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 238, 255, 0.5);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(0, 238, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 238, 255, 0);
  }
`;

const Scanlines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.15;
  pointer-events: none;
  z-index: 2;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    animation: ${scanline} 5s linear infinite;
  }
`;

interface StyledInputWrapperProps extends SpaceProps {
  scale?: Scales;
  hasError?: boolean;
  isFocused?: boolean;
}

const StyledInputWrapper = styled(Box)<StyledInputWrapperProps>`
  position: relative;
  background: ${({ theme }) => theme.colors.input};
  border-radius: 12px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 0 1px ${({ theme }) => theme.colors.inputSecondary};
  transition: all 0.3s;
  
  &:hover {
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.12), 0 0 0 1px ${({ theme }) => theme.colors.primary};
  }
  
  ${({ isFocused, theme }) => isFocused && `
    animation: ${pulse} 2s infinite;
    border: 1px solid ${theme.colors.secondary};
    box-shadow: 0 0 8px ${theme.colors.primary};
  `}
  
  ${({ hasError, theme }) => hasError && `
    border: 1px solid ${theme.colors.failure};
    box-shadow: 0 0 8px ${theme.colors.failure};
  `}
  
  /* Add scanline effect for VHS cyberpunk feel */
  ${({ theme }) => theme.isDark && `
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
        to bottom,
        transparent,
        transparent 4px,
        rgba(0, 238, 255, 0.03) 4px,
        rgba(0, 238, 255, 0.03) 8px
      );
      pointer-events: none;
    }
  `}
`;

interface ExtendedInputProps extends InputProps {
  hasError?: boolean;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const Y2KInput: React.FC<React.PropsWithChildren<ExtendedInputProps>> = ({ scale = scales.MD, hasError = false, ...props }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    props.onBlur?.(e);
  };
  
  return (
    <StyledInputWrapper scale={scale} hasError={hasError} isFocused={isFocused}>
      <StyledInput
        scale={scale}
        hasError={hasError}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {isFocused && props.isSuccess === false && !hasError && <Scanlines />}
    </StyledInputWrapper>
  );
};

export default Y2KInput;
export { InputGroup };
