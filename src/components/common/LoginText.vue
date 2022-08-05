<template>
  <div>
    <van-field v-model="text" 
    :label="label" 
    :type='type' 
    :placeholder="placeholder"
    :rule="rule"
    />
  </div>
</template>

<script>
  export default {
    name:'',
    props:['label','type','placeholder','rule'],
    data () {
      return {
        text:''
      };
    },

    components: {},

    computed: {},

    created() {},

    mounted() {},

    methods: {
      handleulg(){

          this.$emit('inputChange',this.text)
      
      }
    },

    watch: {
      text(){
        this.handleulg()
      }
    }

  }

</script>
<style lang='less' scoped>

</style>