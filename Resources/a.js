var win = Titanium.UI.currentWindow;
Ti.include('vanbungkring.notice.js');
var noticeView = new NoticeView();
var button_small_error = Titanium.UI.createButton({
	title : 'Small error',
	top : 200
});
win.add(button_small_error);
var button_small_success = Titanium.UI.createButton({
	title : 'Small Success',
});

win.add(button_small_success);

button_small_success.addEventListener('click', function() {
	noticeView.show({
		text : "No Internet Connection",
		//error : true
	});
});
// animate the center point object
