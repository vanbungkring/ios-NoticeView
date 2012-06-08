var NoticeView = function(van_notice) {

	////decalration all global variable and common
	var isAndroid = (Ti.Platform.osname != "android") ? false : true;
	var _window = (van_notice) ? ((van_notice.window) ? van_notice.window : Ti.UI.currentWindow) : Ti.UI.currentWindow;
	var _noticeSuccess;
	var _noticeError;
	var _noticeChange;
	var _imageViewStatus;
	var _noticeSuccessLabel;
	var _hasText;
	var _hasImage;
	/////declaration end
	///create function to make it works
	(
		function() {
			///create Success Notification
			_noticeSuccess = Titanium.UI.createView({
				height : 50,
				width : 320,
				backgroundColor : '#336699',
				top : -50,
			});
			_imageViewStatus = Ti.UI.createImageView({
				width : 28,
				height : 28
			})
			_noticeSuccessLabel = Ti.UI.createLabel({
				color : "#FFF",
				font : {
					fontSize : 14,
					fontWeight : "bold"
				},
				textAlign : "center",
				left : 10,
				right : 10,
				bottom : 10,
				height : 16

			})

		})();

	this.show = function(van_notice) {
		if (!isAndroid) {
			if (van_notice) {
				if (van_notice.text || van_notice.textId) {

					setNoticeLabel(van_notice);

					_hasText = 1;
					_noticeSuccess.animate({
						top : 0,
						right : 0,
						duration : 500
					});

				}
			}
		}
		_window.add(_noticeSuccess);
	}
	this.hide = function(van_notice) {
		alert('hide');
	}
	var setNoticeLabel = function(van_notice) {
		var _width = Ti.UI.createLabel({
			text : (van_notice.text) ? van_notice.text : van_notice.textId,
			font : {
				fontSize : 14,
				fontWeight : "bold"
			},
			width : "auto"
		}).toImage().width + 20;

		//_labelActivityIndicator.text = (van_notice.text) ? van_notice.text : van_notice.textId;
	}
}
