import { styled } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 2rem;
  padding-right: 2rem;
  margin: -4rem auto;
  width: 100%;
  min-height: 13.25rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export const Options = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  margin-top: -2rem;
  font-weight: bold;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    border: 0;
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const Title = styled.p`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  margin-top: 1.5rem;
  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  span {
    margin-top: 1.5rem;
    display: inline-flex;
    gap: 0.5rem;

    color: ${(props) => props.theme['base-span']};
  }

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
