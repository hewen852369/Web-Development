//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the larger image - lightbox
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');
$overlay.append($image);
$overlay.append($caption);
//Add overlay
$("body").append($overlay);
//1. Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Show the overlay
  $overlay.show();
  //Update overlay with the image linked in the link
  $image.attr("src",imageLocation);

  //Get child's alt attribute and set caption
  var alt = $(this).children().attr("alt")
  $caption.text(alt);
});

$overlay.click(function(){
  $overlay.hide();
});









