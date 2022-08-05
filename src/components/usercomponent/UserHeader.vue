<template>
    <div class="userheader">
      <span></span>
      <span class="iconfont icon-a-9-zuo " @click="handlesrc()"></span>
      <span>{{headername}}</span>
    </div>
</template>

<script>

  export default {
    name:'',
    props:['headername','backsrc'],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    created() {},

    mounted() {},

    methods: {
        handlesrc(){
            this.$router.push(this.backsrc)
        }
    },

  }

</script>
<style lang='less' scoped>
  .userheader{
    background-color: #FB7299;
    height: 40px;
    line-height: 40px;
    color: white;
    span:nth-child(1){
      margin-left:20px;
    }
    span:nth-child(3){
      margin-left:15px;
    }
  }
</style>