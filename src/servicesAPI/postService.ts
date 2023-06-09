import { api } from '../lib/axios'

export async function getPosts() {
  const response = await api.get(
    'repos/rocketseat-education/reactjs-github-blog-challenge/issues',
  )
  return response.data
}

export async function getPostByIssue(number: string) {
  const response = await api.get(
    `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${number}`,
  )
  return response.data
}

export async function filterPostsByContent(content: string) {
  const response = await api.get(
    `https://api.github.com/search/issues?q=${content}repo:rocketseat-education/reactjs-github-blog-challenge`,
  )
  return response.data
}
