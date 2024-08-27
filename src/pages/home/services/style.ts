import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'

export const ServicesWrapper = styled(Wrapper, {
  color: 'white',

  '& > div': {
    flexDirection: 'column',
    alignItems: 'center',

    '@mobile': {
      paddingBlock: '2rem',
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

  '@mobile': {
    justifyContent: 'flex-start',
    padding: '1rem',
    span: {
      fontSize: '1.4rem',
      fontWeight: 'normal',
    },

    div: {
      display: 'flex',
      flexDirection: 'column',
    },

    'div span:first-child:before': {
      content: '•',
    },
  },
})
