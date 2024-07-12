export interface UserData {
  username?: string;
  email?: string;
  password?: string;
}

// models.ts

// user.model.ts
export interface UserDataResponse {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
};


export interface AuthResponse {
  user: UserDataResponse;
}


export interface DataResponse {
  data: AuthResponse;
}
