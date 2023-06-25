import {
  ArrowSquareUpRight,
  GithubLogo,
  Buildings,
  Users,
} from 'phosphor-react'
import { Bio, Card, Description, Info, Name, ProfileContainer } from './styles'
import { ProfileProps } from '../../../@types/profile'

export function Profile({ user }: { user: ProfileProps }) {
  console.log('Profile user', user)
  console.log(user.imgUrl)
  console.log(user.name)
  console.log(user.githubUrl)
  console.log(user.bio)
  console.log(user.username)
  console.log(user.company)
  console.log(user.followers)
  return (
    <Card>
      <ProfileContainer>
        <img src={user.imgUrl} alt=""></img>
        <Description>
          <Name>
            <h2>{user.name}</h2>
            <a href={user.githubUrl}>
              Github <ArrowSquareUpRight size={12} />
            </a>
          </Name>
          <Bio>{user.bio}</Bio>
          <Info>
            <span>
              <GithubLogo size={18} />
              <p>{user.username}</p>
            </span>
            <span>
              <Buildings size={18} />
              <p>{user.company}</p>
            </span>
            <span>
              <Users size={18} />
              <p>{user.followers}</p>
            </span>
          </Info>
        </Description>
      </ProfileContainer>
    </Card>
  )
}
