<template>
	<div class="intro" v-if='show0'>
		<div class="part1" v-show="show">
			<div class="title">个人荣誉</div>
			<ul class="honor-list">
				<li class="flex flex-1" v-for="(val,index) in awardWinning" :key='index'>
					<img src="../../common/images/6.png"/>
					<span>{{val}}</span>
				</li>
			</ul>
		</div>
		<div class="part2" v-show="show1">
			<div class="title">个人简介</div>
			<div class="content">
				{{ description }}
			</div>
		</div>
	</div>
	<div class="intro" v-else>
		<div class="nothing">
			<img src="../../common/images/8.png"/>
			<p>暂无内容</p>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
  	import { Toast,Indicator } from 'mint-ui'
 	import Coms from 'common/js/fn.js'
	export default{
		name:'intro',
		data(){
			return {
				res:{},
				awardWinning:[],
				description:'',
				show:false,
				show1:false,
				show0:false,
				award:'',
				desc:''
			}
		},
	    methods:{
	    	getData(){
	    		var _this = this;
	    		var para = {
	    			id: Coms.getParam('id')
	    		}
	    		axios.post('devapi/shareToListen/get_info',para)
	       	 	.then(res => {
					Indicator.close();
					this.allData = res.data
					if(res.data.isSuc){
						var result = res.data.result;
						if(result.AwardWinning === '' || result.AwardWinning == null || result.AwardWinning == undefined){
							_this.show = false;
						}else{
							_this.show = true;
							_this.awardWinning = result.AwardWinning.split(';')
						}
						if(result.description === '' || result.description == null || result.description == undefined){
							_this.show1 = false;
						}else{
							_this.show1 = true;
							_this.description = result.description
						}
						if((result.AwardWinning === '' || result.AwardWinning == null || result.AwardWinning == undefined) && (result.description === '' || result.description == null || result.description == undefined)){
							_this.show0 = false;
						}else{
							_this.show0 = true;
						}
					}else{
						_this.show0 = false;
					}
				})
	        	.catch(error =>{
		            console.log(error)
		            _this.show0 = false;
		        });
	    	}
	    },
	    mounted(){
	      window.sessionStorage.setItem('id',Coms.getParam('id'))
	      this.getData();
	    }
	}
</script>

<style scoped="scoped">
	.intro{
		padding: 0.3rem;
		color: #333;
		background: #fff;
	}
	.part1{
		padding-top: 0.05rem;
	}
	.title{
		margin-bottom: 0.4rem;
		font-size: 0.32rem;
		font-weight: bold;
	}
	.honor-list{
		margin-bottom: 0.6rem;
	}
	.honor-list li img{
		width: 0.26rem;
		height: 0.3rem;
		margin-right: 0.2rem;
	}
	.honor-list li{
		margin-bottom: 0.2rem;
		font-size: 0.28rem;
	}
	.content{
		font-size: 0.28rem;
		line-height: 1.6;
	}
</style>