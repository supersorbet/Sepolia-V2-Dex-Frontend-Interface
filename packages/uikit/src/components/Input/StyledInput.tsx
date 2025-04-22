import styled, { DefaultTheme } from "styled-components";
import { InputProps, scales } from "./types";

interface StyledInputProps extends InputProps {
  theme: DefaultTheme;
  hasError?: boolean;
}

/**
 * Priority: Warning --> Success --> HasError
 */
const getBoxShadow = ({ isSuccess = false, isWarning = false, theme, hasError = false }: StyledInputProps) => {
  if (hasError) {
    return `0 0 0 1px ${theme.colors.failure}`;
  }
  
  if (isWarning) {
    return theme.shadows.warning;
  }

  if (isSuccess) {
    return theme.shadows.success;
  }

  return theme.shadows.inset;
};

const getHeight = ({ scale = scales.MD }: StyledInputProps) => {
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

const Input = styled.input<InputProps & { hasError?: boolean }>`
  background-color: transparent;
  border: 0;
  border-radius: 12px;
  box-shadow: ${getBoxShadow};
  color: ${({ theme }) => theme.colors.text};
  display: block;
  font-size: 16px;
  height: ${getHeight};
  outline: 0;
  padding: 0 16px;
  width: 100%;
  
  /* Y2K cyber styling */
  font-family: ${({ theme }) => theme.fonts?.mono || "monospace"};
  letter-spacing: 0.5px;
  transition: color 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:disabled {
    background-color: transparent;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

Input.defaultProps = {
  scale: scales.MD,
  isSuccess: false,
  isWarning: false,
};

export default Input; 