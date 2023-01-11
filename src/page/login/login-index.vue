<template>
  <div>
    <van-nav-bar title="ROGCL电台"></van-nav-bar>
    <h5 class="title">
      LOGIN
    </h5>
    <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">提交</van-button>
  </div>
  <div style="margin-top:30px;text-align:center;color: #2a2a2a;">
    <span @click="pushRegister" class="noneCount">没有账户吗，点击去注册</span>
  </div>
  <!-- 游客登录 -->
  <div style="margin:20px 163px">
    <van-button type="primary" @click="jourly" >游客登录</van-button>
  </div>

</van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '', //用户名
      password: '', //密码
    };
  },
  methods: {
    //提交
    onSubmit() {
      this.$http.post("/dj/program/toplist?limit=10",{}).then((res)=>{
        console.log(res)
      })
    },
    //推送到注册界面
    pushRegister(){
      this.$router.push('/register')
    },
    //游客登陆
    jourly(){
     this.$router.push('/home')
    }
  },
};
</script>

<style scoped>
.title{
  font-size: .48rem;
  text-align: center;
  margin-top: .5333rem;
  margin-bottom: .6667rem;
}
.noneCount{
  font-size: .32rem;
  cursor: pointer;
}
.noneCount:hover{
  color: #2ab5a1;
}
</style>
<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
body{
  width: 100%;
  height: 100%;
  background: #d6d8de;
  
}
</style>