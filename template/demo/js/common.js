var h = new Date().getHours();
var dw = 640;
var ww = window.screen.width;
var s = Math.round(ww / dw * 10) / 10;
$(document).ready(function() {
	$("<meta>").attr({
		name: 'viewport',
		content: 'width=device-width,initial-scale=' + s + ', minimum-scale=' + s + ', maximum-scale=' + s + ', user-scalable=no'
	}).appendTo('head');
	// if (h < 9 || h >= 18) {
	// 	$("<link>").attr({
	// 		rel: 'stylesheet',
	// 		href: 'css/night.css'
	// 	}).appendTo('head');
	// }
});

$(".search_text").click(function() {
	$(this).hide();
	$("#search_text").show();
});
// TODO:弹出底部搜索框
$(".pop").click(function() {
	$(".search_bottom").show();
});

;
(function() {
	var doc = document.documentElement;

	function resize() {
		doc.style.fontSize = doc.clientWidth / 320 * 100 + 'px';
	}

	window.addEventListener('resize', resize, false);

	resize();
})();