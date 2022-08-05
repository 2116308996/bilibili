<template>
  <div class="navbar">
    <div class="img" v-if="$store.state.islogin" @click="$router.push('/userinfo')">
        <img :src="this.$store.state.userlist.image" alt="" >
    </div>
    <div class="imgno" v-if="!$store.state.islogin" @click="$router.push('/login')">
          登录
    </div>
    <div class="search" @click="$router.push('/search')">
        <span class="iconfont icon-icon-18 " style="margin-left: 10px;font-size: 12px;"></span>
         {{this.searchtext}}
    </div>
    <div class="buy" @click="$router.push('/gamestore')">
        <span class="center iconfont icon-icon-4 " ></span>
    </div>
    <div class="message" @click="$router.push('message')">
        <span class="center iconfont icon-icon-1 " ></span>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
        value:'',
		searchtext:'危机合约'
      };
    },

    components: {},

    computed: {},

    created() {},

    mounted() {
     
    },

    methods: {},

  }

</script>
<style lang='less' scoped>
  .navbar{
      background-color: #fb7299;
      height: 45px;
      width: 100%;
      div{
          float: left;
      }
      .img{
          width: 35px;
          height: 35px;
          border-radius: 50%;
          overflow: hidden;
          margin: 5px 20px;
          img{
          width: 35px;
          height: 35px;
          object-fit: cover;
          object-position: 50% 20%;
      }
      }
      .imgno{
        width: 35px;
          height: 35px;
          border-radius: 50%;
          margin: 5px 20px;
          background-color: gray;
          line-height: 35px;
          font-size: 12px;
          text-align: center;
      }
      .search{
          width: calc(100% - 75px - 20px - 40px - 50px);
          height: 25px;
          margin: 10px 10px;
          line-height: 25px;
          background-color: #E7E7E7;
          color: gray;
          opacity: 0.5;
          border-radius: 12.5px;
      }
      .buy{
          width: 30px;
          margin: 0 5px;
          text-align: center;
          height: 45px;
          line-height: 45px;
      }
      .message{
         width: 30px;
         margin: 0 5px;
         margin-right: 15px;
         text-align: center;
         height: 45px;
         line-height: 45px;
      }
  }
  .center{
      font-size: 20px;
      color: white;
      text-align: center;
  }
</style>