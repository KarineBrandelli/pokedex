import { Route, Routes, HashRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import { UserInfo } from './pages/UserInfo'
import { UserProfile } from './pages/UserProfile'

export function App() {
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
