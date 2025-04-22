import { TextareaHTMLAttributes, useEffect, useRef } from 'react'
import styled from 'styled-components'

// Use require for problematic imports
// @ts-ignore
const EasyMde = require('easymde')
// @ts-ignore
const merge = require('lodash/merge')

import 'easymde/dist/easymde.min.css'

// Helper function to safely access theme properties with fallbacks
const getThemeValue = (theme: any, path: string, fallback: string) => {
  try {
    // Use optional chaining to safely access nested properties
    const pathParts = path.split('.');
    let value = theme;
    
    for (const part of pathParts) {
      value = value?.[part];
      if (value === undefined) return fallback;
    }
    
    return value || fallback;
  } catch (e) {
    return fallback;
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SimpleMdeProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  options?: typeof EasyMde.Options
  onTextChange: (value: string) => void
}

const Wrapper = styled.div`
  .EasyMDEContainer .CodeMirror {
    background: ${({ theme }) => getThemeValue(theme, 'colors.input', '#f0f0f0')};
    border: 3px outset white;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: ${({ theme }) => getThemeValue(theme, 'shadows.inset', 'inset 0px 1px 3px rgba(0, 0, 0, 0.15)')};
    padding: 16px;
    font-family: "DOS", "Courier New", Courier, monospace;
    font-smooth: never;
    -webkit-font-smoothing: none;
    margin-bottom: 0;
  }

  .CodeMirror-code {
    color: ${({ theme }) => getThemeValue(theme, 'colors.text', '#333333')};
  }

  .CodeMirror-cursor {
    border-left: ${({ theme }) => `1px solid ${getThemeValue(theme, 'colors.text', '#333333')}`};
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }

  .editor-toolbar {
    background: ${({ theme }) => theme?.isDark ? 'rgb(0,20,20,65%)' : 'rgb(255, 255, 255, 87%)'};
    border: 3px outset white;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    color: ${({ theme }) => getThemeValue(theme, 'colors.text', '#333333')};
    margin-top: 0;

    a,
    button {
      color: ${({ theme }) => getThemeValue(theme, 'colors.text', '#333333')};
      font-family: "DOS", "Courier New", Courier, monospace;

      &:hover,
      &.active {
        background: teal;
        color: white;
        border: 0;
      }
    }
  }
`

/**
 * @see https://github.com/Ionaru/easy-markdown-editor#configuration
 */
const defaultOptions = {
  autofocus: false,
  status: false,
  hideIcons: ['guide', 'fullscreen', 'preview', 'side-by-side'],
  spellChecker: false,
  styleSelectedText: false,
}

const SimpleMde = ({ options, onTextChange, ...props }) => {
  const ref = useRef(null)
  const onTextChangeHandler = useRef(onTextChange)

  useEffect(() => {
    let simpleMde = new EasyMde(merge({ element: ref.current }, defaultOptions, options))

    simpleMde.codemirror.on('change', () => {
      onTextChangeHandler.current(simpleMde.value())
    })

    return () => {
      if (simpleMde) {
        simpleMde.toTextArea()
        simpleMde = null
      }
    }
  }, [options, onTextChangeHandler, ref])

  return (
    <Wrapper>
      <textarea ref={ref} readOnly {...props} />
    </Wrapper>
  )
}

export default SimpleMde
