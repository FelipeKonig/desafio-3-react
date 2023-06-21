import { Post } from './Post'
import { PostLabel, SearchForm, SectionContainer } from './styles'

export function Section() {
  return (
    <SectionContainer>
      <PostLabel>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </PostLabel>
      <SearchForm>
        <input placeholder="Buscar conteúdo"></input>
      </SearchForm>
      <Post />
    </SectionContainer>
  )
}
