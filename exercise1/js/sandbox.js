var div_module = $('div.module');

var label = $('#search label[for = "q"]');

var third_element_1 = $('#myList li:eq(2)')

var third_element_2 = $('#myListItem')

var third_element_3 = $('ul li:contains("List item 3")');


/* The best method to get the third li is by using the id(direct id) i.e. here in this case is the second method ,because ids are unique to a element and directly accesses the single element while in first case first id of list is approached and then third item (index 2) is selected. 
The third case will perform the worst because it will scan all ul & their li until it reaches the element ehich contains given text */


var hidden_tag_length = $(':hidden').length;

var images = $('img[alt != ""]');

var odd_rows = $('tr:odd');

