import { ProfileData, ProfileDataResponse, DataResponse } from "../../models";
import { profileAdapter } from "../../adapters";
import { instanceReact } from '../../config'
export const createProfile = async (profileData: FormData, token: string): Promise<any> => {
  try {
    const response = await instanceReact.post('/profile', profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data', // Asegúrate de establecer el tipo de contenido correcto para enviar archivos
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating profile:', error);
    throw error;
  }
};
export const createVehicle = async (data: any, token: string): Promise<any> => {
  try {
    const response = await instanceReact.post('/vehiculo', data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', // Asegúrate de establecer el tipo de contenido correcto si no estás enviando archivos
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error creating vehicle:', error);
    throw error;
  }
};
export const getAllProfiles = async (): Promise<ProfileData[]> => {
  try {
    const response = await instanceReact.get("/profiles");
    const profilesData: ProfileDataResponse[] = response.data;
    return profilesData.map(profileAdapter);
  } catch (error) {
    console.error("Error fetching profiles:", error);
    throw error;
  }
};

export const getProfileById = async (token: string): Promise<ProfileData> => {
  try {
    const response = await instanceReact.get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data', // Asegúrate de establecer el tipo de contenido correcto para enviar archivos
      },
    });
    const profileData: ProfileDataResponse = response.data;
    console.log(profileData)
    return profileData
  } catch (error) {
    console.error(`Error fetching profile with ID`, error);
    throw error;
  }
};

export const updateProfile = async (id: number, profileData: ProfileData): Promise<ProfileData> => {
  try {
    const response = await instanceReact.patch(`/profiles/${id}`, profileData);
    const updatedProfileData: ProfileDataResponse = response.data;
    return profileAdapter(updatedProfileData);
  } catch (error) {
    console.error(`Error updating profile with ID ${id}:`, error);
    throw error;
  }
};

export const deleteProfile = async (id: number): Promise<void> => {
  try {
    await instanceReact.delete(`/profiles/${id}`);
  } catch (error) {
    console.error(`Error deleting profile with ID ${id}:`, error);
    throw error;
  }
};