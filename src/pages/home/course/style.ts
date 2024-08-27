import { styled } from '../../../styles/theme.ts'
import { Wrapper } from '../../../styles'
import coursebg from '../../../assets/background_couse.png'

export const CourseWrapper = styled(Wrapper, {
  color: 'white',
  backgroundImage: `url(${coursebg}) !important`,
  backgroundSize: 'contain !important',
  backgroundRepeat: 'no-repeat !important',
  backgroundPositionX: 'right !important',

  '& > div': {
    flexDirection: 'column',

    p: {
      marginBottom: '1rem',
      maxWidth: '64ch',
    },
  },
})
