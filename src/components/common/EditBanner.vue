<template>
  <div class="text">
    <span>{{left}}</span>
    <span>
        <a href="javascript:;">{{message}}</a>
    </span>
    <span class="iconfont icon-a-10-you" @click="handlemess()"></span>

    <van-dialog v-model="show" :title="left" 
    show-cancel-button @confirm="confirmclick()">
      <van-field v-model="value" input-align="center" 
      :placeholder="'请输入'+left" />
    </van-dialog>

    <van-dialog v-model="sexshow" :title="left" show-cancel-button 
    @confirm="confirmclick()">
      <van-radio-group v-model="value" direction="horizontal" 
      style="margin: 0 auto;width: 120px;">
        <van-radio name="男">男</van-radio>
        <van-radio name="女">女</van-radio>
      </van-radio-group>
    </van-dialog>
  
    <van-dialog v-model="birthshow" :title="left" 
    show-cancel-button @confirm="confirmclick()">
      <input type="date" v-model="value" style="display: block; margin: 0 auto;"/>
    </van-dialog>

  </div>
</template>

<script>
import {ref} from 'vue'
  export default {
    name:'',
    props:['left','message'],
    data () {
      return {
        show:false,
        sexshow:false,
        birthshow:false,
        value:'',
      };
    },
    components: {},

    computed: {},

    created() {},

    mounted() {},

    methods: {
        handlemess(){
          if(this.left=='性别'){
            this.sexshow=true
          }else if(this.left=='出生年月'){
            this.birthshow=true
          }
          else{
            this.show=true
          }
          
        },
        confirmclick(){
          this.$emit("myconfirmclick",this.value,this.left)
        }
    },

  }

</script>
<style lang='less' scoped>
  .text{
      background-color: white;
      position: relative;
      height: 45px;
      line-height: 45px;
      span:nth-child(3){
         position: absolute;
         right: 10px;
         color: grey;
      }
      span:nth-child(2) a{
          position: absolute;
          right: 40px;
          color: grey;
          font-size: 14px;
          overflow:hidden;
          width: 100px;
          text-align: right;
				/* 不换行 */
			    white-space: nowrap;
				/* 溢出则添加省略号 */
				text-overflow: ellipsis;
      }
      span:nth-child(1){
          position: absolute;
          left: 10px;
      }
  }
</style>