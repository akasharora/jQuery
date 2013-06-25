var label_text = $('#search label').text();                        //gives the text inside the label
var search_input = $('#search input.input_text[name = "q"]');
search_input.val(label_text);                                     //assigning value of input textbox to the text of the label


search_input.addClass("hint");                                    //adding hint class to the search textbox   


$('#search label').remove();                                      //removing the label element


search_input.bind("focus", function() {                     
    $(this).val("");                                              //removes the hint text
    $(this).removeClass("hint");                                  //removes the hint class
});



search_input.bind("blur", function(){                             
    if (!search_input.val()) {                                    //if textbox is empty
        $(this).val(label_text);                                  //set text to hint text
        $(this).addClass("hint");                                 //add class hint which was removed on focus
    }
});
