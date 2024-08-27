import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'

export const TechInfoWrapper = styled(Wrapper, {
  color: 'black',
  marginBlock: '4rem',

  '& > div': {
    gap: '5rem',
  },
})

export const Tech = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  width: 'calc(50% - .5rem)',
  gap: '3rem',

  '& > div': {
    display: 'flex',
    flexDirection: 'column',

    p: {
      textAlign: 'justify',
      wordBreak: ` break-all`,
    },
  },

  '& > picture': {
    width: 'fit-content',
  },
})
