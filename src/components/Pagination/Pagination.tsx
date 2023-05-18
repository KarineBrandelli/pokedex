import { useContext } from 'react'

import { AppContext } from '../../context/AppContext'

interface PaginationProps {
  setHidden: boolean
}

export function Pagination({ setHidden }: PaginationProps) {
  const { limit, offset, setOffset } = useContext(AppContext)

  return (
    <div className={setHidden ? 'mx-auto w-[85%] text-lg font-bold' : 'hidden'}>
      <div className="flex justify-center pb-10">
        <button
          onClick={() => setOffset(offset - limit)}
          className="rounded-l-xl border-[1px] border-white bg-blue-800 py-3 px-5 text-white transition duration-300 ease-out hover:bg-blue-600"
        >
          Previous
        </button>
        <button
          onClick={() => setOffset(offset + limit)}
          className="rounded-r-xl border-[1px] border-white bg-blue-800 py-3 px-5 text-white transition  duration-300 ease-out hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  )
}
