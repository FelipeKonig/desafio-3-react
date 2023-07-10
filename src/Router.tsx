import { Route, Routes } from 'react-router'
import { DefaultLayout } from './layouts/defaultLayout'
import { Blog } from './Pages/Blog'
import { Post } from './Pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path=":user" element={<Blog />} />
        <Route path="post/:number" element={<Post />} />
      </Route>
    </Routes>
  )
}
