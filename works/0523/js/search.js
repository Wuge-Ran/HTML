var oP = document.querySelector('#wrap p');
var oSure1 = document.querySelector('.divSearch .sure');
var oSure2 = document.querySelector('.divReplace .sure');
var oInput1 = document.querySelector('#stext1');
var oInput2 = document.querySelector('#stext2');
var oInput3 = document.querySelector('#rtext');
var btnS = document.querySelector('#alter .search');
var btnR = document.querySelector('#alter .replace');
var divSearch = document.querySelector('.divSearch');
var divReplace = document.querySelector('.divReplace');
var cont = '妙味课堂是一支独具特色的IT培训团队，妙味反对传统IT教育枯燥乏味的教学模式，妙味提供一途中全新的快乐学习方法！目前主要针对的是abc培训，同时还提供了css教程、abc视频、js特效等，最新推出了外地学员们喜欢的abc网络课程服务，同时还为处于abc入门阶段的朋友录制了大量abc视频，其中涉及了大量abc基础知识，希望妙味课堂推出的abc网络培训课程能带给大家更多惊喜。'
oP.innerHTML = cont;
oSure1.onclick = function (){
    // 每次都要更新状态
    console.log(cont)
    oP.innerHTML = cont;
    var strP = oP.innerHTML;
    var a = oInput1.value;
    // 没找到通过indexOf判断给提示
    if(a === ''){
        alert('请输入需要查找的值');
    }else if(strP.indexOf(a)==-1){
        alert('没找到！');
    }
    // 把输入的值作为分隔线
    var arrP = strP.split(a);
    oP.innerHTML = arrP.join('<span>' + a + '</span>');
}
oSure2.onclick = function (){
    // 每次都要更新状态
    oP.innerHTML = cont;
    var strP = oP.innerHTML;
    var a1 = oInput2.value;
    var a2 = oInput3.value;
    // 没找到通过indexOf判断给提示
    if(a1 === ''||a2 === ''){
        oInput2.value = '';
        oInput3.value = '';
        alert('都要输入内容');
    }else if(strP.indexOf(a1)==-1){
        alert('没找到！');
    }
    // 把输入的值作为分隔线
    var arrP = strP.split(a1);
    var str = arrP.join(a2);
    oP.innerHTML = arrP.join('<span>' + a2 + '</span>');
    cont = str;
}
btnS.onclick = function (){
    divSearch.style.display = 'block';
    divReplace.style.display = 'none';
    oInput2.value ='';
    oInput3.value ='';
}
btnR.onclick = function (){
    divSearch.style.display = 'none';
    divReplace.style.display = 'block';
    oInput1.value ='';
}


