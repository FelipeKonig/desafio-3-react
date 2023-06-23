import { styled } from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 11rem;
`

export const PostLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  span {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const SearchForm = styled.form`
  display: block;
  margin-top: 2em;

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.75rem 1rem;
    gap: 8px;

    width: 100%;
    height: 50px;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    color: ${(props) => props.theme['base-text']};

    &:focus {
      background: ${(props) => props.theme['base-input']};
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`
