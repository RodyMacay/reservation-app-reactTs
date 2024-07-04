import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderReservation = () => {
  return (
<header className="bg-white dark:bg-gray-900 shadow-sm px-4 py-3 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="w-6 h-6 text-gray-800 dark:text-gray-200"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
        <path d="M12 3v6"></path>
      </svg>
      <h1 className="text-lg font-medium text-gray-800 dark:text-gray-200">Parqueo</h1>
    </div>
    <div className="flex items-center gap-4">
    <Link to="/profile">
      <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">Perfil</button>
    </Link>
    </div>
  </header>
  )
}


