var oWrap=document.getElementById('wrap');
var oImg=document.getElementById('img');
var oSend=document.getElementById('send');
var oText=document.getElementById('text');
var i=true;
oImg.onclick=function (){
    if(i){
        oImg.src='img/2.png';
        // 问题：这儿错写成了oImg.style.src
        i=false;
    }else{
        oImg.src='img/1.png';
        i=true;
    } 
}
oSend.onclick=function (){
    if(oText.value==''){
        alert('输入点内容吧！');
    }else if(i){
        // 问题：oImg.src=='img/1.png',读取的是绝对路径
        oWrap.innerHTML='<div class="line">' + '<img src="img/1.png" alt="" id="img1">' + '<div class="right">' + oText.value + '</div>' + '</div>' + oWrap.innerHTML;
        oText.value='';
    }else{
        // 问题：oImg.src=='img/1.png',读取的是绝对路径
        oWrap.innerHTML='<div class="line">' + '<img src="img/2.png" alt="" id="img2">' + '<div class="left">' + oText.value + '</div>' + '</div>' + oWrap.innerHTML;
        oText.value='';
    }
}