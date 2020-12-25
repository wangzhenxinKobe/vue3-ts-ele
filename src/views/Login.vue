/** * @author kobe *@date 2020/12/18 下午3:56 */
<template>
  <div class="login-wrap">
    <div>
      <el-button type="primary" @click="test()">测试</el-button>
      <p>{{ nowTime }}</p>
      <button @click="getNowTime">显示时间</button>
    </div>
    <div>
      <suspense>
        <template #default>
          <girl-show />
        </template>
        <template #fallback>
          <h1>loading...</h1>
        </template>
      </suspense>
    </div>
    <div class="login_wrap">
      <el-card
        class="box-card"
        style="width: 350px;height: 350px;position: absolute;z-index: 10;top: 0;bottom: 0;right: 10px;margin: auto;"
      >
        <p style="display: flex;align-items: center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABGCAYAAACJ4ts2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFwmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wMy0zMVQxODo0OTozNCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMy0zMVQxODo0OTozNCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDMtMzFUMTg6NDk6MzQrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZGU4Zjg0OTYtM2E2Mi1jNTQ0LTk5NjktM2FkMTU1NTJiNzhiIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YmFkNjRiMTktMDk3My1hZjQ1LTgzNTUtOWNk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"
            alt=""
          />
          <span style="font-size: 18px;font-weight: bold;margin-left: -40px">
            业务支撑系
          </span>
        </p>
        <el-form
          :ref="userForm"
          class="demo-ruleForm"
          :model="loginInfo"
          :rules="ruleCustom"
        >
          <el-form-item label="" prop="username">
            <el-input
              prefix-icon="el-icon-user"
              v-model="loginInfo.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              prefix-icon="el-icon-lock"
              v-model="loginInfo.password"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <div
            style="display: flex;align-items: center;justify-content: space-between;"
          >
            <el-form-item label="" prop="verifyCode">
              <el-input
                prefix-icon="el-icon-check"
                v-model="loginInfo.verifyCode"
                style="width: 200px;"
                placeholder="请输入验证码"
              ></el-input>
            </el-form-item>
            <img
              style="margin-bottom: 24px;width: 100px; "
              :src="codeImgSrc"
              alt=""
              @click="getVerifyCode"
            />
          </div>
          <el-button
            type="primary"
            :loading="loginLoading"
            style="width: 100%;"
            @click="btnLogin()"
            >{{ loginBtnText }}</el-button
          >
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, nextTick, onMounted } from "vue";
import { LoginVerifyCode, LoginSuccess } from "@/commom/js/api";
import { ElLoading } from "element-plus";
import { nowTime, getNowTime } from "@/hooks/useNowTime";
import GirlShow from "@/components/GirlShow.vue";

export default defineComponent({
  name: "Login",
  components: {
    GirlShow
  },
  data() {
    return {
      ruleCustom: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        verifyCode: [
          { required: true, message: "验证码不能为空", trigger: "blur" }
        ]
      }
    };
  },
  setup() {
    let refs = "";
    const userForm = (el: string) => {
      refs = el;
    };
    const loginBtnText = ref("登录");
    const loginLoading = ref(false);
    const codeImgSrc = ref("");
    const verifyCodeKey = ref("");
    const loginInfo = reactive({ username: "", password: "", verifyCode: "" });

    /**
     * @description: 获取验证码
     * @author kobe
     * @date 2020/12/18 下午4:05
     */
    const getVerifyCode = async () => {
      const params: any = {};
      const { content, verifyCodeKey: V } = await LoginVerifyCode(params);
      codeImgSrc.value = content;
      verifyCodeKey.value = V;
    };
    /**
     * @description: 登录接口
     * @author kobe
     * @date 2020/12/18 下午4:09
     */
    function btnLogin() {
      nextTick(() => {
        (refs as any).validate((valid: boolean) => {
          const time = new Date().getTime();
          const sha512 = require("js-sha512").sha512;
          const pw = sha512(
            loginInfo.username + "&" + loginInfo.password + ":winabc"
          );
          const params = {
            timeStamp: time,
            userName: loginInfo.username.toLowerCase(),
            pwd: sha512(pw + time),
            verifyCode: loginInfo.verifyCode,
            verifyCodeKey: verifyCodeKey.value
          };
          if (valid) {
            LoginSuccess(params).then((res: any) => {
              console.log(res);
              localStorage.setItem("WINABC-TOKEN", res.authentication);
              // const data = res.data
            });
          }
        });
      });
    }
    const test = () => {
      console.log("lll");
      ElLoading.service({ fullscreen: true });
      setTimeout(() => {
        ElLoading.service().close();
      }, 2000);
    };
    onMounted(() => {
      getVerifyCode();
    });
    return {
      loginBtnText,
      loginLoading,
      codeImgSrc,
      loginInfo,
      getVerifyCode,
      btnLogin,
      userForm,
      test,
      nowTime,
      getNowTime
    };
  }
});
</script>

<style>
.login-wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login_wrap {
  width: 1200px;
  height: 750px;
  background: url("../assets/img/login-bg.png") no-repeat center center;
  background-size: 100% 100%;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.2);
  position: relative;
}
</style>
