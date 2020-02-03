import http from "../utils/request";
let baseURL;

// console.log( process.env.NODE_ENV)

// 环境的切换
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3000/api";
} else if (process.env.NODE_ENV === "production") {
  baseURL = ""; // 后台接口
}

export { baseURL, http };