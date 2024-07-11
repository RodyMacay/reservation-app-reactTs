import { UserData, UserDataResponse } from "../../models";



export const userAdapter = (userData: UserData): UserData  => {
    const formatoUser:UserData = {
        username: userData.username,
        email: userData.email,
        password: userData.password
    };

    return formatoUser;
};