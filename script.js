$(document).ready(function(){

  function outputStories(randomSource){
    $.getJSON("https://newsapi.org/v1/articles?source=" + randomSource + "&apiKey=38736fedc4b0460fafc18e3d9b26d00a", function(data){
      var randy = Math.floor(Math.random() * (data.articles.length - 0 + 1)) + 0;
      $('#output').attr('src', data.articles[randy].url);
      $('#output').attr('height', "2000px");
    });
  }

  $.getJSON("https://newsapi.org/v1/sources", function(data){
    var array = [0,1,4,5,8,9,10,11,12,14,17,19,20,26,34,40,42,49,50,51,52,57,60,62];
    var randy = array[Math.floor(Math.random() * (array.length - 0 + 0)) + 0];
    console.log(randy);
    newsSource = data.sources[randy].id;
    outputStories(newsSource);
  });



});
