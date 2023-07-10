import { useParams } from 'react-router'
import { Card } from './Card'
import { Content, PostContainer } from './styles'
import { useCallback, useEffect, useState } from 'react'
import { getPostByIssue } from '../../servicesAPI/postService'
import { PostProps } from '../../@types/post'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

export function Post() {
  const [post, setPost] = useState<PostProps>()
  const { number } = useParams()

  const getPost = useCallback(async () => {
    if (number !== undefined) {
      const data = await getPostByIssue(number)

      const newPost: PostProps = {
        id: data.id,
        number: data.number,
        userName: data.user.login,
        title: data.title,
        dateCreated: data.created_at,
        content: data.body,
        commentsCount: data.comments,
      }
      setPost(newPost)
    }
  }, [number])
  useEffect(() => {
    getPost()
    document.title = `GitHub Blog | Post ${number}`
  }, [getPost, number])

  return (
    <PostContainer>
      {post && (
        <>
          <Card post={post} />
          <Content>
            <ReactMarkdown
              // eslint-disable-next-line react/no-children-prop
              children={post.content}
              remarkPlugins={[remarkGfm]}
            />
          </Content>
        </>
      )}
    </PostContainer>
  )
}
