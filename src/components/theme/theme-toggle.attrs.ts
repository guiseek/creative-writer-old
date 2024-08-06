import {Value} from '@jsxml/parser'

export type Theme = 'light' | 'dark'

export interface ThemeToggleAttts {
  theme: Theme & Value<Theme>
  onChange(theme: Theme): void
}
