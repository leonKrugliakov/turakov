$(document).ready(function(){

  function outputStories(randomSource){
    $.getJSON("https://newsapi.org/v1/articles?source=" + randomSource + "&apiKey=38736fedc4b0460fafc18e3d9b26d00a", function(data){
      var randy = Math.floor(Math.random() * (data.articles.length - 0 + 1)) + 0;
      $('#output').attr('src', data.articles[0].url);
      $('#output').attr('height', "2000px");
    });
  }

  $.getJSON("https://newsapi.org/v1/sources", function(data){
    var array = [0,1,4,5,6,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23,26,28,31,33,34,36,40,41,42,44,46,49,50,51,52,57,60,62,64,65,66,67];
    var randy = array[Math.floor(Math.random() * (42 - 0 + 1)) + 0];
    newsSource = data.sources[randy].id;
    outputStories(newsSource);
  });



});
