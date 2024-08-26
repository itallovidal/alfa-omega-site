import { styled } from '../../styles'

export const Wrapper = styled('footer', {
  width: '100%',
  padding: '1rem',
  background: 'white',

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
})

export const AddressWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '& > div': {
    marginBlock: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
})

export const ContactWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignItems: 'flex-end',
  color: 'black',
})
