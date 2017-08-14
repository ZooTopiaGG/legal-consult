<template>
	<div class="release">
		<div class="part1">
			<textarea name="" id="textarea" cols="" rows="" placeholder='输入咨询的内容，专业律师为您提供法律意见。' v-model='content'></textarea>
			<div class="pro">
				<p><span class="price">{{questionPrice}}元/次</span>&nbsp;律师解答可免费追问3次</p>
				<p class="pro-two">未及时解答，将全额退款至您支付的账户</p>
			</div>
		</div>
		<div class="part2">
			<div class="name">
				<input type="text" name="username" id="username" value="" placeholder="填写您的称谓[例：李先生/陈女士]" v-model='username'/>
			</div>
			<div class="tel">
				<input type="tel" name="tel" id="tel" value="" placeholder="输入手机号" v-model='tel'/>
			</div>
			<div class="code flex flex-1 flex-pack-justify">
				<input type="tel" name="code" id="code" value="" placeholder="输入验证码" v-model='code'/>
				<input type="button" name="getcode" id="getcode" :value="msg" @click="getCode" :class="{codeStatus:codeStatus,getcode:true}" :disabled="disabled"/>
			</div>
		</div>
		<div class="part3">
			<a href="javascript:;" @click="prompt">
				立即咨询
			</a>
		</div>
	</div>
</template>

<script>
	import { Toast,Indicator } from 'mint-ui'
	import Coms from 'common/js/fn.js'
	import axios from 'axios'
	
	export default{
		name:'release',
		data(){
			return {
				questionPrice:20,
				content:'',
				username:'',
				tel:'',
				code:'',
				id:'',
				msg:'获取验证码',
				codeStatus:false,
				disabled:false,
				payType:'',
				caseid:'',
				qid:''
			}
		},
		props:['toData'],
		watch:{
			toData(){
				var _this = this;
				if(_this.toData.isSuc){
					var res = _this.toData.result;
					_this.questionPrice = res.questionPrice || 20;
					_this.id = res.user_id;
				}
			}
		},
		methods:{
			prompt(){
				Indicator.open();
				var _this = this;
				window.sessionStorage.setItem('name',_this.username);
				var para = {
				    areaCode: '86',
				    mobile: _this.tel,
				    smsCode:_this.code,
				    price: _this.questionPrice,
				    lawyerID:_this.id,
				    typeCodeByuser:"3",
				    content: _this.content,
				    name: _this.username
				}
				//创建咨询订单
				axios.post('devapi/advice/create_question_union',{para:para})
				.then(res => {
					Indicator.close();
					//this.allData = res.data;
					if(res.data.isSuc){
						_this.caseid = res.data.result.OrderNum
						_this.qid = res.data.result.QuestionId
						Toast('咨询订单创建成功')
						if(_this.payType == 2){
							location.href = './pay.html?cid='+_this.caseid+'&price='+_this.questionPrice+'&payType='+_this.payType+'&qid='+_this.qid;
						}else{
							location.href = 'http://pay.lawyer-says.cn/home/index?caseid='+_this.caseid+'&questionPrice='+_this.questionPrice+'&qid='+_this.qid;
						}
					}else{
						Toast(res.data.message);
						return;
					}
					console.log(res.data);
					
				})
				.catch(error =>{
					Indicator.close();
					Toast('系统繁忙，请稍后重试！');
				});
			},
			getCode(){
				Indicator.open();
				var _this = this;
				var time = 60;
				var timer = setInterval(()=>{
					time--;
					if(time == 0){
						clearInterval(timer)
						_this.msg = '重新获取';
						_this.codeStatus = false;
						_this.disabled = false
					}else{
						_this.msg = '已发送('+time+'s)';
						_this.codeStatus = true;
						_this.disabled = true
					}
				},1000)
				var para = {
				    areaCode: '86',
				    mobile: _this.tel,
				    codeType:'6',
				    isLocal:'1'
				}
				//获取短信验证码
				axios.post('devapi/smscode/send',para)
				.then(res => {
					//this.allData = res.data;
					if(res.data.isSuc){
						Indicator.close();
						Toast('发送成功');
					}else{
						Toast(res.data.message);
						clearInterval(timer)
						_this.msg = '重新获取';
						_this.codeStatus = false;
						_this.disabled = false
						return;
					}
					console.log(res.data);
				})
				.catch(error =>{
					Indicator.close();
					Toast('系统繁忙，请稍后重试！');
					clearInterval(timer)
					_this.msg = '重新获取';
					_this.codeStatus = false;
					_this.disabled = false
				});
			}
		},
		mounted(){
			if(Coms.isWeiXin()){
				//dosomething
				this.payType = 1
			}else{
				//dosomething
				this.payType = 2
			}
		},
	}
</script>

<style scoped="scoped">
	
	.release{
	}
	.part1{
		padding: 0 0.3rem;
		border-bottom: 1px solid #ebebeb;
	}
	#textarea{
		width: 6.5rem;
		min-height: 3.38rem;
		border: 0;
		outline: none;
		border-top: 1px solid rgba(0,0,0,0.15);
		padding: 0.28rem 0.2rem;
		background: #f5f5f5;
		font-size: 0.28rem;
		color: #333;
		margin-bottom: 0.3rem;
		border-radius: 0;
	}
	.pro{
		margin-bottom: 0.3rem;
		font-size: 0.28rem;
		color: #333;
	}
	.price{
		color: #f58144;
	}
	.pro-two{
		color: #999;
		font-size: 0.24rem;
		margin-top: 0.14rem;
	}
	.part2>div{
		border-bottom: 1px solid #ebebeb;
		height: 0.88rem;
		padding: 0 0.3rem;
	}
	.part2>div>input{
		height: 0.88rem;
		border: 0;
		outline: none;
		font-size: 0.28rem;
		width: 100%;
	}
	#getcode{
		height: 0.6rem;
		margin-top: 0.15rem;
		max-width: 1.8rem;
		color: #fff;
		border-radius: 0.06rem;
	}
	.getcode{
		background: #1675e1;
	}
	.codeStatus{
		background: #ccc;
	}
	.part3{
		padding: 0 0.3rem;
		margin-top: 0.5rem;
	}
	.part3 a{
		display: block;
		height: 0.88rem;
		background: #1675E1;
		border-radius: 0.06rem;
		line-height: 0.88rem;
		text-align: center;
		color: #fff;
		font-size: 0.36rem;
		margin-bottom: 0.2rem;
	}
	.num{
		color: #999;
		font-size: 0.28rem;
		text-align: center;
	}
	.num span{
		color: #F58144;
	}
</style>