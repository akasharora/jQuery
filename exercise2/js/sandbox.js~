var images = $('img');                                            
images.each(function() {
    console.log("value of alt is " + $(this).attr('alt'));          //displaying alt attribute of all selected images using $('img')
});


var search_input = $(':input[name = "q"]');                         //selecting input where name = "q"(attribute of search input textbox)
console.log(search_input);
search_input.parent().addClass('input_text');                       //adding 'input_text' class to parent of 'search_input' i.e. the form here



var list_item = $('#myList li.current').removeClass('current');     //removing class 'current' from list item having class 'current'
list_item.next().addClass('current');                               //add class 'current' to next list item



var select = $('#specials select[name = "day"]');                   //selecting select inside 'specials' id
console.log(select);
console.log(select.parent().next().children());                     //selecting submit which here is child of next list item(after select)



var list_item_1 = $('#slideshow li:first-child');                   //selecting first li under id 'slideshow' id & add class current to it
list_item_1.addClass('current');                                    
console.log(list_item_1);
console.log(list_item_1.nextAll().addClass('disabled'))             //add class 'disabled' to next siblings of selected li
