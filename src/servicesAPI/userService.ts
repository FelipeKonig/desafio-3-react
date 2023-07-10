import { ProfileProps } from '../@types/profile'
import { api } from '../lib/axios'

export async function getUser(user: String) {
  console.log(user)
  const response = await api.get(`users/${user}`)
  const data = response.data

  const newProfile: ProfileProps = {
    imgUrl: data.avatar_url,
    name: data.name,
    githubUrl: data.html_url,
    bio: data.bio,
    username: data.login,
    company: data.company,
    followers: data.followers,
  }

  return newProfile
}
