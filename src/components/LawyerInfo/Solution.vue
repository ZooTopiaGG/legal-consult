<template>
	<div class="solution" v-if='show0'>
		<div class="solution-list flex flex-1 flex-wrap flex-pack-justify">
			<li class="solution-list-cell">
				<img src="../../common/images/15.png">
				<p class="title">法律咨询 ￥20</p>
				<p>免费专线通话</p>
				<p>方便隐私快捷</p>
				<a href="javascript:;" @click="wzzx">立即咨询</a>
			</li>
			<li class="solution-list-cell">
				<img src="../../common/images/14.png">
				<p class="title">离婚宝 ￥300</p>
				<p>一对一服务</p>
				<p>离婚法律顾问</p>
				<a href="javascript:;" @click="lhb">立即委托</a>
			</li>
			<li class="solution-list-cell">
				<img src="../../common/images/16.png">
				<p class="title">电话咨询</p>
				<p>免费专线通话</p>
				<p>方便隐私快捷</p>
				<a href="javascript:;" class="no">暂未开通</a>
			</li>
			<li class="solution-list-cell">
				<img src="../../common/images/17.png">
				<p class="title">更多业务</p>
				<p>未来逐步开放</p>
				<p>敬请期待</p>
			</li>
		</div>
	</div>
	<div class="solution" v-else>
		<div class="nothing">
			<img src="../../common/images/8.png"/>
			<p>暂无内容</p>
		</div>
	</div>
</template>

<script>
	import Coms from 'common/js/fn.js'

	export default{
		name:'solution',
		data(){
			return{
				list:[],
				pageIndex:1,
				allPage:'',
				paddingChange:false,
				show0:true,
				id:''
			}
		},
		methods:{
			wzzx(){
				location.href = './release.html?id='+Coms.getParam('id')
			},
			lhb(){
				location.href = 'http://familylaw.lawyer-says.com/divorceAgreement/getSolution1.html?id='+Coms.getParam('id')
			}
		},
		mounted(){
			this.id = window.sessionStorage.getItem('id');
		}
	}
</script>

<style scoped="scoped">
	.solution-list{
		text-align: center;
		padding:0.3rem 0.3rem 0 0.3rem;
	}
	.solution-list-cell{
		height: 3.49rem;
		min-width: 2.55rem;
		border-radius: 0.06rem;
		margin-bottom: 0.3rem;
		box-shadow: 0 3px 8px rgba(153,153,153,0.3);
		padding: 0.25rem 0.36rem 0;
		background: #fff;
	}
	.solution-list-cell img{
		width: 1.0rem;
		height: 1.0rem;
		margin-bottom: 0.3rem
	}
	.solution-list-cell p{
		font-size: 0.24rem;
		color: #999;
		margin-bottom: 0.07rem;
	}
	.solution-list-cell .title{
		font-size: 0.32rem;
		color: #333;
		margin-bottom: 0.2rem;
	}
	.solution-list-cell a{
		display: block;
		margin-top: 0.2rem;
		height: 0.6rem;
		line-height: 0.6rem;
		background: #1675e1;
		border-radius: 0.06rem;
		color: #fff;
	}
	.solution-list-cell .no{
		background: #999
	}
</style>