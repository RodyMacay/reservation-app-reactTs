import { Credentials, UserData } from '../../models';

export const credentialsAdapter = (credentials: Credentials): { email: string; password: string } => {
    return {
      email: credentials.email,
      password: credentials.password,
    };
  };