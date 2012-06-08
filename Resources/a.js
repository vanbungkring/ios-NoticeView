var win = Titanium.UI.currentWindow;

var _small_success = Titanium.UI.createView({
	height : 50,
	width : 320,
	backgroundColor : '#336699',
	top : -50,
});
var _small_success_label = Ti.UI.createLabel({
	text : 'Link Saved Successfully',
	width : 250,
	color : '#fff',
	font : {
		fontSize : 16,
		fontFamily : 'Helvetica Neue',
		fontWeight : 'Bold'
	},
	shadowOffset : 1,
	shadowColor : '#f60',
	left : 50,
});
var _small_success_image = Ti.UI.createImageView({
	image : 'images/warning.png',
	top : 10,
	left : 10,
})
_small_success.add(_small_success_image);
_small_success.add(_small_success_label);

win.add(_small_success);
var _small_error = Titanium.UI.createView({
	height : 50,
	width : 320,
	backgroundColor : '#c50000',
	top : -50,
});
win.add(_small_error);
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
	smallSuccess();
	setTimeout(function() {
		closeAnimation();
	}, 2000);

});
button_small_error.addEventListener('click', function() {
	smallError();
	setTimeout(function() {
		closeAnimations();
	}, 2000);

});
///small success
function smallSuccess() {
	_small_success.animate({
		top : 0,
		right : 0,
		duration : 500
	});
}

function smallError() {
	_small_error.animate({
		top : 0,
		right : 0,
		duration : 500
	});
}

function closeAnimation() {

	_small_success.animate({
		top : -50,
		right : 0,
		duration : 500
	});

}
function closeAnimations() {

	_small_error.animate({
		top : -50,
		right : 0,
		duration : 500
	});

}


// animate the center point object
