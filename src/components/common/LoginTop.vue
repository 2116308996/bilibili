<template>
  <div>
    <div class="logintop">
        <div></div>
        <div>{{middleTop}}</div>
        <div>
          <slot name="right"></slot>
        </div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:['middleTop'],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    created() {},

    mounted() {},

    methods: {},

  }

</script>
<style lang='less' scoped>
    .logintop{
        height: 45px;
        background-color: white;
        display: flex;
        justify-content: center;
        div{
            flex: 1;
            text-align: center;
            line-height: 45px;
            font-size: 4.267vw;
        }
    }
</style>