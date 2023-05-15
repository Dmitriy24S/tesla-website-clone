import { useState } from 'react'
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

const menuLinks = [
  {
    url: '#',
    text: 'Shop',
  },
  {
    url: '#',
    text: 'Account',
  },
  {
    url: '#',
    text: 'Menu',
  },
]

const Header = () => {
  const [isSidebarMenuOpen, setIsSiderbarMenuOpen] = useState(false)

  return (
    <Wrapper>
      <LogoContainer>
        {/* <Logo src='./assets/images/logo.svg' alt='Tesla' /> */}
        <svg viewBox='0 0 342 35' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z'
            fill='currentColor'
          ></path>
        </svg>
      </LogoContainer>

      {/* Desktop Menu */}
      <MenuLarge>
        <List>
          {menuProductLinks.map((link) => (
            <ListItem key={link.text}>
              <a href={link.url}>{link.text}</a>
            </ListItem>
          ))}
        </List>
      </MenuLarge>
      <MenuLarge>
        <List
          style={{
            justifyContent: 'flex-end',
          }}
        >
          {menuLinks.map((link) => (
            <ListItem key={link.text}>
              <a href={link.url}>{link.text}</a>
            </ListItem>
          ))}
        </List>
      </MenuLarge>

      {/* Mobile Sidebar Menu */}
      {isSidebarMenuOpen && (
        <MenuSidebar>
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
      )}
      <MenuToggleButton onClick={() => setIsSiderbarMenuOpen(!isSidebarMenuOpen)}>
        Menu
      </MenuToggleButton>
    </Wrapper>
  )
}

export default Header

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

// const Logo = styled.img`
//   height: 25px;
// `

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
    gap: 2rem;
    background-color: transparent;
    margin-left: auto;
  }
`

const MenuSidebar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  background-color: whitesmoke;
  padding: 2rem;
  padding-top: 4rem;
  min-width: 250px;
  @media (min-width: 1100px) {
    display: none;
  }
`

const MenuToggleButton = styled.button`
  font-weight: 500;
  @media (min-width: 1100px) {
    display: none;
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
