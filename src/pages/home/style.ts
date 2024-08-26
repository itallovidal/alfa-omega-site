import { styled } from '../../styles/theme.ts'

export const Wrapper = styled('section', {
  width: '100%',
  padding: '5rem',

  variants: {
    background: {
      white: {
        background: 'white',
      },
      black: {
        background: 'black',
      },
    },
  },

  defaultVariants: {
    background: 'white',
  },

  '& > div': {
    maxWidth: '68.75rem',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
})

export const AboutWrapper = styled(Wrapper, {})

export const BoxWrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
})

export const ServicesWrapper = styled(Wrapper, {
  '& > div': {
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center',
  },
})

export const ServiceBox = styled('div', {
  backgroundColor: 'black',
  padding: '1.4rem',
  color: 'white',

  width: 'calc(50% - .5rem)',

  h2: {
    fontSize: '2rem',
    fontWeight: 'normal',
  },

  p: {
    marginBlock: '1.4rem',
    lineHeight: '1.6rem',
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
