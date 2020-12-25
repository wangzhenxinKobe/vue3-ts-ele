/**
 * @author kobe
 * @date 2020/12/18 下午6:47
 */
import { get, post, url } from "./http"; // 导入请求方式

// 获取登录验证码
export const LoginVerifyCode = (p: any) => {
  const result = get(url + "/user-account/verifyCode", p).then(res => {
    return res.data.data;
  });
  return result;
};

// 登录
export const LoginSuccess = (p: any) => {
  const result = post(url + "/user-account/login", p).then(res => {
    return res.data.data;
  });
  return result;
};
