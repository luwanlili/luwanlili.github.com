$(window).ready(function(){
	$("pre").addClass("prettyprint");	//.addClass("prettyprint linenums");
	prettyPrint();
	
	setInterval("startRequest()",5000);
});

function startRequest(){
	//window.location.reload(); //����ҳ��ˢ��
	$(".span4").load(location.href + ' .span4>*'); //�ֲ�ҳ��ˢ��,Ҫע��.span4�����>* (���к��Ԫ��)����ȱ�٣���Ȼ�����������ӽ������ͳ���Ƕ���� 
	jQuery.ajaxSetup ({cache:false}); //�������cache
}
