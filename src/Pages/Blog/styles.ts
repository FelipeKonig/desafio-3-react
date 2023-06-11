import { styled } from 'styled-components'

export const BlogContainer = styled.article`
  display: flex;
  justify-content: center;
  padding: 1rem;
`

export const Profile = styled.div`
  display: flex;

  margin-top: -4rem;
  width: 100%;
  max-width: 54rem;
  min-height: 13.25rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img {
    border-radius: 8px;
    width: 100%;
    max-width: 9.25rem;
    height: 100%;
    max-height: 10rem;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 2.5rem;
  margin-right: 2rem;
`

export const Description = styled.div`
  display: block;
  width: 70%;
  min-width: 24rem;
`

export const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    border-bottom: none;

    &:hover {
      color: ${(props) => props.theme.blue};
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }

    &:visited {
      color: ${(props) => props.theme.blue};
    }
  }
`

export const Bio = styled.div`
  line-height: 160%;
  margin-top: 1rem;

  color: ${(props) => props.theme['base-text']};
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
  }
`
