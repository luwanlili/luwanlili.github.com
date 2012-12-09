//整合jQuery类库
define('#jquery/1.7.2/jquery', [], function(require) {
	require('../js/jquery-1.7.2.min.js');
	return $.noConflict(true);
});
