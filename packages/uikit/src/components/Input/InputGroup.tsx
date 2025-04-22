import React, { cloneElement } from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import { InputProps, scales } from "./types";

const getBoxShadow = ({ isSuccess = false, isWarning = false, theme }: any) => {
  if (isWarning) {
    return theme.shadows.warning;
  }

  if (isSuccess) {
    return theme.shadows.success;
  }

  return theme.shadows.inset;
};

const getHeight = ({ scale = scales.MD }: InputProps) => {
  switch (scale) {
    case scales.SM:
      return "32px";
    case scales.LG:
      return "48px";
    case scales.MD:
    default:
      return "40px";
  }
};

const StyledInputGroup = styled(Box)<{
  scale: scales;
  hasStartIcon: boolean;
  hasEndIcon: boolean;
}>`
  position: relative;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.input};
  transition: all 0.2s;
  
  /* Y2K cyber border */
  border: 1px solid ${({ theme }) => theme.colors.primary + "60"};
  box-shadow: 0 0 5px rgba(0, 238, 255, 0.3);
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 8px rgba(0, 238, 255, 0.5);
  }
  
  /* Scanline effect for cyber/Y2K look in dark mode */
  ${({ theme }) => theme.isDark && `
    &::after {
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
      z-index: 1;
      border-radius: inherit;
    }
  `}
`;

const Input = styled.input.attrs({ type: "text" })<InputProps>`
  background: transparent;
  border-radius: 12px;
  box-shadow: ${getBoxShadow};
  color: ${({ theme }) => theme.colors.text};
  display: block;
  font-size: 16px;
  height: ${getHeight};
  outline: 0;
  width: 100%;
  border: none;
  padding: 0 16px;
  
  /* Y2K styles */
  font-family: inherit;
  letter-spacing: 0.5px;
  
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:disabled {
    background-color: transparent;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }

  /* Safari fix */
  &::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  &::-webkit-search-results-button {
    -webkit-appearance: none;
  }

  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;

const InputAdornment = styled.div<{ isStart: boolean }>`
  align-items: center;
  display: inline-flex;
  position: absolute;
  z-index: 2;
  ${({ isStart }) => (isStart ? "left" : "right")}: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.primary};
`;

const InputGroup = ({
  scale = scales.MD,
  startIcon,
  endIcon,
  children,
  ...props
}: React.PropsWithChildren<InputProps & { startIcon?: React.ReactNode; endIcon?: React.ReactNode }>) => (
  <StyledInputGroup
    scale={scale}
    width="100%"
    position="relative"
    hasStartIcon={!!startIcon}
    hasEndIcon={!!endIcon}
    {...props}
  >
    {startIcon && <InputAdornment isStart>{startIcon}</InputAdornment>}
    {cloneElement(children as React.ReactElement<any>, {
      scale,
      style: {
        paddingLeft: startIcon ? "48px" : "16px",
        paddingRight: endIcon ? "48px" : "16px",
      },
    })}
    {endIcon && <InputAdornment isStart={false}>{endIcon}</InputAdornment>}
  </StyledInputGroup>
);

export default InputGroup;
