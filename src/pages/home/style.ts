import { styled } from '../../styles'

export const AboutWrapper = styled('section', {
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
})

export const AboutDetails = styled('div', {
  color: 'white',
  padding: '2rem',

  h1: {
    fontSize: '4rem',
    fontWeight: 'normal',
  },

  p: {
    fontSize: '1.2rem',
    lineHeight: '2rem',
  },
})

export const ProfileWrapper = styled('div', {
  minWidth: '40%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  span: {
    marginBlock: '1rem',
    fontSize: '2rem',
    color: 'white',
  },
})
