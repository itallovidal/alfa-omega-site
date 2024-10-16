import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'

export const TeamWrapper = styled(Wrapper, {})

export const TeamGrid = styled('div', {
  display: 'grid !important',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '.2fr 1fr 1fr',
  gridGap: '2rem',

  '@mobile': {
    gridTemplateColumns: '1fr',
    gridTemplateRows: '.2fr 1fr 1fr',
    gridGap: '1rem',
  },
})

export const TeamHeader = styled('div', {
  gridColumn: '1/2',
  gridRow: '1/2',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
})

export const TeamCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '& > picture': {
    display: 'block',
    width: '100%',
    height: '100%',
    maxHeight: '30rem',
    flex: 1,
  },

  '& > picture > img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
  },

  '& > div': {
    padding: '2rem',
    backgroundColor: 'black',
  },

  '& > div > *': {
    color: 'white',
  },
})
