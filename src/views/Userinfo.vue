<template>
  <div>
    <user-header headername="账号资料" backsrc="/home"></user-header>
    <div style="height: 150px;overflow: hidden;">
        <img src="/image/1.jpg" alt="" width="100%" style="display:block;">
    </div>
    <user-detail></user-detail>
    <user-message></user-message>
    <copy-right></copy-right>
  </div>
</template>

<script>
import NavBar from '@/components/common/Navbar.vue'
import UserDetail from '../components/usercomponent/UserDetail.vue';
import UserMessage from '../components/usercomponent/UserMessage.vue';
import CopyRight from '../components/usercomponent/CopyRight.vue';
import UserHeader from '../components/usercomponent/UserHeader.vue';
  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {UserDetail,
                NavBar,
                UserMessage,
                CopyRight,
                UserHeader},

    computed: {},

    created() {},

    mounted() {},

    methods: {},

  }

</script>
<style lang='less' scoped>
  
</style>