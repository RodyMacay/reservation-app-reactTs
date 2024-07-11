import { create } from 'zustand';
import { UserDataResponse } from '../models';
import Cookies from 'js-cookie';

type State = {
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserDataResponse | null;
  roles: string[];
  errors: string[];
};

type Actions = {
  setLogin: (token: string, user: UserDataResponse, roles: string[]) => void; // Incluye roles en setLogin
  setLogout: () => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | string[]) => void;
};

// Crea el store de Zustand para la autenticación
export const useAuthStore = create<State & Actions>((set) => ({
  token: Cookies.get('auth') || '',
  isAuthenticated: false,
  isLoading: false,
  user: null,
  roles: [],
  errors: [],
  setLogin: (token, user, roles) => { // Actualiza setLogin para recibir roles
    console.log(`[Auth Store] Logging in with token: ${token}`);
    console.log(`[Auth Store] User data:`, user);
    console.log(`[Auth Store] User data:`, roles);
    Cookies.set('auth', token);
    set({ token, isAuthenticated: true, user, roles }); // Almacena los roles junto con otros datos del usuario
  },
  setLogout: () => {
    console.log(`[Auth Store] Logging out`);
    Cookies.remove('auth');
    set({ token: '', isAuthenticated: false, user: null, roles: [] });
  },
  setLoading: (isLoading) => {
    console.log(`[Auth Store] Setting loading state: ${isLoading}`);
    set({ isLoading });
  },
  setError: (error) => {
    console.error(`[Auth Store] Setting error:`, error);
    set({ errors: Array.isArray(error) ? error : [error] });
  },
}));