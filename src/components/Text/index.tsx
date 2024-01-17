import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'

export const Text = styled('p', {
  fontFamily: 'Roboto, sans-serif',
  margin: 0,
  variants: {
    fontWeight: {
      Light: { fontWeight: 300 },
      Regular: { fontWeight: 400 },
      Medium: { fontWeight: 500 },
      Bold: { fontWeight: 700 },
    },
  },
  defaultVariants: {
    fontWeight: 'Regular',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'