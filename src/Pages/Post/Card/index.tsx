import {
  ArrowSquareUpRight,
  Calendar,
  CaretLeft,
  GithubLogo,
  ChatCircle,
} from 'phosphor-react'

import { CardContainer, Options, Title, Info } from './styles'
import { PostProps } from '../../../@types/post'
import { useCallback, useEffect, useState } from 'react'
import { ProfileProps } from '../../../@types/profile'
import { getUser } from '../../../servicesAPI/userService'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Card({ post }: { post: PostProps }) {
  const [user, setUser] = useState<ProfileProps>()

  const fetchUser = useCallback(async (userName: String) => {
    setUser(await getUser(userName))
  }, [])

  useEffect(() => {
    fetchUser(post.userName || '')
  }, [fetchUser, post.userName])

  return (
    <CardContainer>
      {user && (
        <>
          <Options>
            <a href={`/${user.username}`}>
              <CaretLeft size={16} /> voltar
            </a>
            <a href={user.githubUrl} target="_blank" rel="noreferrer">
              ver no github <ArrowSquareUpRight size={16} />
            </a>
          </Options>
          <Title>{post.title}</Title>
          <Info>
            <span>
              <GithubLogo weight="fill" size={18} />
              <p>{user.username}</p>
            </span>
            <span>
              <Calendar weight="fill" size={18} />
              <p>
                {formatDistanceToNow(new Date(post.dateCreated), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </p>
            </span>
            <span>
              <ChatCircle weight="fill" size={18} />
              <p>{post.commentsCount}</p>
            </span>
          </Info>
        </>
      )}
    </CardContainer>
  )
}
