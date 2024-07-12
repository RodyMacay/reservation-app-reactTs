import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../store';

export const HeaderReservation = () => {
  const authStore = useAuthStore();
  const logout = authStore.setLogout;
  const navigate = useNavigate();
  const user = authStore.roles ? authStore.roles.username : 'Guest';

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirige a la página de inicio de sesión después del logout
  };

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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-gray-800 dark:text-gray-200"
        >
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
          <path d="M12 3v6"></path>
        </svg>
        <h1 className="text-lg font-medium text-gray-800 dark:text-gray-200">Parqueo</h1>
      </div>
      <div className="flex items-center gap-4">
      <Link to="/add_reservation">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
            Arduino
          </button>
        </Link>
        <Link to="/add_reservation">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
            Reservar parqueo
          </button>
        </Link>
        <Link to="/profile">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
            {user}
          </button>
        </Link>
        <button
          onClick={handleLogout}
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
        >
          Logout
        </button>
      </div>
    </header>
  );
};
