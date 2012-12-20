$(window).ready(function(){
	$("pre").addClass("prettyprint");	//.addClass("prettyprint linenums");
	prettyPrint();
	
	setInterval("startRequest()",5000);
});

function startRequest(){
	//window.location.reload();
	$(".span4").load(location.href + ' .span4>*'); //.span4后面的>* (所有后代元素)不要忘记，不然他会把自身添加进来，就出现嵌套了 
	jQuery.ajaxSetup ({cache:false});
}
