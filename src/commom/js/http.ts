/**
 * @author kobe
 * @date 2020/12/19 下午2:48
 */

import axios from "axios";
import baseUrl from "./baseUrl";
import { ElMessage } from "element-plus";
// 配置请求域名
axios.defaults.baseURL = baseUrl;

// 超时时间
axios.defaults.timeout = 10000;

// 设置Content-Type类型
axios.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";

//http请求拦截器
axios.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    (ElMessage as any).error("加载超时");
    return Promise.reject(error);
  }
);

// http响应拦截器
axios.interceptors.response.use(
  (data: any) => {
    if (data.data.code && data.data.code !== 200) {
      if (data.data.msg !== "") {
        (ElMessage as any).error(data.data.msg);
      }
      return Promise.reject("返回响应错误信息");
    }
    return data;
  },
  (error: any) => {
    (ElMessage as any).error("网络不给力呀！请稍候再试");
    return Promise.reject(error);
  }
);

export default class CourseAxios {
  public options: any;
  constructor(options: any = {}) {
    this.options = options;
  }

  request(options: {}) {
    return axios.request(options);
  }

  get(url: string, options = {}) {
    return this.request({
      url,
      params: {
        ...options
      }
    });
  }

  post(url: string, data: {}, options = {}) {
    if (data instanceof Object) {
      data = JSON.stringify(data);
    }
    return this.request({
      method: "post",
      url,
      data,
      ...options
    });
  }
}

const instanceAxios = new CourseAxios();
export const request = instanceAxios.request.bind(instanceAxios);
export const get = instanceAxios.get.bind(instanceAxios);
export const post = instanceAxios.post.bind(instanceAxios);
export const url = "omo2.0/api"; // 接口公共地址
