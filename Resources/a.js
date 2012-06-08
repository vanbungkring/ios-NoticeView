var win = Titanium.UI.currentWindow;
Ti.include('vanbungkring.notice.js');
var noticeView = new NoticeView();
var button_small_success = Titanium.UI.createButton({
	title : 'Small Success',
});

win.add(button_small_success);

button_small_success.addEventListener('click', function() {
	noticeView.show({
		text : "Merdeka Jinjit",
		error : true
	});
	setTimeout(function() {
		noticeView.hide();
	}, 2000);
});
// animate the center point object
