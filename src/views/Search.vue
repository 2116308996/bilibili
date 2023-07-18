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
import { Configuration, OpenAIApi } from "openai";
const openai=require('openai')
import axios from 'axios'
	export default {
		name: '',
		props: [''],
		data() {
			return {
               value:'',
			   generatedText:''
			}
		},
		components: {},
		mounted() {

		},
		methods: {
			onSearch(val){
				 this.$toast(val)
				 this.getopenai()
			},
			onCancel(){
				
			},
			async getopenai(){
				const params={
					prompt:"how are you?",
					max_tokens:10,
					temperature:0.5,
					n:1,
					stop:null,
					model: 'text-davinci-002',
				}
				// const configuration = new Configuration({
				//     organization: "org-Cg0GRTyJandk5bJDY5FoLOA1",
				//     apiKey: "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",
				// });

				// const openai = new OpenAIApi(configuration);
				// const response = await openai.listEngines();
				
				// const res= await openai.createChatCompletion(params)
				// console.log(response,res)
				
				axios.post('https://api.openai.com/v1/completions', {
				        prompt:"how are you?",
				        max_tokens:10,
				        temperature:0.5,
				        n:1,
				        stop:null,
				        model: 'text-davinci-003',
				      }, {
				        headers: {
				          'Authorization': `Bearer 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`,
				          'Content-Type': 'application/json'
				        }
				      }).then(response => {
				        this.generatedText = response;
						console.log("sadasd",this.generatedText)
				      }).catch(error => {
				        console.log(error);
				      });
					
				console.log("sadasd")
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
