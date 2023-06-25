import { useParams } from 'react-router-dom'

import { BlogContainer } from './styles'
import { Profile } from './Profile'
import { Section } from './Section'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { ProfileProps } from '../../@types/profile'

export function Blog() {
  const [profile, setProfile] = useState<ProfileProps>()
  const { user } = useParams()

  const fetchUser = useCallback(async (user: String) => {
    const response = await api.get(`users/${user}`)
    const data = response.data
    console.log(data)

    const newProfile: ProfileProps = {
      imgUrl: data.avatar_url,
      name: data.name || '',
      githubUrl: data.html_url,
      bio: data.bio || '',
      username: data.login || '',
      company: data.company || '',
      followers: data.followers || 0,
    }

    setProfile(newProfile)
  }, [])

  useEffect(() => {
    fetchUser(user || '')
  }, [fetchUser, user])

  return (
    <BlogContainer>
      {profile && <Profile user={profile} />}
      <Section />
    </BlogContainer>
  )
}
