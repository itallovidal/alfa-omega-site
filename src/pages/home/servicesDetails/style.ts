import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'

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
