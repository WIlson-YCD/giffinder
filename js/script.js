// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  function giphyURLWithSearchTerm(searchTerm) {
    // write a function that will return a url for the giphy API with
    var newURL =  "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
    // the searchTerm provided in the parameters
    return newURL; 
}
//------------------------------------------------//
function appendImageToBody(srcURL) {
    // write a function that will append an <img> to the body with the
    $('body').append('<img src ='+srcURL+'>');
    // URL provided in the parameters
    
}
//-----------------------------------------------//
$("#submitbtn").click(function(){
    var userinput = $("input").val(); 
    callGiphyAPIWithSearchTerm(userinput);
    console.log("hellow there");
});

function callGiphyAPIWithSearchTerm(searchTerm) {
     $.ajax({
      url: giphyURLWithSearchTerm(searchTerm),
      method: "GET",
      success: function(response) {
           // Log the whole response to the console
    
           // Log the first image of the data to the console
    
    var array = response.data;
    var url = array[Math.floor(Math.random()*array.length)].images.original.url;
    appendImageToBody(url);
    
            // Log the "type" property of the first image object to the console
    var type = response.data[0].type ; 
           // Log the "title" property of the first image object to the console
      },
    }); 
}
    
    
  
  
  
});
