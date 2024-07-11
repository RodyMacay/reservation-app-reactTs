import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Login } from '../../services'; 
import { useAuthStore } from '../../store';
import { AuthFooter, AuthHeader, Cart, FormAuth } from './components';
import { Credentials } from '../../models';
import { Message } from '../../components';
import Cookies from 'js-cookie';

export const LoginPage = () => {
  const { setLogin, setLoading, isAuthenticated, errors, setError } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data: Credentials) => {
    setLoading(true);
    try {
      const user = await Login(data);
      console.log('Respuesta de la API:', user);
  
      if (user) {
        console.log('Token recibido:', user.jwt);
        Cookies.set('auth', user.jwt, { sameSite: 'none', secure: true }); // Guardar token en las cookies
        setLogin(user.jwt, user);
        console.log("usuario",user) // Actualiza el estado de autenticación en el Zustand
        console.log('Usuario autenticado, redirigiendo...');
        navigate(from, { replace: true }); // Redirige al usuario a la página anterior luego del login exitoso
      } else {
        console.error("No se recibió un usuario válido en la respuesta de la API");
        setError("Error de autenticación");
      }
    } catch (error: any) {
      console.error("Error al iniciar sesión:", error);
      setError("Error de autenticación");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log('Usuario ya autenticado, redirigiendo...');
      navigate(from, { replace: true }); // Redirige al inicio si está autenticado
    }
  }, [isAuthenticated, navigate, from]);

  return (
    <Cart>
      <AuthHeader />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {errors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <FormAuth onSubmit={onSubmit} buttonText="Login" />
        <AuthFooter isLogin="Login" />
      </div>
    </Cart>
  );
};
