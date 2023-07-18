<template>
  <div>
	<child :name="name" @myevent="handleEvent"></child>
	<div>
		父组件{{name}}
	</div>
  </div>
</template>
<script>
import child from '../components/child.vue'
  export default {
    name:'',
    props:[''],
    data () {
      return {
          name:""
      };
    },

    components: {
		child
	},

    computed: {},

    created() {},

    mounted() {
        console.log(this.$route.params)
    },

    methods: {},

  }

</script>
<style lang='less' scoped>

</style>