var scrollDuration = 300;

// paddles
var leftPaddle = document.getElementsByClassName('left-paddle');
var rightPaddle = document.getElementsByClassName('right-paddle');

// get items dimensions
var numberOfItems = $('.item').length;

// width of a single menu item
var getItemSize = function() {
	return $('.item').outerWidth(true);
}
var itemSize = getItemSize();

// width of menu wrapper window
var getMenuWrapperSize = function() {
	return $('.menu').outerWidth();
}
var menuWrapperSize = getMenuWrapperSize();

// total length of all menu items
var getMenuSize = function() {
	return numberOfItems * itemSize;
};
var menuSize = getMenuSize();

// current horizontal scoll position
var getMenuPosition = function() {
	return $('.menu').scrollLeft();
};
var menuPosition = getMenuPosition();

var getMaxMenuPosition = function() {
    return menuSize - menuWrapperSize;
}
var maxMenuPosition = getMaxMenuPosition();

var updatePaddles = function() {
	// enable and disable the paddles depending on scroll position
    if (menuPosition >= maxMenuPosition - 2) {
		$(rightPaddle).addClass('disabled');
    } else {
        $(rightPaddle).removeClass('disabled');
    }
    if (menuPosition <= 1) {
		$(leftPaddle).addClass('disabled');
    } else {
        $(leftPaddle).removeClass('disabled');
    }
};
updatePaddles();


// recalculate on window resize
$(window).on('resize', function() {
	menuWrapperSize = getMenuWrapperSize();
    itemSize = getItemSize();
    menuSize = getMenuSize();
    menuPosition = getMenuPosition();
    maxMenuPosition = getMaxMenuPosition();
    updatePaddles();
});


// finally, what happens when we are actually scrolling the menu
$('.menu').on('scroll', function() {

	// get how much have we scrolled so far
	menuPosition = getMenuPosition();

    updatePaddles();

}); 

var getScrollRight = function() {
    var scrollRight = getMenuPosition() + itemSize; 
    scrollRight = (Math.floor(scrollRight / itemSize)) * itemSize;
    return scrollRight;
}

var getScrollLeft = function() {
    var scrollLeft = getMenuPosition() - (itemSize / 6); 
    scrollLeft = (Math.floor(scrollLeft / itemSize)) * itemSize;
    return scrollLeft;
}

// scroll to right
$(rightPaddle).on('click', function() {
	$('.menu').animate( { scrollLeft: getScrollRight() }, scrollDuration);
});

// scroll to left
$(leftPaddle).on('click', function() {
	$('.menu').animate( { scrollLeft: getScrollLeft() }, scrollDuration);
});

