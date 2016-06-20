//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);
//Cycle over menu links
$('#menu a').each(function(){
  //Create an option
  var $option = $('<option></option>');
  if($(this).parent().hasClass('selected'))
  {
    $option.prop("selected",true);
  }
  $option.attr("value",$(this).attr("href"));
  $option.text($(this).text());
  $select.append($option);
});

// Create button
/*
var $button = $('<button>Go</button>');
$('#menu').append($button);
$button.click(function(){
  window.location = $select.val();
});
*/

$select.change(function(){
  window.location = $select.val();
});











