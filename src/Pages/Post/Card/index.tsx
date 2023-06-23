import {
  ArrowSquareUpRight,
  Calendar,
  CaretLeft,
  GithubLogo,
  ChatCircle,
} from 'phosphor-react'

import { CardContainer, Options, Title, Info } from './styles'

export function Card() {
  return (
    <CardContainer>
      <Options>
        <a href="">
          <CaretLeft size={12} /> voltar
        </a>
        <a href="">
          ver no github <ArrowSquareUpRight size={12} />
        </a>
      </Options>
      <Title>JavaScript data types and data structures</Title>
      <Info>
        <span>
          <GithubLogo weight="fill" size={18} />
          <p>cameronwll</p>
        </span>
        <span>
          <Calendar weight="fill" size={18} />
          <p>Há 1 dia</p>
        </span>
        <span>
          <ChatCircle weight="fill" size={18} />
          <p>5 comentários</p>
        </span>
      </Info>
    </CardContainer>
  )
}
