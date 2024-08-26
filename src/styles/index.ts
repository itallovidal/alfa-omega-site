import { globalCss, styled } from './theme.ts'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  a: {
    textDecoration: 'none',
  },

  '*:link, *:active': {
    textDecoration: 'none',
  },

  main: {
    opacity: 0,
    transform: 'translateY(100px)',
    // animation: `${show} 500ms forwards`
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto Serif',
    fontWeight: 400,
  },

  picture: {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',

    img: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  },
})

export const Button = styled('button', {
  width: 'fit-content',
  padding: '1rem',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'all 0.3s',

  variants: {
    variantType: {
      dark: {
        background: 'black',
        color: 'white',

        '&:hover': {
          background: 'white',
          color: 'black',
        },
      },
      light: {
        background: 'white',
        color: 'black',

        '&:hover': {
          background: 'black',
          color: 'white',
        },
      },
    },
  },

  defaultVariants: {
    variantType: 'dark',
  },
})
