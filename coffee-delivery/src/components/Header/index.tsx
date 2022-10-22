import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import CoffeeLogoImg from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={CoffeeLogoImg} alt="" />
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Salvador-BA
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
