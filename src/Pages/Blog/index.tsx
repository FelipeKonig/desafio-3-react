import { useParams } from 'react-router-dom'

import { BlogContainer } from './styles'
import { Profile } from './Profile'
import { Section } from './Section'
import { useCallback, useEffect, useState } from 'react'
import { ProfileProps } from '../../@types/profile'
import { getUser } from '../../servicesAPI/userService'

export function Blog() {
  const [profile, setProfile] = useState<ProfileProps>()
  const { user } = useParams()

  const fetchUser = useCallback(async (user: String) => {
    setProfile(await getUser(user))
  }, [])

  useEffect(() => {
    fetchUser(user || '')
  }, [fetchUser, user])

  return (
    <BlogContainer>
      {profile && (
        <>
          <Profile user={profile} />
          <Section />
        </>
      )}
    </BlogContainer>
  )
}
