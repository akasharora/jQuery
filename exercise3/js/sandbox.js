for (var i = 0; i < 5; i ++) {
    $('#myList').append('<li>List Item </li>');            //using loop to add 5 list items at the end of list with id 'myList'
}
console.log($('#myList li'));



$('#myList li:odd').remove();                             //remove the odd list items



var div_module = $('div.module:last-of-type');             
div_module.append('<h2>hello World</h2>');                //adding 'h2' tag inside of last div having class 'module'
div_module.append('<p>This page contains information about fruits, bread and vegetables</p>');                 //adding 'p' tag to div




var select = $('li select').append('<option value = "wednesday">Wednesday</option>');   //adding wednesday(value = select) option to select



var div = $('#main').append('<br><div><img src="images/fruit.jpg" alt="fruit" ></div>');       //adding div after the last div inside 'main'
$('#main div:last-of-type').addClass('module');                                               //adding class 'module' to the last div added
