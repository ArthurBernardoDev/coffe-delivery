import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors: {
      "yellow-dark": "#C47F17",
      "yellow": "#DBAC2C",
      "yellow-light": "#F1E9C9",
      "purple-dark": "#4B2995",
      "purple": "#8047F8",
      "purple-light": "#EBE5F9",
      "base-title": "#272221",
      "base-subtitle": "#403937",
      "base-text": "#574F4D",
      "base-label": "#8D8686",
      "base-hover": "#7D5D5D",
      "base-button": "#E6E5E5",
      "base-input": "#EDEDED",
      "base-card": "#F3F2F2",
      "background": "#FAFAFA",
      "white": "#FFFFFF",
    }
  },
  media: {
    sm: '(max-width: 590px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1480px)',
  },
})