import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'

export const BoxWrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',

  '@mobile': {
    flexDirection: 'column',
  },
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

  '@mobile': {
    width: '100%',
  },

  p: {
    marginBlock: '1.4rem',
  },
})
