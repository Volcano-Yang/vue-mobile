import { baseURL, http } from "./base";

export const getUserInfo = (params) => {        
  return http.get(`${baseURL}/user`, {            
    params
  });    
};