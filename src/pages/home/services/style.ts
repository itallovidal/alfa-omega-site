import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'

export const ServicesWrapper = styled(Wrapper, {
  color: 'white',

  '& > div': {
    gap: '2rem',
    flexDirection: 'column',
    alignItems: 'center',

    h1: {
      fontSize: '4rem',
      fontWeight: 'normal',
    },
  },
})

export const ServiceList = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '.5rem',
  rowGap: '2rem',
  justifyContent: 'center',

  span: {
    fontSize: '2rem',
    fontWeight: 'normal',
  },

  'div span:nth-child(n + 1):before': {
    content: '•',
    marginInline: '.5rem',
  },

  'div span:first-child:before': {
    content: '',
  },
})
