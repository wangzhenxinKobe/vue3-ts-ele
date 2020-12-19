/**
 * @author kobe
 * @date 2020/12/18 下午3:56
*/
module.exports = {
  outputDir: "deploy",
  devServer: {
    open: process.platform === "darwin",
    host: "127.0.0.1",
    port: "9999",
    https: false,
    hot: true,
    disableHostCheck: false,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
    // 设置代理
    /*proxy: {
        '/proxy': {
            target: 'https://api-5.cticloud.cn', //对应自己的接口
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/proxy': ''
            }
        },
        'winabc/api/v2': {
            target: 'http://172.18.11.177:9090', //对应自己的接口
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/api': ''
            }
        },
    }*/
  }
};
