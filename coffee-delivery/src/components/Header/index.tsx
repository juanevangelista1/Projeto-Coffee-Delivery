import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import CoffeeLogoImg from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={CoffeeLogoImg} alt="" />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Salvador-BA
          </HeaderButton>
          <NavLink to="/completeorder">
            <HeaderButton variant="yellow">
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
