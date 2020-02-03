import { baseURL, http } from "./base";
import qs from "querystring";

export const login = (data) => {
  return http.post(
    `${baseURL}/login`,
    qs.stringify(data) // 序列化参数
  );
};

export const register = (data) => {
  return http.post(
    `${baseURL}/register`,
    qs.stringify(data) // 序列化参数
  );
};