//获取元素属性方法
function getAttr(ele,attr,change){
    if(arguments.length ===2){
        return getComputedStyle(ele)[attr];
    }else{

        ele.style[attr] = change + 'px';
    }
}
//tween
var Tween = {
	linear: function (t, b, c, d){  //匀速
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){  //加速曲线
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){  //减速曲线
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){  //加速减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){  //加加速曲线
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){  //减减速曲线
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(t, b, c, d, a, p){    //*正弦增强曲线（弹动渐出）
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},    
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 3.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	},       
	bounceOut: function(t, b, c, d){//*
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
}
//运动函数
function move(obj){
    if(obj.ele['timer_'+obj.attr]) return;
    var def = {
        ele:null,
        attr:null,
        target:null,
        duration:800,
        way:'linear',
        callback:function (){
        }
    }
    for(var key in obj){
        def[key] = obj[key];
    }
    var
        ele = def.ele,
        attr = def.attr,
        begin = parseFloat(getAttr(ele,attr)),
        count = def.target - begin,
        duration = def.duration,
        way = def.way,
        callback = def.callback,
        start = Date.now(),
        passTime = null;
    ele['timer_'+attr] = setInterval(function(){
        passTime = Date.now() - start;
        if(passTime >=duration){
            passTime = duration;
            clearInterval(ele['timer_'+attr]);
            ele['timer_'+attr] = null;
        }
        var value = begin + count/duration*passTime;
        getAttr(ele,attr,value);
        if(passTime ===duration){
            callback();
        }  
    })
      
}

//main
var aBar = document.querySelectorAll('.item div');
var aPoint = document.querySelectorAll('.point img');
//让点闪烁的定时器
var bl = true;
setInterval(function(){
   if(bl){
       for(var i = 0;i < aPoint.length;i++){
            aPoint[i].src = 'img/nfh.png';
       }
       bl = false;
   }else{
    for(var i = 0;i < aPoint.length;i++){
            aPoint[i].src = 'img/fuh.png';
    }
        bl = true;
   }
},800);
//时钟初始化
function tab(){
    var date = new Date(),
    hour = date.getHours(),
    mins = date.getMinutes(),
    secs = date.getSeconds();
    function addZero(t){
        return t>=10? t : '0' + t;
    }
 return (addZero(hour) + ':' + addZero(mins) + ':' + addZero(secs));
}
var fristTime = tab();
for(var i = 0;i < fristTime.length;i++){
    if(fristTime[i] === ':'){
        continue;
    }else{
        aBar[i].querySelectorAll('img')[0].src = 'img/' + fristTime[i] + '.png';
    }
}
function renew (i){
   
}
var old = tab();
function renew(i){
    aBar[i].querySelectorAll('img')[1].src = 'img/' + fristTime[i] + '.png';
    move({
        ele:aBar[i],
        attr:'top',
        target:-210,
        duration:800,
        callback:function (){
            aBar[i].querySelectorAll('img')[0].src = 'img/' + fristTime[i] + '.png';
            getAttr(aBar[i],'top',0);
        }
    })
}
setInterval(function (){
    fristTime = tab();
    // console.log(fristTime)
    for(var i = 0;i < fristTime.length;i++){
        if(fristTime[i] === ':'){
            continue;
        }else if(fristTime[i] !== old[i]){
            renew(i);
        }
    }
    old = fristTime;
},1000)