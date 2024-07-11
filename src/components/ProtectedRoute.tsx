import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';
import { useAuthStore } from "../store";
import { useEffect } from "react";
import { verifyTokenRequest } from "../services";
import { Loading } from "./Loading";
import React from "react";

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading, setLoading, setLogin, setLogout } = useAuthStore();
  const location = useLocation();
  
  const checkLogin = async () => {
    setLoading(true);
    const cookie = Cookies.get('auth');
    console.log('Token from cookie:', cookie); // Mensaje para verificar el token en la cookie
    
    if (!cookie) {
      console.log("No hay token, desautenticando...");
      setLogout(); // Asegúrate de limpiar el estado si no hay token
      setLoading(false);
      return;
    }
  
    try {
      console.log("Verificando token...");
      const res = await verifyTokenRequest(cookie);
      console.log('Verification response:', res);
      if (!res.username) {
        console.log("Token inválido, desautenticando...");
        setLogout(); // Si no hay usuario válido en la respuesta, desautenticar
      } else {
        console.log("Token válido, autenticando...");
        setLogin(cookie, res.username, res || []); // Autenticar y almacenar el usuario
      }
      setLoading(false);
    } catch (error) {
      console.error('Error verificando token:', error); // Mensaje en caso de error de verificación
      setLogout(); // Manejo de errores: desautenticar
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Ejecutando efecto de verificación de login...");
    checkLogin();
  }, []);

  if (isLoading) {
    console.log("Cargando...");
    return <Loading />;
  }
  if (!isAuthenticated && !isLoading) {
    console.log("Redirigiendo a /login...");
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  console.log("Autenticado, mostrando Outlet...");
  return <Outlet />;
};
