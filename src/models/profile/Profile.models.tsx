export interface Vehicle {
  modelo : string;
  placa : string
}
export interface ProfileData {
    firstName?: string;
    lastName?: string;
    image?: string;
    url?: string;
    dni?: string;
    phone?: string;
    gender?: string;
    vehiculoModelo: Vehicle['modelo'];
    vehiculoPlaca: Vehicle['placa'];    
  }
  

  export interface ProfileDataResponse extends ProfileData {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
  }