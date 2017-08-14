<template>
	<div class="pay">
		<div class="part1 flex flex-1">
			<img src="../../common/images/10.png">
			<p>您好，{{ name }}先生/女士</p>
		</div>
		<div class="box-line"></div>
		<div class="part2">
			<div class="flex flex-1 flex-pack-justify">
				<p>支付类型</p>
				<p>律师说服务类型</p>
			</div>
			<div class="flex flex-1 flex-pack-justify">
				<p>支付金额</p>
				<p>￥{{ price }}</p>
			</div>
		</div>
		<div class="box-line"></div>
		<div class="part3">
			<a href="javascript:;" @click="toPay">立即支付</a>
			<p>支付后立即匹配律师接单，未服务全额退款</p>
		</div>
	</div>
</template>
<script type="text/javascript">
	import axios from 'axios'
	import { Toast,Indicator } from 'mint-ui'
	import wx from 'weixin-js-sdk'
	import Coms from 'common/js/fn.js'

	export default {
		name:'pay',
		data(){
			return {
				caseid:'',
				price:20,
				qid:'',
				name:''
			}
		},
		methods:{
			//支付宝支付
			Alipay(){
				Toast('正在跳转...')
				var _this = this;
				var para = {
				    orderNum: _this.caseid,
				    total_fee: 0.01,
				    return_url: 'http://pay.lawyer-says.cn/module/success.html'
				}
				axios.post('devapi/pay/CreateH5PayUrl',para)
				.then(res =>{
					//dosomething suc
					if(res.data.isSuc){
						document.write(res.data.result);
					}else{
						Toast('支付失败，请稍后重试')
					}
				}).catch(error =>{
					//dosomething error
					Toast('支付失败，请稍后重试')
				})
			},
			//微信支付
			unifiedOrder(){
				var _this = this;
				 var para = {
                    orderNum: _this.caseid,
                    lawyerId: 0,
                    total_fee: 0.01 * 100
                }
                axios.post("home/UnifiedOrder",para)
                .then(res =>{
                	Indicator.open();
					_this.wxPay(res.data.result, _this.caseid);
				}).catch(error =>{
					//alert('UnifiedOrder-error')
				});
			},
			wxPay(v,orderNo){
				var data = JSON.parse(v);
			    if (typeof WeixinJSBridge == "undefined") {
			    	alert(WeixinJSBridge)
			        if (document.addEventListener) {
			            document.addEventListener('WeixinJSBridgeReady', this.jsApiCall, false);
			        } else if (document.attachEvent) {
			            document.attachEvent('WeixinJSBridgeReady', this.jsApiCall);
			            document.attachEvent('onWeixinJSBridgeReady',this.jsApiCall);
			        }
			    } else {
			        this.jsApiCall(data, orderNo);
			    }
			},
			jsApiCall(v, orderNo){
				Indicator.close();
			    WeixinJSBridge.invoke(
			        'getBrandWCPayRequest',
			        v,
			        function (res) {
			            if (res.err_msg == "get_brand_wcpay_request:ok") {
			                var para = {
			                    orderNo: orderNo
			                }
			                 axios.post("devapi/shareToListen/OnOrderPaid", para,)
			                 .then(res=>{
								location.href = "./success.html";
							}).catch(error=>{
								//alert('jsApiCall-error')
							});
			            }
			            else {
			               Toast('系统繁忙，请稍后再试')
			            }
			        }
			    );
			},
			toPay(){
				if(Coms.getParam('payType') == 2){
					this.Alipay()
				}else{
					this.unifiedOrder()
				}
			}
		},
		mounted(){
			var _this = this;
			_this.caseid = Coms.getParam('cid');
			_this.price = Coms.getParam('price');
			_this.qid = Coms.getParam('qid');
			_this.name = window.sessionStorage.getItem('name');
		}
	}
</script>
<style type="text/css" scoped>
	.part1{
		height: 1.0rem;
		line-height: 1.0rem;
		padding: 0 0.3rem;
		font-size: 0.28rem;
		color: #333;
	}
	.box-line{
		height: 0.15rem;
		background: #f5f5f5;
	}
	.part1 img{
		width: 0.6rem;
		height: 0.6rem;
		margin-top: 0.2rem;
		margin-right: 0.24rem;
	}
	.part2>div{
		height: 0.9rem;
		line-height: 0.9rem;
		padding: 0 0.3rem;
		color: #333;
		font-size: 0.28rem
	}
	.part2>div:nth-child(1){
		border-bottom: 1px solid #eee; 
	}
	.part2>div>p:nth-child(2){
		color: #f58144;
	}
	.part3{
		text-align: center;
		padding: 0 0.3rem;
		margin-top: 0.4rem;
	}
	.part3 a{
		display: block;
		height: 0.88rem;
		line-height: 0.88rem;
		background: #f58144;
		border-radius: 0.06rem;
		margin-bottom: 0.25rem;
		color: #fff;
	}
	.part3 p{
		color: #999;
		font-size: 0.24rem;
	}
</style>