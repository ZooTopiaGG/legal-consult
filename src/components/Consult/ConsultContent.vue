<template>
	<div class="consultcontent">
		<div class="part1">
			<div class=" clear">
				<div class="title lt">
					<span class="box-line"></span>
					<span>咨询内容</span>
				</div>
				<div class="time rt">
					<span>2017-12-12 &nbsp; 5:20:20</span>
				</div>
			</div>
			<div class="part1-content">
				其实 ABCD 这四个流程都是 “去吃饭” 这件事，只不过表达方式不同，计算机只能理解二进制数据，即最后面哪一种（10100101010....），而把 “去吃饭” 这三个字一步一步转化成二进制数据就是程序员的工作。
			</div>
		</div>
		<div class="lines"></div>
		<div class="part2">
			<div class="">
				<div class="title">
					<span class="box-line"></span>
					<span>律师解答</span>
				</div>
				<div class="summary">
					<div class="summary-title part2-title">
						咨询概述
					</div>
					<div class="summary-content part2-content">
						我不是程序员，我嫁给了程序员，我从一个程序员的老婆的角度回答这个问题啊！或者说从一个IT男老婆的角度回答这个问题。
					</div>
				</div>
				<div class="opinion">
					<div class="opinion-title part2-title">
						律师意见
					</div>
					<div class="opinion-content part2-content">
						我不是程序员，我嫁给了程序员，我从一个程序员的老婆的角度回答这个问题啊！或者说从一个IT男老婆的角度回答这个问题。
					</div>
				</div>
				<div class="basis">
					<div class="basis-title part2-title">
						法律依据
					</div>
					<div class="basis-content part2-content">
						我不是程序员，我嫁给了程序员，我从一个程序员的老婆的角度回答这个问题啊！或者说从一个IT男老婆的角度回答这个问题。
					</div>
				</div>
			</div>
		</div>
		<div class="part3">
			<div class="user clear">
				<div class="box">
					<span class="part3-title">用户追问：</span>我不是程序员，我嫁给了程序员，我从一个程序员的老婆的角度回答这个问题啊！或者说从一个IT男老婆的角度回答这个问题。
				</div>
				<div class="part3-time rt">
					<span>2017-12-12 06:50:50</span>
				</div>
			</div>
			<div class="lawyer clear">
				<div class="box">
					<span class="part3-title">律师解答：</span>我不是程序员，我嫁给了程序员，我从一个程序员的老婆的角度回答这个问题啊！或者说从一个IT男老婆的角度回答这个问题。
				</div>
				<div class="part3-time rt">
					<span>2017-12-12 06:50:50</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'consultcontent'
	}
</script>

<style scoped="scoped">
	.consultcontent{
		padding-bottom: 0.3rem;
	}
	.box-line{
		display: inline-block;
		width: 0.04rem;
		height: 0.24rem;
		background: #1675E1;
		position: relative;
		top: 0.02rem;
	}
	.title{
		color: #1675E1;
		font-size: 0.28rem;
	}
	.time{
		font-size: 0.24rem;
		color: #999;
	}
	.part1-content{
		padding: 0.4rem 0;
		font-size: 0.32rem;
		color: #333;
		line-height: 1.6;
	}
	.lines{
		height: 0.2rem;
		background: #f5f5f5;
	}
	.part1{
		padding: 0 0.3rem;
	}
	.part2{
		padding: 0.3rem;
		border-bottom: 1px solid #ccc;
	}
	.part2-title{
		color: #999;
		font-size: 0.24rem;
		margin-bottom: 0.21rem;
	}
	.summary-title{
		margin-top: 0.4rem;
	}
	.part2-content{
		margin-bottom: 0.3rem;
		font-size: 0.32rem;
		line-height: 1.6;
	}
	.part3{
		padding:0 0.3rem;
		color: #666;
		font-size: 0.32rem;
		line-height: 1.6;
		border-bottom: 1px solid #ccc;
	}
	.part3>div{
		padding-top: 0.3rem;
		border-bottom: 1px solid #ccc;
	}
	.part3>div:last-child{
		border-bottom: 0;
	}
	.part3-title{
		color: #333;
		font-weight: bold;
	}
	div.box{
		margin-bottom: 0.2rem;
	}
	.part3-time{
		margin-bottom: 0.2rem;
		color: #999;
		font-size: 0.24rem;
	}
</style>