/**
 * @author kobe
 * @date 2020/12/18 下午6:35
*/
let baseUrl: any;
switch (process.env.NODE_ENV) {
  case "development":
    baseUrl = "http://172.18.11.177:8081";
    break;
  case "alpha":
    baseUrl = "http://172.18.11.177:9090";
    break;
  case "production":
    baseUrl = "https://oapi.winabc.com";
    break;
}

export default baseUrl;
