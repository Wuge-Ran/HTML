var oBt=document.getElementById('bt');
var oRed=document.getElementById('red');
var oYellow=document.getElementById('yellow');
var oBlue=document.getElementById('blue');
var oW1=document.getElementById('w_200');
var oW2=document.getElementById('w_300');
var oW3=document.getElementById('w_400');
var oH1=document.getElementById('h_200');
var oH2=document.getElementById('h_300');
var oH3=document.getElementById('h_400');
var oRestore=document.getElementById('restore');
var oSure=document.getElementById('sure');
var oMask=document.getElementById('mask');
var oChange=document.getElementById('change');
var oWrap=document.getElementById('wrap');
oBt.onclick=function(){
    oMask.style.display='block';
    oChange.style.display='block';
}
oRed.onclick=function(){
    oWrap.style.backgroundColor='red';
}
oYellow.onclick=function(){
    oWrap.style.backgroundColor='yellow';
}
oBlue.onclick=function(){
    oWrap.style.backgroundColor='blue';
}
oW1.onclick=function(){
    oWrap.style.width='200px';
}
oW2.onclick=function(){
    oWrap.style.width='300px';
}
oW3.onclick=function(){
    oWrap.style.width='400px';
}
oH1.onclick=function(){
    oWrap.style.height='200px';
}
oH2.onclick=function(){
    oWrap.style.height='300px';
}
oH3.onclick=function(){
    oWrap.style.height='400px';
}
oRestore.onclick=function(){
    oWrap.style='width: 100px,height: 100px,background-color: red';
}
oSure.onclick=function(){
    oMask.style.display='none';
    oChange.style.display='none';
}