import { useCallback, useEffect, useState } from 'react'
import { Post } from './Post'
import {
  PostContainer,
  PostLabel,
  SearchForm,
  SectionContainer,
} from './styles'
import { PostProps } from '../../../@types/post'
import {
  filterPostsByContent,
  getPosts,
} from '../../../servicesAPI/postService'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface PostsProps {
  totalCount: number
  listPosts: PostProps[]
}

const getContentFormSchema = z.object({
  content: z.string(),
})

type GetContentFormInput = z.infer<typeof getContentFormSchema>

export function Section() {
  const [posts, setPosts] = useState<PostsProps>()
  const { register, handleSubmit } = useForm<GetContentFormInput>({
    resolver: zodResolver(getContentFormSchema),
  })

  const fetchPosts = useCallback(async () => {
    const data = await getPosts()
    updatePosts(data)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  function handleGetContent(data: GetContentFormInput) {
    getPostsByContent(data.content)
  }

  async function getPostsByContent(content: string) {
    const data = await filterPostsByContent(content)
    updatePosts(data.items)
  }

  function updatePosts(data: any[]) {
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
  }

  return (
    <SectionContainer>
      {posts && (
        <>
          <PostLabel>
            <h3>Publicações</h3>
            <span>{posts.totalCount} publicações</span>
          </PostLabel>
          <SearchForm onSubmit={handleSubmit(handleGetContent)}>
            <input
              type="text"
              placeholder="Buscar conteúdo"
              {...register('content')}
              onBlur={handleSubmit(handleGetContent)}
            />
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
