import axios from "axios";
import router from "../router/index";
import { Message } from "element-ui";

const http = axios.create({
  timeout: 5000,
  withCredentials: true
});

// 设置头文件
http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

// 请求拦截 鉴权
http.interceptors.request.use((config) => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = window.sessionStorage.getItem("token");
    token && (config.headers.Authorization = token); // 如果token错误, 后台返回403 || 401
    return config;
  },
  error => Promise.error(error));

// 响应拦截 判断结果
http.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 304) {
      return Promise.resolve(response);
    }
    return Promise.reject(response);
  },
  // 其他情况
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          router.replace({
            path: "/login",
            query: {
              redirect: router.currentRoute.fullPath,
            },
          });
          break;
          // 403 token过期
          // 登录过期对用户进行提示
          // 清除本地token
          // 跳转登录页面
        case 403:
          Message({
            message: "登录过期，请重新登录",
            duration: 1000
          });
          // 清除token
          sessionStorage.removeItem("token");
          store.commit("loginSuccess", null);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: "/login",
              query: {
                redirect: router.currentRoute.fullPath,
              },
            });
          }, 1000);
          break;
          // 404请求不存在
        case 404:
          Message({
            message: "资源不存在",
            duration: 1500
          });
          break;
        case 500:
          Message({
            message: "服务器内部错误",
            duration: 1500
          });
          break;
          // 其他错误，直接抛出错误提示
        default:
          Message({
            message: error.response.data.message || error.response.data || "请求失败",
            duration: 1500
          });
      }
      return Promise.reject(error.response);
    }
  }
);

export default http;
