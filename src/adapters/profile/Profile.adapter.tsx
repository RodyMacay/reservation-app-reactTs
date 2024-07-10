import { ProfileData, ProfileDataResponse } from "../../models";

export const profileAdapter = (profileData: ProfileDataResponse): ProfileData => ({
  firstName: profileData.firstName,
  lastName: profileData.lastName,
  image: profileData.image,
  url: profileData.url,
  dni: profileData.dni,
  phone: profileData.phone,
  gender: profileData.gender,
  vehiculoModelo: profileData.vehiculoModelo,
  vehiculoPlaca: profileData.vehiculoPlaca
});
