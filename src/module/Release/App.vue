<template>
	<div id="app">
		<lawyer :to-data="allData"></lawyer>
		<release :to-data="allData"></release>
	</div>
</template>

<script>
	
	import Lawyer from 'components/LawyerInfo/Lawyer'
	import Release from 'components/Release/Release'
	import axios from 'axios' 
	import { Toast,Indicator } from 'mint-ui'
	import Coms from 'common/js/fn.js'
	
	export default{
		name:'app',
		data(){
			return {
				allData:{}
			}
		},
		components:{
			Lawyer,
			Release
		},
		beforeCreate(){
		    Indicator.open();
		},
		methods:{
			getData(){
	    		var para = {
	    			id: Coms.getParam('id')
	    		}
	    		axios.post('devapi/shareToListen/get_info',para)
	    		.then(res => {
					this.allData = res.data;
					if(res.data.isSuc){
						Indicator.close();
					}else{
						Indicator.close();
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
			this.getData();
		}
	}
</script>

<style>
</style>