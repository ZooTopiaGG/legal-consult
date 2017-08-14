<template>
	<div id="app">
		<consult-info></consult-info>
		<consult-content></consult-content>
	</div>
</template>

<script>
	
	import ConsultInfo from 'components/Consult/ConsultInfo'
	import ConsultContent from 'components/Consult/ConsultContent'
	import axios from 'axios'
	import { Toast,Indicator } from 'mint-ui'
	import Coms from 'common/js/fn.js'
	
	export default{
		name:'app',
		data(){
			return{
				
			}
		},
		components:{
			ConsultInfo,
			ConsultContent
		},
		methods:{
			// /shareToListen/sharecaseInfo
			getCaseInfo(){
	    		var para = {
	    			questionId: Coms.getParam('id')
	    		}
	    		axios.post('devapi/shareToListen/sharecaseInfo',para)
	    		.then(res => {
					Indicator.close();
					this.allData = res.data
					if(res.data.isSuc){
						Toast('获取信息成功！');
//							console.log(res.data.result)
//							window.localStorage.setItem('description',res.data.result.description)
//							window.localStorage.setItem('award',res.data.result.AwardWinning)
//							window.localStorage.setItem('avatar',res.data.result.avatar)
//							window.localStorage.setItem('name',res.data.result.lawyer_name)
//							window.localStorage.setItem('years',res.data.result.experience_years)
//							window.localStorage.setItem('law',res.data.result.company_name)
					}else{
						Toast('系统繁忙，请稍后重试！');
					}
				})
				.catch(error =>{
					Indicator.close();
					Toast('系统繁忙，请稍后重试！');
				});
	    	}
		},
		mounted(){
			this.getCaseInfo();
		}
	}
</script>

<style>
</style