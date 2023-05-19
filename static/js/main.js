console.log("hello new world!");
// duration of scroll animation
var scrollDuration = 300;
// paddles
var leftPaddle = document.getElementsByClassName('left-paddle');
var rightPaddle = document.getElementsByClassName('right-paddle');

// scroll to left
$(rightPaddle).on('click', function() {
    console.log("right click");
	$('.menu').animate( { scrollLeft: menuInvisibleSize}, scrollDuration);
});

// scroll to right
$(leftPaddle).on('click', function() {
    console.log("left click");
	$('.menu').animate( { scrollLeft: '0' }, scrollDuration);
});
