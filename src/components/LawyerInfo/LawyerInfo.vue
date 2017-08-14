<template>
	<div class="lawyerinfo">
		<div class="part2">
			<div class="part2-box flex flex-1 flex-pack-justify">
				<div class="box1">
					<p>{{viewCount}}</p>
					<p>热度</p>
				</div>
				<div class="box-line">
					<span></span>
				</div>
				<div class="box2">
					<p>{{solve_question_count}}</p>
					<p>解答</p>
				</div>
				<div class="box-line">
					<span></span>
				</div>
				<div class="box5">
					<p>{{favoriteCount}}</p>
					<p>收藏</p>
				</div>
			</div>
		</div>
		<!-- <div class="part3">
			<a href="javascript:;" @click="locations">{{questionPrice}}/次&nbsp;立即咨询Ta</a>
		</div> -->
	</div>
</template>

<script>
	import { Toast } from 'mint-ui'
	
	export default{
		name:'lawyerinfo',
		data(){
			return{
				viewCount:999,
				solve_question_count:999,
				favoriteCount:999,
				questionPrice:20,
				id:''
			}
		},
		props:['toData'],
		mounted(){
			//console.log(this.toData)
		},
		methods:{
			locations(){
				if(this.id){
					window.location.href = './release.html?id='+this.id
				}else{
					Toast('系统繁忙，请稍后再试！');
				}
			}
		},
		watch:{
			toData(){
				var _this = this;
				if(_this.toData.isSuc){
					var res = _this.toData.result;
					_this.viewCount = res.ViewCount || 0;
					_this.solve_question_count = res.solve_question_count || 0;
					_this.favoriteCount = res.FavoriteCount || 0;
					_this.questionPrice = res.questionPrice || 20;
					_this.id = res.user_id;
				}
				//_this.viewCount = res.
			}
		}
	}
</script>

<style scoped="scoped">
	.lawyerinfo{
		padding:0 0.3rem 0.3rem;
		background: #fff;
	}
	
	.part2{
		height: 1.4rem;
		border-radius:1.4rem;
		border: 1px solid #ccc;
	}
	.part2-box{
		padding: 0.25rem 0.64rem 0;
	}
	.part2-box>div{
		text-align: center;
		width: 25%;
	}
	.part2-box>div>p{
		color: #333;
	}
	.part2-box>div>p:nth-child(1){
		margin-bottom: 0.22rem;
		font-size: 0.36rem;
		font-weight: bold;
	}
	.box-line>span{
		display: inline-block;
		height: 0.4rem;
		width: 1px;
		margin-top: 0.2rem;
		background-color: #ccc;
	}
</style>