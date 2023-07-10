import { styled } from 'styled-components'

export const PostItem = styled.div`
  width: 24rem;
  height: 16.25rem;
  margin-top: 2.5rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
`

export const PostHeader = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 0.2rem;
  text-decoration: none;

  h3 {
    width: 15rem;
    height: 4rem;
    color: ${(props) => props.theme['base-title']};
  }
  span {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostDescription = styled.p`
  margin-top: 0.5rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};

  max-height: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;

  // só funciona no Chrome
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`
