import {
  ArrowSquareUpRight,
  GithubLogo,
  Buildings,
  Users,
} from 'phosphor-react'
import Avatar from '../../assets/avatar.png'
import {
  Bio,
  BlogContainer,
  Description,
  Info,
  Name,
  Profile,
  ProfileContainer,
} from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile>
        <ProfileContainer>
          <img src={Avatar} alt=""></img>
          <Description>
            <Name>
              <h2>Cameron Williamson</h2>
              <a href="">
                Github <ArrowSquareUpRight size={12} />
              </a>
            </Name>
            <Bio>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </Bio>
            <Info>
              <span>
                <GithubLogo size={18} />
                <p>cameronwll</p>
              </span>
              <span>
                <Buildings size={18} />
                <p>Rocketseat</p>
              </span>
              <span>
                <Users size={18} />
                <p>32 seguidores</p>
              </span>
            </Info>
          </Description>
        </ProfileContainer>
      </Profile>
    </BlogContainer>
  )
}
