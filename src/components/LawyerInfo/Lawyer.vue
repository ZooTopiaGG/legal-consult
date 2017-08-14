<template>
	<div class="lawyer">
		<div class="part1 flex flex-1">
			<img :src="avatar"/>
			<div class="part1-info">
				<div class="info1">
					<span class="name">{{lawyer_name}}</span>
					<span>{{city_name}}</span>
					<span> | </span>
					<span>{{experience_years}}年</span>
				</div>
				<div class="info2">
					<span>{{company_name}}</span>
				</div>
				<div class="info3 flex flex-1">
					<span v-if='res.first_profession'>{{res.first_profession}}</span>
					<span v-if='res.second_profession'>{{res.second_profession}}</span>
					<span v-if='res.profession3'>{{res.profession3}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'lawyer',
		data(){
			return {
				res:{},
				lawyer_name:'陈律师',
				city_name:'成都市',
				experience_years:20,
				company_name:'某律师事务所',
				avatar:'http://test2.lawyer-says.cn/images/images/9.png'
			}
		},
		props:['toData'],
		watch:{
			toData(){
				var _this = this;
				if(_this.toData.isSuc){
					_this.res = _this.toData.result;
					_this.lawyer_name = _this.toData.result.lawyer_name;
					_this.city_name = _this.toData.result.city_name;
					_this.experience_years = _this.toData.result.experience_years;
					_this.company_name = _this.toData.result.company_name;
					_this.avatar = _this.toData.result.avatar;
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.lawyer{
		padding:0.3rem 0.3rem 0;
		background: #fff;
	}
	.part1{
		padding-bottom: 0.4rem;
	}
	.part1 img{
		width: 1.5rem;
		height: 1.5rem;
		margin-right: 0.2rem;
		border-radius: 0.06rem;
	}
	.part1-info{
		color: #999;
		font-size: 0.24rem;
	}
	.name{
		color: #333;
		font-size: 0.32rem;
		font-weight: bold;
		margin-right: 0.1rem;
	}
	.info2{
		color: #333;
		font-size: 0.28rem;
		font-weight: bold;
		margin: 0.2rem 0 0.25rem 0;
	}
	.info3 span{
		height: 0.44rem;
		line-height: 0.44rem;
		color: #757575;
		background-color: #f2f2f2;
		border-radius: 0.06rem;
		margin-right: 0.12rem;
		width: 1.48rem;
		text-align: center;
	}
</style>