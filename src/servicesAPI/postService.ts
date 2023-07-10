import { api } from '../lib/axios'

export async function getPosts() {
  const response = await api.get(
    // 'search/issues?q=repo:rocketseat-education/reactjs-github-blog-challenge',
    'repos/rocketseat-education/reactjs-github-blog-challenge/issues',
  )
  return response.data
}
