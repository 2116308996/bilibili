<template>
  <div>
    <login-top middleTop="登录bilibili">
        <div slot="right" @click="$router.push('/register')" style="font-size: 13px;">注册</div>
    </login-top>
    

    <login-text label="账号" 
    placeholder="请输入账号" 
    style="margin: 15px 0;" 
    rule="^.{6,16}$" 
    @inputChange="res=> this.username = res">
    </login-text>

    <login-text label="密码" 
    type="password" 
    placeholder="请输入密码"
    rule="^.{6,16}$"
    @inputChange="res=> this.password = res">
    </login-text>

    <login-btn btntext="登录"
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
          username:"",
		  password:""
      };
    },

    components: {LoginBtn,LoginText,LoginTop},

    computed: {},

    created() {},

    mounted() {},

    methods: {
        registerSubmit(){
           const rue=new RegExp('^.{6,16}$')
         if( rue.test(this.username) && rue.test(this.passworld)){
          //  this.$http.post('/login',{
          //    name:this.name,
          //    username:this.username,
          //    password:this.password
          //  })
           this.$notify({ type: 'success', message: '登录成功' });
           this.$store.commit('changeislogin')
           this.$router.push('/home')
           
         }else{
			 console.log(this.username,this.passworld)
           this.$notify({ type: 'danger', message: '账号或密码错误' });
         }
        }
    },

  }

</script>
<style lang='less' scoped>

</style>