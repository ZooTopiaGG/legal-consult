<template>
	<div class="lawyernav">
		<div>
			<ul class="list flex flex-1 flex-pack-justify">
				<li>
					<router-link to='/intro'>简介</router-link>
				</li>
				<li>
					<router-link to='/solution'>业务</router-link>
				</li>
				<li>
					<router-link to='/evaluate'>评价</router-link>
				</li>
			</ul>
			<transition enter-active-class='animated bounceInLeft' leave-active-class='animated bounceOutRight'>
				<keep-alive>
					<router-view :to-data="toData"></router-view>
				</keep-alive>
			</transition>
		</div>
	</div>
</template>

<script>
	export default{
		name:'lawyernav',
		props:['toData'],
		mounted(){
			console.log(this.toData)
		}
	}
</script>

<style scoped="scoped">
	.box-split{
		height: 0.2rem;
		background: #f5f5f5;
	}
	.list{
		height: 1.0rem;
		line-height: 1.0rem;
		font-size: 0.36rem;
		border-bottom: 1px solid #ebebeb;
		background: #fff;
	}
	.list li{
		width: 2.5rem;
		text-align: center;
	}
	.list li a{
		color: #333;
		display: block;
		
	}
	.router-link-active{
		color: #1675e1 !important;
		border-bottom: 2px solid #1675E1;
	}
</style>