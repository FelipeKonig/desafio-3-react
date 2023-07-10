import { PostProps } from '../../../../@types/post'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { PostDescription, PostHeader, PostItem } from './styles'

export function Post({ post }: { post: PostProps }) {
  return (
    <PostItem>
      <PostHeader href={`/post/${post.number}`}>
        <h3>{post.title}</h3>
        <span>
          {formatDistanceToNow(new Date(post.dateCreated), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </PostHeader>
      <PostDescription>{post.content}</PostDescription>
    </PostItem>
  )
}
