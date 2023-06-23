import styled from 'styled-components'

export const PostContainer = styled.article`
  display: block;
  margin: 0 auto;
  max-width: 54rem;
  padding: 1rem;
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4.5rem;
  width: 100%;
  padding: 2.5rem 2rem;
  gap: 1.5rem;
`

export const Text = styled.text`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  color: ${(props) => props.theme['base-text']};
  line-height: 160%;
`
export const Code = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  padding: 1rem;
  gap: 0.5rem;
  border-radius: 2px;
  background: var(--base-post, #112131);
`
