//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p><b></b></p>");


$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);
 

$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
 
  $image.attr("src", imageLocation);
  

  $overlay.show();
  
  

var textDisplay = $(this).children("img").attr("alt");
$caption.text(textDisplay);
});

//When overlay is clicked
$overlay.click(function(){

  $overlay.hide();
});







