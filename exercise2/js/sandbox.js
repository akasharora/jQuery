var images = $('img');
images.each(function() {
    console.log("value of alt is " + $(this).attr('alt'));
});

var search_input = $(':input[name = "q"]');
console.log(search_input);
console.log(search_input.prevAll());
search_input.parent().addClass('input_text');

var list_item = $('#myList li.current').removeClass('current');
list_item.addClass('input_class');
console.log(list_item);

var select = $('#specials select[name = "day"]');
console.log(select);
select.parent().next();

var submit = $('#specials input[type = "submit"]');
console.log(select.parent().next());

var list_item_1 = $('#slideshow li:first-child');
list_item_1.addClass('current');
console.log(list_item_1);
var list_items = $('#slideshow li:nth-of-type(n + 2)').addClass('disabled');
console.log($('#slideshow li:nth-of-type(n + 2)'));
