
import { Credentials, UserData, DataResponse, AuthResponse, UserDataResponse } from "../../models";
import { credentialsAdapter, userAdapter } from "../../adapters";
import {instanceReact, instanceDJ} from "../../config/axiosConfig";



export const Register = async (userData: UserData): Promise<DataResponse> => {
    return await instanceReact.post(`/auth/signup`, userAdapter(userData));
};

export const Login = async (credentials: Credentials): Promise<UserDataResponse> => {
    try {
      const adaptedCredentials = credentialsAdapter(credentials);
      const response = await instanceReact.post<UserDataResponse>("/auth/login", adaptedCredentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const Logout = async (): Promise<void> => await instanceReact.get(`/auth/logout`);

export const verifyTokenRequest = async (token: string): Promise<{ username: UserDataResponse }> => {
  try {
    const response = await instanceReact.get('/auth/check-status', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error verifying token:', error);
    throw error;
  }
};


