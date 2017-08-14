<template>
  <div id="app">
  	<lawyer :to-data='allData'></lawyer>
  	<lawyer-info :to-data='allData'></lawyer-info>
  	<lawyer-nav :to-data='allData'></lawyer-nav>
  </div>
</template>

<script>
  import LawyerInfo from 'components/LawyerInfo/LawyerInfo'
  import LawyerNav from 'components/LawyerInfo/LawyerNav'
  import Lawyer from 'components/LawyerInfo/Lawyer'
  import axios from 'axios'
  import { Toast,Indicator } from 'mint-ui'
  import Coms from 'common/js/fn.js'
  import {mapGetters,mapActions} from 'vuex'

  export default {
    name: 'app',
    data(){
    	return{
    			value:[],
    			allData:{}
    	}
    },
    components: {
    	Lawyer,
      LawyerInfo,
      LawyerNav
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
					Indicator.close();
					this.allData = res.data
					if(res.data.isSuc){
						Toast('获取信息成功！');
						console.log(res.data.result)
						window.sessionStorage.setItem('description',res.data.result.description)
						window.sessionStorage.setItem('award',res.data.result.AwardWinning)
						window.sessionStorage.setItem('avatar',res.data.result.avatar)
						window.sessionStorage.setItem('name',res.data.result.lawyer_name)
						window.sessionStorage.setItem('years',res.data.result.experience_years)
						window.sessionStorage.setItem('law',res.data.result.company_name)
					}else{
						Toast('系统繁忙，请稍后重试！');
					}
				})
        .catch(error =>{
            console.log(error)
            Indicator.close();
            Toast('系统繁忙，请稍后重试！');
        });
    	}
    },
    created(){
      window.sessionStorage.setItem('id',Coms.getParam('id'))
    	this.getData();
    }
  }
</script>

<style>
  body{
    background: #f5f5f5;
  }
	.nothing{
		text-align: center;
		padding-top: 0.7rem;
		font-size: 0.28rem;
		color: #999;
	}
	.nothing img{
		width: 1.63rem;
		height: 1.83rem;
		margin-bottom: 0.4rem;
	}
</style>
