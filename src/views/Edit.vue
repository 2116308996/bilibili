<template>
  <div style="position:relative;">
    <user-header headername="编辑资料" backsrc="/userinfo"></user-header>

    <van-uploader :after-read="afterRead" class="imagefile" preview-size="100px"/>

    <div class="image">
        <span>头像</span>    
        <span><img :src="this.userlist.image" alt="" ref="headerimg"></span>
        <span class="iconfont icon-a-10-you"></span>  
    </div>

    <div class="hr"></div>
    <edit-banner left="昵称" :message="userlist.nickname" @myconfirmclick="handleconfirm"></edit-banner>

    <div class="hr"></div>
    <edit-banner left="性别" :message="userlist.sex" @myconfirmclick="handleconfirm"></edit-banner>

    <div class="hr"></div>
    <edit-banner left="出生年月" :message="userlist.birthday" @myconfirmclick="handleconfirm"></edit-banner>

    <div class="hr"></div>
    <edit-banner left="个性签名" :message="userlist.signature" @myconfirmclick="handleconfirm"></edit-banner>
    
    <div class="hr"></div>
    <edit-banner left="学校" :message="userlist.school" @myconfirmclick="handleconfirm"></edit-banner>

    <div class="outto" @click="outto()">退出登录</div>
  </div>
</template>

<script>
import UserHeader from '../components/usercomponent/UserHeader.vue';
import EditBanner from '../components/common/EditBanner.vue';
  export default {
    name:'',
    props:[''],
    data () {
      return {
          userlist:{
              image:'/image/12.jpg',
              nickname:'zhuhui',
              sex:'男',
              birthday:'2001/3/24',
              signature:'想学前端',
              school:'湖南文理学院'
          }
      };
    },

    components: {
        UserHeader,
        EditBanner
    },

    computed: {},

    created() {},

    mounted() {
		this.userlist=this.$store.state.userlist
	},

    methods: {
        outto(){
            this.$store.commit('changeislogin')
            this.$router.push('/home')
        },
        async afterRead(file){
            // const fromdata=new FormData()
            // fromdata.append('file',file.file)
            //const res= await this.$http.post('/update',fromdata)
            //this.userlist.image=res.data.url
            // console.log(file.file.name)
            this.userlist.image='/image/'+file.file.name
            this.$store.commit('changeuserlist',this.userlist)
        },
        handleconfirm(data,left){
            switch(left){
              case '昵称': this.userlist.nickname=data;
              break;
              case '性别': this.userlist.sex=data;
              break;
              case '出生年月': this.userlist.birthday=data;
              break;
              case '个性签名': this.userlist.signature=data;
              break;
              case '学校': this.userlist.school=data;
              break;
            }
            this.$store.commit('changeuserlist',this.userlist)
        }
    }
  }

</script>
<style lang='less' scoped>
  .imagefile{
      position:absolute;
      top: 40px;
      right: 0px;
      height: 60px;
      z-index: 1;
      opacity: 0;
      overflow: hidden;
  }
  .image{
      position: relative;
      height: 60px;
      line-height: 60px;
      background-color: white;
      span:nth-child(3){
         position: absolute;
         right: 10px;
         color: grey;
      }
      span:nth-child(2){
          position: absolute;
          right: 40px;
          top: 5px;
          width: 50px;
          height: 50px;
          overflow: hidden;
          display: block;
          border-radius: 50%;
      }
      span:nth-child(1){
          position: absolute;
          left: 10px;
      }
      img{
          width: 50px;
          height: 50px;
          object-fit: cover;
          object-position: 50% 20%;
      }
  }
  .outto{
      margin-top: 20px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: white;
  }
  .hr{
      width: 96%;
      height:0.5px;
      background-color: gray;
      position: absolute;
      right: 0;
      z-index: 10;
      opacity: 0.6;
  }
</style>