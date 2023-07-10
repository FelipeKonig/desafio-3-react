import { useCallback, useEffect, useState } from 'react'
import { Post } from './Post'
import {
  PostContainer,
  PostLabel,
  SearchForm,
  SectionContainer,
} from './styles'
import { PostProps } from '../../../@types/post'
import { getPosts } from '../../../servicesAPI/postService'

interface PostsProps {
  totalCount: number
  listPosts: PostProps[]
}

export function Section() {
  const [posts, setPosts] = useState<PostsProps>()

  const fetchPosts = useCallback(async () => {
    const data = await getPosts()

    const newPosts: PostsProps = {
      totalCount: data.length,
      listPosts: [],
    }

    data.forEach((item: any) => {
      const newPost: PostProps = {
        id: item.id,
        number: item.number,
        userName: item.user.login,
        title: item.title,
        dateCreated: item.created_at,
        content: item.body,
        commentsCount: item.comments,
      }
      newPosts.listPosts.push(newPost)
    })

    setPosts(newPosts)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <SectionContainer>
      {posts && (
        <>
          <PostLabel>
            <h3>Publicações</h3>
            <span>{posts.totalCount} publicações</span>
          </PostLabel>
          <SearchForm>
            <input placeholder="Buscar conteúdo"></input>
          </SearchForm>
          <PostContainer>
            {posts.listPosts.map((post: PostProps) => {
              return <Post post={post} key={post.id} />
            })}
          </PostContainer>
        </>
      )}
    </SectionContainer>
  )
}
