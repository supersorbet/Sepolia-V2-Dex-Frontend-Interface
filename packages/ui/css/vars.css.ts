import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'
import deepmerge from 'deepmerge'
import { Mode, tokens } from '../tokens'
import type { Theme } from './types'

const getVarName = (_value: string | null, path: string[]) => path.join('-')

const baseTokens: Omit<Theme, 'colors'> = tokens
const baseVars = createGlobalThemeContract(baseTokens, getVarName)
createGlobalTheme(':root', baseVars, baseTokens)

const lightColorScheme = {
  colors: tokens.colors.light,
}

const darkColorScheme = {
  colors: tokens.colors.dark,
}

const colorTokens = deepmerge(lightColorScheme, darkColorScheme)
const modeVars = createGlobalThemeContract(colorTokens, getVarName)

createGlobalTheme('[data-theme="light"]', modeVars, {
  colors: tokens.colors.light,
})

createGlobalTheme('[data-theme="dark"]', modeVars, {
  colors: tokens.colors.dark,
})

type BaseVars = typeof baseVars
type ModeVars = typeof modeVars
type Vars = BaseVars & ModeVars
export const vars = deepmerge(baseVars, modeVars) as Vars
