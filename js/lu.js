$(window).ready(function(){
	//$("pre").addClass("prettyprint");	//.addClass("prettyprint linenums");
	//prettyPrint();

	//setInterval("startRequest()",60000);//每分钟刷新一次
	tagUpdate();
	
	$(".dropdown").mouseover(function(){
	  $(".dropdown").addClass('open');
	});
	
	$(".dropdown").mouseout(function(){
	  $(".dropdown").removeClass('open');
	});
});

//定时刷新
function startRequest(){
	//window.location.reload(); //整个页面刷新
	$(".span4").load(location.href + ' .span4>*'); //局部页面刷新,要注意.span4后面的>* (所有后代元素)不可缺少，不然他会把自身添加进来，就出现嵌套了 
	jQuery.ajaxSetup ({cache:false}); //清除本地cache
}

function tagUpdate(){
	$(".span4").load(location.href+"?v="+Math.random()+' .span4>*');
}
