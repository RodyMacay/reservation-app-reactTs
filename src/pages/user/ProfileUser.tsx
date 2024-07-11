import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { getProfileById } from '../../services/';
import { ProfileData } from "../../models";
import { useAuthStore } from "../../store/authStore"; // Ajusta la ruta según la ubicación de tu store

// Define el tipo para el perfil
interface Profile {
  firstName: string;
  lastName: string;
  dni: string;
  phone: string;
  gender: string;
  vehiculoModelo: string;
  vehiculoPlaca: string;
  image: string; // Agrega el campo de la imagen
  // Agrega más campos según sea necesario
}

export const ProfileUser = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const { token } = useAuthStore(); // Obtén el estado de usuario desde el store
  const navigate = useNavigate(); // Hook para manejar la navegación

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const fetchedProfile = await getProfileById(token);
        console.log(fetchedProfile);
        setProfile(fetchedProfile);

        // Si no se encuentra un perfil, redirigir a la página de edición
        if (!fetchedProfile) {
          navigate('/edit_profile');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        // Manejar el error adecuadamente en tu aplicación
        navigate('/edit_profile'); // Redirige si hay un error al obtener el perfil
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token, navigate]); // Se ejecutará nuevamente cuando token o navigate cambien

  const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-center">
      <span className="text-2xl mr-4">{icon}</span>
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
        <p className="text-lg font-medium text-gray-800 dark:text-white">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br bg-gray-500-600 via-pink-500 to-red-500 p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          {/* Sidebar */}
          <div className="md:w-1/3 bg-gray-100 dark:bg-gray-700 p-8">
            {profile && profile.profile ? (
              <div className="text-center">
                <img 
                  src={profile.profile.url} 
                  alt="Profile" 
                  className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-lg"
                />
                <h2 className="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
                  {profile.profile.firstName} {profile.profile.lastName}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">{profile.profile.dni}</p>
                <Link to='/edit_profile'>
                  <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1">
                    Editar perfil
                  </button>
                </Link>
                <Link to='/'>
                  <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1">
                    Regresar
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
              </div>
            )}
          </div>
  
          {/* Main Content */}
          <div className="md:w-2/3 p-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Información Personal</h3>
            {profile && profile.profile ? (
              <div className="space-y-4">
                <InfoItem icon="📱" label="Teléfono" value={profile.profile.phone} />
                <InfoItem icon="⚧" label="Género" value={profile.profile.gender} />
                
                <div className="mt-8">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="mr-2">🚗</span> Vehículos
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {profile.vehiculos.map((vehicle, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow">
                        <p className="text-gray-800 dark:text-gray-200">
                          <span className="font-semibold">Modelo:</span> {vehicle.modelo}
                        </p>
                        <p className="text-gray-800 dark:text-gray-200">
                          <span className="font-semibold">Placa:</span> {vehicle.placa}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
                <div>
              <p className="text-gray-600 dark:text-gray-300">Cargando información...</p>
              <Link to='/edit_profile'>
                  <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1">
                    Editar perfil
                  </button>
                </Link>
                <Link to='/'>
                  <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1">
                    Atras
                  </button>
                </Link>

                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
