<template>
  <div>
      <van-nav-bar title="ROGCL电台" left-text="返回" left-arrow @click-left="backLogin"></van-nav-bar>
    <h5 class="title">register</h5>
    <van-form>
    <!-- 输入任意文本 -->
    <van-field v-model="nickname" label="昵称" :rules="[{required:true,message:'请填写昵称'}]"/>
<!-- 输入手机号，调起手机号键盘 -->
<van-field v-model="tel" type="tel" label="手机号" :rules="[{required:true,message:'请填写手机号'}]"/>
<!-- 输入密码 -->
<van-field v-model="password" type="password" label="密码" :rules="[{required:true,message:'请填写密码'}]"/>
<van-field
  v-model="phone"
  center
  clearable
  label="短信验证码"
  placeholder="请输入短信验证码"
>
  <template #button>
    <van-button size="small" type="primary" @click="submitSms">发送验证码</van-button>
  </template>
</van-field>
<div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" @click="submitForm">提交</van-button>
  </div>
    </van-form>

  </div>
</template>

<script>
export default {
data(){
  return{
      tel: '', //电话
      nickname: '', //昵称
      password: '', //密码
      phone:"", //获取验证码
      smsTrue:"", //后端返的正确的验证码,用于进行校验
  }
},
methods:{
  //返回登录页
  backLogin(){
    this.$router.back()
  },
  //发送验证码
  submitSms(){
    this.$http.get("/captcha/sent",{
      phone:this.tel
    }).then((res)=>{
      console.log(res)
    })
  },
  //校验验证码
  verify(){
     this.$http.post("/captcha/verify",{
      phone:this.tel,
      captcha:this.phone
     }).then((res)=>{
      console.log(res)
     })
  },
  //提交表单(此处需要校验验证码是否正确)
  submitForm(){
  },
}
}
</script>

<style scoped>
.title{
  font-size: .48rem;
  text-align: center;
  margin-top: .5333rem;
  margin-bottom: .6667rem;
}
</style>