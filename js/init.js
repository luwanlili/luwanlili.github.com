//init.js
define(function(require, exports, module) {
	require('../css/bootstrap.css');
	//require('../css/bootstrap.min.css');
	require('../js/jquery-1.7.2.min.js');
	require('../js/jquery-ui.min.js');
	
	require('../js/plugins/bootstrap-dropdown.js');
	require('../js/plugins/bootstrap-tab.js');
	
	require('../css/prettify.css');
	require('../css/style.css');
	require('../js/prettify.js');
	
	//var $ = require('../js/sea_jquery.js');
    var data = require('../js/data.js');
	
	
	//$('title').html(data.title);
    $('.brand').html(data.brand);
	$('.nav li:eq(0) a').html(data.home_page);
	$('.nav li:eq(0) a').attr('href',data.home_page_href);
	$('.nav li:eq(1) a').html(data.link1);
	$('.nav li:eq(1) a').attr('href',data.link1_href);
	$('.nav li:eq(2) a').html(data.link2);
	$('.nav li:eq(2) a').attr('href',data.link2_href);
	$('.nav li:eq(3) a').html(data.link3);
	$('.nav li:eq(3) a').attr('href',data.link3_href);
	
	$('.dropdown a:eq(0).dropdown-toggle').html(data.dropdown1);
	$('.dropdown a.dropdown-toggle:eq(1)').html(data.dropdown2);
	
	//下拉菜单
	$('ul.dropdown-menu:eq(0)').html(data.dropdown_menu1);
	$('ul.dropdown-menu:eq(1)').html(data.dropdown_menu2);
	//$('ul.dropdown-menu:eq(2)').html(data.dropdown_menu2);
	
	$('form.navbar-search input').attr('placeholder',data.placeholder);
	
	$('.nav.pull-right li:eq(0) a').html(data.link4);
	$('.nav.pull-right li:eq(0) a').attr('href',data.link4_href);


    $("pre").addClass("prettyprint");	//.addClass("prettyprint linenums");
    prettyPrint();

//导航栏事件
$('.nav li').each(function(){
	$(this).click(function(){
		$('.nav .active').removeClass('active');
		$(this).addClass('active');
	});
});

//end define
});