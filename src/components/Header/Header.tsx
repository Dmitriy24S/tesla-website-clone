import { useEffect, useRef, useState } from 'react'
import { GrClose } from 'react-icons/gr'
import styled from 'styled-components'

const menuProductLinks = [
  {
    url: '#',
    text: 'Model S',
  },
  {
    url: '#',
    text: 'Model 3',
  },
  {
    url: '#',
    text: 'Model X',
  },
  {
    url: '#',
    text: 'Model Y',
  },
  {
    url: '#',
    text: 'Solar Roof',
  },
  {
    url: '#',
    text: 'Solar Panels',
  },
  {
    url: '#',
    text: 'Powerwall',
  },
]

const desktopNavLinks = [
  {
    url: '#',
    text: 'Shop',
  },
  {
    url: '#',
    text: 'Account',
  },
]

const menuLinks = [
  {
    url: '#',
    text: 'Used Inventory',
  },
  {
    url: '#',
    text: 'Trade-In',
  },
  {
    url: '#',
    text: 'Demo Drive',
  },
  {
    url: '#',
    text: 'Insurance',
  },
  {
    url: '#',
    text: 'Fleet',
  },
  {
    url: '#',
    text: 'Commercial Energy',
  },
  {
    url: '#',
    text: 'Utilities',
  },
  {
    url: '#',
    text: 'Careers',
  },
  {
    url: '#',
    text: 'Find Us',
  },
  {
    url: '#',
    text: 'Events',
  },
  {
    url: '#',
    text: 'Support',
  },
  {
    url: '#',
    text: 'Shop',
  },
  {
    url: '#',
    text: 'Account',
  },
]

const Header = () => {
  const [isSidebarMenuOpen, setIsSiderbarMenuOpen] = useState(false)

  useEffect(() => {
    if (isSidebarMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '15px'
      // document.body.style.overflowY = 'overlay'
      // document.body.style.position = 'fixed'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
  }, [isSidebarMenuOpen])

  const ref = useRef(null)

  const handleOutsideClick = (e: Event) => {
    console.log('handleOutsideClick - click')
    console.log('handleOutsideClick - ref.current', ref.current)
    console.log('handleOutsideClick- e.target', e.target) // <button class="sc-gKfoOY OGEXI">Menu</button>
    if ((e.target as HTMLElement).textContent === 'Menu') {
      return
    }

    if (
      ref.current !== null &&
      !(ref.current as HTMLElement).contains(e.target as HTMLElement)
    ) {
      setIsSiderbarMenuOpen(false)
      console.log('handleOutsideClick - close sidebar')
    }
  }

  useEffect(() => {
    if (isSidebarMenuOpen) {
      document.addEventListener('click', handleOutsideClick)
    } else {
      document.removeEventListener('click', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isSidebarMenuOpen])

  return (
    <>
      <Wrapper>
        <LogoContainer>
          <Logo src='./assets/images/logo.svg' alt='Tesla' />
        </LogoContainer>

        {/* Desktop Menu - Center Links  */}
        <MenuLarge>
          <List>
            {menuProductLinks.map((link) => (
              <ListItem key={link.text}>
                <a href={link.url}>{link.text}</a>
              </ListItem>
            ))}
          </List>
        </MenuLarge>
        {/* Desktop Menu - Right Links & Menu */}
        <RightMenuContainer>
          <MenuLarge>
            <List
            // style={{
            //   justifyContent: 'flex-end',
            // }}
            >
              {desktopNavLinks.map((link) => (
                <ListItem key={link.text}>
                  <a href={link.url}>{link.text}</a>
                </ListItem>
              ))}
            </List>
          </MenuLarge>
          <MenuToggleButton onClick={() => setIsSiderbarMenuOpen(!isSidebarMenuOpen)}>
            Menu
          </MenuToggleButton>
        </RightMenuContainer>

        {/* Sidebar Menu */}
        {isSidebarMenuOpen && (
          <>
            <Backdrop />
            <MenuSidebar ref={ref}>
              <CloseMenuButton
                type='button'
                aria-label='close menu'
                onClick={() => setIsSiderbarMenuOpen(!isSidebarMenuOpen)}
              >
                <GrClose />
              </CloseMenuButton>
              <List>
                {menuProductLinks.map((link) => (
                  <ListItem key={link.text}>
                    <a href={link.url}>{link.text}</a>
                  </ListItem>
                ))}
              </List>
              <List>
                {menuLinks.map((link) => (
                  <ListItem key={link.text}>
                    <a href={link.url}>{link.text}</a>
                  </ListItem>
                ))}
              </List>
            </MenuSidebar>
          </>
        )}
      </Wrapper>
    </>
  )
}

export default Header

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`

const Wrapper = styled.header`
  position: sticky;
  top: 1.4rem;
  z-index: 10;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  height: 0px;
  overflow: visible;
  gap: 2rem;
`

const Logo = styled.img`
  height: 20px;
`

const LogoContainer = styled.div`
  display: flex;
  height: 15px;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  text-align: start;
  flex: 1;

  @media (min-width: 1100px) {
    flex-direction: row;
    align-items: center;
    gap: 0;
  }
`

const ListItem = styled.li`
  /* margin-left: 20px; */
  font-weight: 500;
  color: #313131;
  /* width: 100%; */
  min-width: fit-content;
  a {
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    transition: background-color 120ms ease-out;
    &:hover,
    &:focus-visible {
      background-color: #ebebeb;
    }
    @media (min-width: 1100px) {
      padding: 0 10px;
      &:hover,
      &:focus-visible {
        background-color: unset;
      }
    }
  }
`

const MenuLarge = styled.div`
  display: none;
  @media (min-width: 1100px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* gap: 2rem; */
    background-color: transparent;
    /* margin-left: auto; */
  }
`

const MenuSidebar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  position: fixed;
  z-index: 100;
  right: 0;
  top: 0;
  height: 100vh;
  background-color: whitesmoke;
  padding: 2rem;
  padding-top: 4rem;
  /* min-width: 250px; */
  width: 250px;
  /* overflow-y: auto; */
  overflow-y: overlay;
  @media (min-width: 1100px) {
    /* display: none; */
  }
  ul {
    flex-direction: column;
    align-items: flex-start;
  }
  li {
    width: 100%;
  }
  a {
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    transition: background-color 120ms ease-out;
    &:hover,
    &:focus-visible {
      background-color: #ebebeb;
    }
    @media (min-width: 1100px) {
      /* padding: 0 10px;
      &:hover,
      &:focus-visible {
        background-color: unset;
      } */
    }
  }
`

const RightMenuContainer = styled.div`
  display: flex;
  align-items: center;
`

const MenuToggleButton = styled.button`
  font-weight: 500;
  padding: 0px 10px;
  @media (min-width: 1100px) {
    /* display: none; */
  }
`

const CloseMenuButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 2rem;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 120ms ease-out;
  &:hover,
  &:focus-visible {
    background-color: #ebebeb;
  }
`
