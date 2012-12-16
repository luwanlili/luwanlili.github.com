//init.js
define(function(require, exports, module) {
	require('../css/bootstrap.css');
	//require('../css/bootstrap.min.css');
	require('../js/jquery-1.7.2.min.js');
	//var $ = require('../js/sea_jquery.js');
	require('../js/jquery-ui.min.js');

	require('../css/prettify.css');
	require('../css/style.css');
	require('../js/prettify.js');
	
	
    var myData = require('../js/data.js');

	require('../js/plugins/bootstrap-tab.js');
	require('../js/plugins/bootstrap-dropdown.js');
	
	//$('title').html(myData.title);
    $('.brand').html(myData.brand);
	$('.nav li:eq(0) a').html(myData.home_page);
	$('.nav li:eq(0) a').attr('href',myData.home_page_href);
	$('.nav li:eq(1) a').html(myData.link1);
	$('.nav li:eq(1) a').attr('href',myData.link1_href);
	$('.nav li:eq(2) a').html(myData.link2);
	$('.nav li:eq(2) a').attr('href',myData.link2_href);
	$('.nav li:eq(3) a').html(myData.link3);
	$('.nav li:eq(3) a').attr('href',myData.link3_href);
	
	$('.dropdown a:eq(0).dropdown-toggle').html(myData.dropdown1);
	$('.dropdown a.dropdown-toggle:eq(1)').html(myData.dropdown2);
	
	//下拉菜单
	$('ul.dropdown-menu:eq(0)').html(myData.dropdown_menu1);
	$('ul.dropdown-menu:eq(1)').html(myData.dropdown_menu2);
	//$('ul.dropdown-menu:eq(2)').html(myData.dropdown_menu2);
	
	$('form.navbar-search input').attr('placeholder',myData.placeholder);
	
	$('.nav.pull-right li:eq(0) a').html(myData.link4);
	$('.nav.pull-right li:eq(0) a').attr('href',myData.link4_href);


    $("pre").addClass("prettyprint");	//.addClass("prettyprint linenums");
    prettyPrint();

//end define
});