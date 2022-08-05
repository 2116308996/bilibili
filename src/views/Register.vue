<template>
  <div>
    <login-top middleTop="注册bilibili">
       <div slot="right" @click="$router.push('/login')" style="font-size: 13px;">登录</div>
    </login-top>
    <login-text label="姓名" 
    style="margin: 15px 0;" 
    placeholder="请输入姓名" 
    rule="^.{2,16}$" 
    @inputChange="res=> name = res">
    </login-text>

    <login-text label="账号" 
    placeholder="请输入账号" 
    rule="^.{6,16}$" 
    @inputChange="res=> username = res">
    </login-text>

    <login-text label="密码" 
    type="password" 
    placeholder="请输入密码"
    rule="^.{6,16}$"
    @inputChange="res=> password = res">
    </login-text>

    <login-btn btntext="注册"
    @registerSubmit="registerSubmit">
    </login-btn>
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        name:'',
        username:'',
        password:''
      };
    },

    components: {
        LoginTop,
        LoginText,
        LoginBtn
    },

    computed: {},

    created() {},

    mounted() {},

    methods: { 
       registerSubmit(){
         const rue=new RegExp('^.{6,16}$')
         if(/^.{2,8}$/.test(this.name) && rue.test(this.username) && rue.test(this.passworld)){
          //  this.$http.post('/register',{
          //    name:this.name,
          //    username:this.username,
          //    password:this.password
          //  })
           this.$notify({ type: 'success', message: '注册成功' });
         }else{
           this.$notify({ type: 'danger', message: '格式不正确，请重新输入' });
         }
       }
    },

  }

</script>
<style lang='scss' scoped>

</style>