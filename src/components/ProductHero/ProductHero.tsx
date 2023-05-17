import { InView } from 'react-intersection-observer'
import styled from 'styled-components'

interface Props {
  title: string
  image: string
  isCar: boolean
  lastItem: boolean
}

const ProductHero = ({ title, image, isCar, lastItem }: Props) => {
  return (
    <Container bgImage={image}>
      {/* Top section */}
      <InView
        rootMargin='-200px 0px -500px'
        onChange={(inView, entry) => {
          const entryEl = entry.target as HTMLElement
          console.log('Inview:', inView, 'entry', entry)
          if (inView) {
            // console.log(entry.target, 'set opacity 1')
            entryEl.style.opacity = '1'
          } else {
            // console.log(entry.target, 'set opacity 0')
            entryEl.style.opacity = '0'
          }
        }}
      >
        {({
          ref,
          // inView,
          // entry
        }) => (
          <TopSection ref={ref}>
            <ProductTitle>{title}</ProductTitle>
          </TopSection>
        )}
      </InView>
      {/* Bottom section */}
      <InView
        rootMargin='-600px 0px -200px'
        onChange={(inView, entry) => {
          const entryEl = entry.target as HTMLElement
          console.log('Inview:', inView, 'entry', entry)
          if (inView) {
            // console.log(entry.target, 'set opacity 1')
            entryEl.style.opacity = '1'
          } else {
            // console.log(entry.target, 'set opacity 0')
            entryEl.style.opacity = '0'
          }
        }}
      >
        {({
          ref,
          // inView,
          // entry
        }) => (
          <BottomSection ref={ref}>
            <ButtonContainer>
              {!lastItem ? (
                <>
                  <ButtonPrimary>Order Now</ButtonPrimary>
                  <ButtonSecondary>{isCar ? 'Demo Drive' : 'More Info'}</ButtonSecondary>
                </>
              ) : (
                <ButtonSecondary style={{ opacity: 1 }}>More Info</ButtonSecondary>
              )}
            </ButtonContainer>
          </BottomSection>
        )}
      </InView>
    </Container>
  )
}

export default ProductHero

const Container = styled.section<{ bgImage: string }>`
  position: relative;
  scroll-snap-align: start;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 500px;
  scroll-snap-align: start;
`

const ProductTitle = styled.h2`
  position: sticky;
  top: 5rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: 1.8rem;
  height: 0px;
  overflow: visible;
  z-index: 5;
`

const ButtonContainer = styled.div`
  position: sticky;
  height: 0px;
  overflow: visible;
  z-index: 5;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  top: 80%;
  /* top: 50%; */
  /* @media (min-width: 600px) {
    top: 80%;
  } */
`

const ButtonBase = styled.button`
  padding: 0.5em 0.7rem;
  min-width: 180px;
  border-radius: 4px;
`

// const baseButtonStyle = css`
//   padding: 0.5em 0.7rem;
//   min-width: 180px;
//   border-radius: 4px;
// `

const ButtonPrimary = styled(ButtonBase)`
  background-color: white;
  color: #464545;
  font-weight: 600;
  opacity: 0.75;
  transition: opacity 100ms ease-out;
  &:hover,
  &:focus-visible {
    opacity: 0.85;
  }
`
/* ${baseButtonStyle} */

const ButtonSecondary = styled(ButtonBase)`
  background-color: black;
  color: whitesmoke;
  opacity: 0.75;
  transition: opacity 100ms ease-out;
  &:hover,
  &:focus-visible {
    opacity: 0.7;
  }
`

const TopSection = styled.div`
  position: relative;
  height: 50%;
  padding: 2rem;
  transition: opacity 700ms ease-in-out;
`

const BottomSection = styled.div`
  position: relative;
  height: 50%;
  padding: 5rem 0 10rem;
  transition: opacity 700ms ease-in-out;
  @media (min-width: 600px) {
    padding: 5rem 0;
  }
`
