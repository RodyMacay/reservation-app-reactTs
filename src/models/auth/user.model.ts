export interface UserData {
  username?: string;
  email?: string;
  password?: string;
}

// models.ts

// user.model.ts
export interface UserDataResponse {
  id: string;
  username: string;
  email: string;
  password?: string; // Hacer opcional si no se devuelve en la respuesta
  profile: {
    id: string | null; // Puede ser null según el ejemplo de la API
    // Otros campos del perfil si los hubiera
  } | null;
  jwt?: string; // Añadir jwt aquí
  roles: string[]
}

export interface AuthResponse {
  user: UserDataResponse;
}


export interface DataResponse {
  data: AuthResponse;
}
