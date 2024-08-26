import { styled } from '../../styles/theme.ts'

export const WrapperDesktop = styled('div', {
  width: '100%',
  padding: '1rem',
  background: 'black',

  '& > div': {
    maxWidth: '68.75rem',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
  },

  picture: {
    width: '4.4rem',
  },

  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',

    a: {
      color: 'white',
    },
  },
})
