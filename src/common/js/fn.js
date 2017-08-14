export default {
	createTime(tt){
		var time = new Date(parseInt(tt.slice(6, 19)))
		//tt.replace(/Date\([\d+]+\)/, function(a) { eval('d = new '+a) });
		var y = time.getFullYear();
	    var m = time.getMonth() + 1;
	    m = m < 10 ? ('0' + m) : m;
	    var d = time.getDate();
	    d = d < 10 ? ('0' + d) : d;
	    var h = time.getHours();
	    var minute = time.getMinutes();
	    minute = minute < 10 ? ('0' + minute) : minute;
	    var seconds = time.getSeconds();
	    seconds = seconds < 10 ? ('0' + seconds) : seconds;
	    return y + '-' + m + '-' + d+' '+h+':'+minute;
	},
	getParam(paramName){
	    var paramValue = "";
	    var isFound = false;
	    if (location.search.indexOf("?") == 0 && location.search.indexOf("=") > 1) {
	        var arrSource = unescape(location.search).substring(1, location.search.length).split("&");
	        var i = 0;
	        while (i < arrSource.length && !isFound) {
	            if (arrSource[i].indexOf("=") > 0) {
	                if (arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase()) {
	                    paramValue = arrSource[i].split("=")[1];
	                    isFound = true;
	                }
	            }
	            i++;
	        }
	    }
	    return paramValue;
	},
	getRequest(){  
	   var url = location.search; //获取url中"?"符后的字串  
	   var theRequest = new Object();  
	   if (url.indexOf("?") != -1) {  
	      var str = url.substr(1);  
	      var strs = str.split("&");  
	      for(var i = 0; i < strs.length; i ++) {  
	         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
	      }  
	   }  
	   return theRequest;  
	},
	/*判断是否是微信 微博 QQ*/
	isWeiXin(){
		var wx = navigator.userAgent.toLowerCase();
		if(wx.indexOf('micromessenger')>-1 || wx.indexOf("qq")>-1){
			return true;
		}else{
			return false;
		}
	}
}
