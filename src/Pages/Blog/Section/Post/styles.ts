import { styled } from 'styled-components'

export const PostContainer = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  gap: 2rem;
`

export const PostItem = styled.div`
  width: 24rem;
  height: 16.25rem;
  margin-top: 2.5rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
`

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 0.2rem;

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

  &:hover {
    overflow: overlay;
  }
`
