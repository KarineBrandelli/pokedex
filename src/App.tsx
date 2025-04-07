import { clarity } from 'clarity-js'
import { useEffect } from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import { UserInfo } from './pages/UserInfo'
import { UserProfile } from './pages/UserProfile'

export function App() {
  useEffect(() => {
    clarity.consent()

    clarity.set('user_id', '25051995')
    clarity.set('user_email', 'karinebrandelli@live.com')
    clarity.set('user_name', 'karine')

    clarity.start({
      projectId: 'r0hcyguxdv',
      upload: 'https://m.clarity.ms/collect',
      track: true,
      content: true,
      cookies: ['user_id', 'user_email', 'user_name', 'user_organization'],
    })

    return () => {
      clarity.stop()
    }
  }, [])

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </HashRouter>
    </>
  )
}
