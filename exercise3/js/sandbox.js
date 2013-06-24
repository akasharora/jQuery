for (var i = 0; i < 5; i ++) {
    $('#myList').append('<li>List Item </li>');
}
console.log($('#myList li'));

$('#myList li:odd').remove();

var div_module = $('div.module:last-of-type');
div_module.append('<h2>hello World</h2>');
div_module.append('<p>This page contains information about fruit, bread and vegetables</p>');

var select = $('li select').append('<option value = "wednesday">Wednesday</option>');

var div = $('#main').append('<br><div><img src="images/fruit.jpg" alt="fruit" ></div>')
$('#main div:last-of-type').addClass('module');
console.log($('#main div'));
