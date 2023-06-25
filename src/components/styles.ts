import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme['base-profile']};
  height: 18.5rem;
`
export const ImgWrapper = styled.img`
  display: flex;
  justify-content: center;
`

export const Logo = styled.img`
  display: flex;
  align-items: center;
  top: 4rem;
  width: 33.3%;
  max-width: 9.25rem;
`

interface EffectProps {
  side?: 'right'
}

export const Effect = styled.img<EffectProps>`
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
  object-fit: contain;
  width: 33.3%;
  max-width: 23.2rem;

  ${(props) =>
    props.side === 'right' &&
    css`
      align-items: flex-end;
      transform: scaleX(-1);
    `}
`
