//init.js
define(function(require, exports, module) {
	require('../css/bootstrap.css');
	//require('../css/bootstrap.min.css');
	require('../js/jquery-1.7.2.min.js');
	var $ = require('../js/sea_jquery.js');
	require('../js/jquery-ui.min.js');

	require('../css/prettify.css');
	require('../css/style.css');
	require('../js/prettify.js');
	
	
    var data = require('../js/data.js');

	require('../js/plugins/bootstrap-tab.js');
	require('../js/plugins/bootstrap-dropdown.js');
	
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
	
	
	
!function ($) {

  "use strict"; // jshint ;_;


 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle="dropdown"]'
    , Dropdown = function (element) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , selector
        , isActive

      if ($this.is('.disabled, :disabled')) return

      selector = $this.attr('data-target')

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      $parent = $(selector)
      $parent.length || ($parent = $this.parent())

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) $parent.toggleClass('open')

      return false
    }

  }

  function clearMenus() {
    $(toggle).parent().removeClass('open')
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(function () {
    $('html').on('click.dropdown.data-api', clearMenus)
    $('body')
      .on('click.dropdown', '.dropdown form', function (e) { e.stopPropagation() })
      .on('click.dropdown.data-api', toggle, Dropdown.prototype.toggle)
  })

}(window.jQuery);

//end define
});