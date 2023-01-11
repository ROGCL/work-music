<template>
  <div>
    <van-sticky>
      <van-nav-bar title="ROGCL电台" left-text="返回" left-arrow @click-left="backLogin"></van-nav-bar>
    </van-sticky>
  </div>
</template>

<script>
export default {
data(){
    return{

    }
},
methods:{
//返回登录页
  backLogin(){
    this.$router.back()
  },
}
}
</script>

<style>

</style>