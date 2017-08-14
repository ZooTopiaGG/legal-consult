<template>
	<div class="consultinfo">
		<div class="part1 flex flex-1">
			<img src="../../common/images/9.png"/>
			<div class="part1-info">
				<div class="info1">
					<span class="name">陈浩文</span>
					<span>成都市</span>
					<span> | </span>
					<span>21年</span>
				</div>
				<div class="info2">
					<span>四川九益律师事务所</span>
				</div>
			</div>
			<div class="part1-btn">
				<a href="./release.html" @click="toRelease">咨询Ta</a>
			</div>
		</div>
	</div>
</template>

<script>
	
	import Coms from 'common/js/fn.js'
	export default{
		name:'consultinfo',
		methods:{
			toRelease(){
				location.href = "./release.html?id="+Coms.getParam('id')
			}
		}
	}
</script>

<style scoped="scoped">
	.consultinfo{
		padding: 0.3rem;
	}
	.part1{
		margin-bottom: 0.4rem;
		padding: 0.3rem;
		background: #1675E1;
		box-shadow: 0 1px 0.06rem rgba(0,0,0,0.35);
		border-radius: 0.06rem;
		box-sizing: border-box;
		position: relative;
	}
	.part1 img{
		width: 1.2rem;
		height: 1.2rem;
		margin-right: 0.2rem;
	}
	.part1-info{
		color: #fff;
		font-size: 0.24rem;
	}
	.name{
		color: #fff;
		font-size: 0.32rem;
		font-weight: bold;
		margin-right: 0.1rem;
	}
	.info1{
		margin-top: 0.2rem;
	}
	.info2{
		color: #fff;
		font-size: 0.28rem;
		font-weight: bold;
		margin: 0.2rem 0 0 0;
	}
	.part1-btn a{
		width: 1.25rem;
		height: 0.6rem;
		position: absolute;
		right: 0.3rem;
		top: 50%;
		margin-top: -0.3rem;
		color: #fff;
		border: 1px solid #fff;
		border-radius: 0.06rem;
		text-align: center;
		line-height: 0.6rem;
	}
</style>