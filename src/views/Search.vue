<template>
	<div>
		<div>
			<van-search 
			v-model="value" 
			shape="round" 
			show-action
			background="#fb7299"
			placeholder="请输入搜索关键词"
			@search="onSearch"
			@cancel="onCancel"/>
		</div>
		<div>
			<p>b站热搜</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		props: [''],
		data() {
			return {
               value:''
			}
		},
		components: {},
		mounted() {

		},
		methods: {
			onSearch(val){
				 this.$toast(val)
			},
			onCancel(){
				
			}
		},
	}
</script>

<style lang="less" scoped="">
	.van-search__action{
		color: white;
		margin: 0 10px;
	}
</style>
