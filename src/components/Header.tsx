import logo from '../assets/logo.svg'
import effect from '../assets/effect.png'

import { Effect, HeaderContainer, Logo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Effect src={effect} />
      <Logo src={logo} alt="" />
      <Effect src={effect} side="right" />
    </HeaderContainer>
  )
}
