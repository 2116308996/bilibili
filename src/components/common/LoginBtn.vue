<template>
  <div class="btnparent" @click="registerClick">
    <div class="loginbtn">{{btntext}}</div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:['btntext'],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    created() {},

    mounted() {},

    methods: {
        registerClick(){
            this.$emit('registerSubmit')
        }
    },

  }

</script>
<style lang='less' scoped>
    .btnparent{
    padding: 15px 10px;
    }
    .loginbtn{
        background-color: #ff9db5;
        height: 45px;
        color: white;
        text-align: center;
        line-height: 45px;
        border-radius: 22.5px;
        font-size: 16px;
    }
</style>