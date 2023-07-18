<template>
	<div>
	  <van-cell-group inset>
	    <van-field v-model="name" label="用户名" placeholder="请输入用户名" />
	  </van-cell-group>
		<div>
			子组件{{name}}
		</div>
	</div>
</template>

<script>
	export default {
	  name:'',
	  props:['name'],
	  data () {
	    return {
	        name:""
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

<style>
</style>