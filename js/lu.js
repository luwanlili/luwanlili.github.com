$(window).ready(function(){
	$("pre").addClass("prettyprint");	//.addClass("prettyprint linenums");
	prettyPrint();
	
	setInterval("startRequest()",5000);
});

function startRequest(){
	//window.location.reload();
	$(".span4").load(location.href + ' .span4>*'); //.span4�����>* (���к��Ԫ��)��Ҫ���ǣ���Ȼ�����������ӽ������ͳ���Ƕ���� 
	jQuery.ajaxSetup ({cache:false});
}
