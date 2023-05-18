import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { UserCircle } from '@phosphor-icons/react'

import Pokedex from '../../assets/pokedex.png'

export function Header() {
  const [loggedUser, setLoggedUser] = useState('')

  useEffect(() => {
    const storedData = localStorage.getItem('user-info')

    if (storedData) {
      const loggedUserName = JSON.parse(storedData)
      setLoggedUser(loggedUserName.name)
    }
  }, [])

  return (
    <nav className="min-h-24 sticky top-0 z-10 flex flex-wrap items-center justify-center gap-5 bg-blue-800 px-10 py-3 min-[340px]:justify-between">
      <a href="/">
        <img src={Pokedex} className="w-[11rem]"></img>
      </a>
      <div className="flex flex-col items-center gap-1 text-yellow-300">
        <UserCircle size={45} />

        {loggedUser.length > 0 ? (
          <Link to={'/userprofile'}>
            <p className="text-sm font-semibold sm:text-base">{loggedUser}</p>
          </Link>
        ) : (
          <Link to={'/userinfo'}>
            <p className="text-sm font-semibold sm:text-base">Sign In</p>
          </Link>
        )}
      </div>
    </nav>
  )
}
