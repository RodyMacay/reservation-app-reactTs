import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProfile, createVehicle } from '../../../services';
import { useAuthStore } from '../../../store/authStore';


interface FormValues {
  firstName: string;
  lastName: string;
  image: File | null;
  dni: string;
  phone: string;
  gender: string;
  modelo: string; // Cambiado de vehiculoModelo a modelo
  placa: string; // Cambiado de vehiculoPlaca a placa
}

export const FormUserProfile = () => {
  const navigate = useNavigate();
  const authStore = useAuthStore();
  const [formData, setFormData] = useState<FormValues>({
    firstName: '',
    lastName: '',
    image: null,
    dni: '',
    phone: '',
    gender: '',
    modelo: '',
    placa: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const authId = authStore.token;
    if (!authId) {
      console.error('No hay un ID de usuario autenticado');
      return;
    }
  
    const { firstName, lastName, dni, phone, gender, image, modelo, placa } = formData;
  
    try {
      if (!image) {
        console.error('Debe seleccionar una imagen de perfil');
        return;
      }
  
      const profileData = new FormData();
      profileData.append('firstName', firstName);
      profileData.append('lastName', lastName);
      profileData.append('dni', dni);
      profileData.append('phone', phone);
      profileData.append('gender', gender);
      profileData.append('image', image);

      // Crear perfil primero
      const profileResponse = await createProfile(profileData, authId);
      console.log('Perfil creado exitosamente:', profileResponse);
  
      // Luego, crear vehículo
      const vehicleData = {
        modelo,
        placa,
      };
      console.log(vehicleData)
  
      const vehicleResponse = await createVehicle(vehicleData, authId); // Llama a tu función de servicio para crear vehículo
      console.log('Vehículo creado exitosamente:', vehicleResponse);
  
      navigate('/profile');
    } catch (error) {
      console.error('Error al crear perfil o vehículo:', error);
      // Manejar el error adecuadamente
    }
  };

  return (
    <>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <label htmlFor="first-name" className="text-sm font-medium leading-none">
            Nombre
          </label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            placeholder="Ingrese su nombre"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="last-name" className="text-sm font-medium leading-none">
            Apellido
          </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            placeholder="Ingrese su apellido"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="profile-image" className="text-sm font-medium leading-none">
            Imagen de Perfil
          </label>
          <input
            type="file"
            id="profile-image"
            accept="image/*"
            name="image"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="document-number" className="text-sm font-medium leading-none">
            Número de Documento (DNI)
          </label>
          <input
            type="text"
            id="document-number"
            name="dni"
            value={formData.dni}
            onChange={handleInputChange}
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            placeholder="Ingrese su DNI"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="phone" className="text-sm font-medium leading-none">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            placeholder="Ingrese su teléfono"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="gender" className="text-sm font-medium leading-none">
            Género
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <option value="Mujer">Mujer</option>
            <option value="Hombre">Hombre</option>
            <option value="other">Otro</option>
          </select>
        </div>
        <div className="grid gap-2">
          <label htmlFor="vehicle-model" className="text-sm font-medium leading-none">
            Modelo del Vehículo
          </label>
          <input
            type="text"
            id="vehicle-model"
            name="modelo"
            value={formData.modelo}
            onChange={handleInputChange}
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            placeholder="Ingrese el modelo del vehículo"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="vehicle-license-plate" className="text-sm font-medium leading-none">
            Placa del Vehículo
          </label>
          <input
            type="text"
            id="vehicle-license-plate"
            name="placa"
            value={formData.placa}
            onChange={handleInputChange}
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            placeholder="Ingrese la placa del vehículo"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
        >
          Guardar Perfil
        </button>
      </form>
    </>
  );
};
