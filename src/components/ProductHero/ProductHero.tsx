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
      <TopSection>
        <ProductTitle>{title}</ProductTitle>
      </TopSection>
      <BottomSection>
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
    </Container>
  )
}

export default ProductHero

const Container = styled.section<{ bgImage: string }>`
  position: relative;
  scroll-snap-align: start;
  background-image: ${(props) => `url('./assets/images/${props.bgImage}')`};
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 500px;
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
  top: 80%;
  height: 0px;
  overflow: visible;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
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
  color: dimgray;
  font-weight: 600;
  opacity: 0.75;
`
/* ${baseButtonStyle} */

const ButtonSecondary = styled(ButtonBase)`
  background-color: black;
  color: whitesmoke;
  opacity: 0.75;
`

const TopSection = styled.div`
  position: relative;
  height: 50%;
  padding: 2rem;
`

const BottomSection = styled.div`
  position: relative;
  height: 50%;
  padding: 5rem 0;
`
